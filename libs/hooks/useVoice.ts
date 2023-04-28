import Voice, {
  SpeechErrorEvent,
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechStartEvent,
} from '@react-native-voice/voice';
import { notificationToaster } from 'libs/helpers';
import { useCallback, useEffect, useState } from 'react';

type VoiceHookReturn = {
  error: string | undefined;
  hasStarted: boolean;
  hasEnded: boolean;
  isVoiceRecognised: boolean;
  transcripts: string | undefined;
  stopRecognizing: () => Promise<void>;
  startRecognizing: () => Promise<void>;
  reset: () => void;
};

export const useVoice = (): VoiceHookReturn => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [hasEnded, setHasEnd] = useState<boolean>(false);
  const [isVoiceRecognised, setIsVoiceRecongnised] = useState<boolean>(false);
  const [transcripts, setTranscripts] = useState<string | undefined>(undefined);
  const [results, setResults] = useState<string | undefined>(undefined);

  const handleSpeechRecognised = useCallback(
    (isRecognized: SpeechRecognizedEvent) => {
      if (isRecognized.isFinal) {
        setIsVoiceRecongnised(isRecognized.isFinal);
        notificationToaster({
          type: 'success',
          options: {
            text1: 'Voice Recognized',
            text2: 'Voice has been detected',
          },
        });
      }
    },
    []
  );

  const handleSpeechStart = useCallback((event: SpeechStartEvent) => {
    if (!event?.error) {
      setHasStarted(true);
      notificationToaster({
        type: 'success',
        options: {
          text1: 'Voice Recogniton has started',
          text2:
            'Please tap the record button to stop when your speech has ended',
          position: 'bottom',
        },
      });
    }
  }, []);

  const handleSpeechEnd = useCallback(() => {
    setHasEnd(true);
  }, []);

  const handleSpeechError = useCallback(
    ({ error: speechError }: SpeechErrorEvent) => {
      setError(speechError?.message);
    },
    []
  );

  const handleSpeechResults = useCallback((data: SpeechResultsEvent) => {
    if (data.value) {
      const result = data.value[0];
      setResults(result);
    }
  }, []);

  const stopRecognizing = useCallback(async () => {
    try {
      await Voice.stop();
      setHasEnd(true);
      setHasStarted(false);
      if (!results) return;
      setTranscripts(results);
      notificationToaster({
        type: 'success',
        options: {
          text1: 'Voice Recogniton',
          text2: 'Recogniton has been ended',
          position: 'bottom',
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  }, [results]);

  const startRecognizing = useCallback(async () => {
    await Voice.start('en-US');
  }, []);

  const reset = useCallback(() => {
    setResults(undefined);
    setHasEnd(false);
    setTranscripts(undefined);
  }, []);

  useEffect(() => {
    Voice.onSpeechStart = handleSpeechStart;
    Voice.onSpeechRecognized = handleSpeechRecognised;
    Voice.onSpeechEnd = handleSpeechEnd;
    Voice.onSpeechError = handleSpeechError;
    Voice.onSpeechResults = handleSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [
    handleSpeechEnd,
    handleSpeechError,
    handleSpeechResults,
    handleSpeechStart,
    handleSpeechRecognised,
  ]);

  return {
    error,
    reset,
    hasStarted,
    hasEnded,
    isVoiceRecognised,
    transcripts,
    stopRecognizing,
    startRecognizing,
  };
};
