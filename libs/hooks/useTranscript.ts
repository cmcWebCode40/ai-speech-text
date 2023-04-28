import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import {
  generateHTML,
  getOpenAIPrompt,
  notificationToaster,
} from 'libs/helpers';
import { AIdefaultOptions, openAI } from 'libs/services';
import { useCallback, useEffect, useState } from 'react';

export const useTranscript = (transcripts: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloadingPDf, setIsDownloadingPDf] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [html, setHtml] = useState<string | undefined>(undefined);
  const [aISummary, setAISummary] = useState<string | undefined>(undefined);

  const handleDownloadPDF = useCallback(async () => {
    setIsDownloadingPDf(true);
    try {
      const file = await printToFileAsync({
        html,
        base64: false,
      });
      await shareAsync(file.uri);
    } catch (err) {
      notificationToaster({
        type: 'error',
        options: {
          text1: 'Error',
          text2: 'someting went wrong please try again',
        },
      });
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setIsDownloadingPDf(false);
    }
  }, [html]);

  const handleAISummary = useCallback(async () => {
    setIsLoading(true);
    try {
      const chatGPTData = {
        ...AIdefaultOptions,
        prompt: getOpenAIPrompt(transcripts),
      };

      const response = await openAI.createCompletion(chatGPTData);
      const summary = response.data.choices[0].text?.trim();
      setAISummary(summary);
      const html = generateHTML(summary, transcripts);
      setHtml(html);
      notificationToaster({
        type: 'success',
        options: {
          text1: 'AI summary generated',
          text2: 'Click download to save as PDF ',
        },
      });
    } catch (error) {
      notificationToaster({
        type: 'error',
        options: {
          text1: 'Error',
          text2: 'someting went wrong please try again',
        },
      });
      setError('someting went wrong please try again');
    } finally {
      setIsLoading(false);
    }
  }, [transcripts]);

  useEffect(() => {
    handleAISummary();
  }, [handleAISummary]);

  return {
    error,
    isLoading,
    aISummary,
    isDownloadingPDf,
    handleDownloadPDF,
  };
};
