import Voice, {
  SpeechEndEvent,
  SpeechErrorEvent,
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechStartEvent,
  SpeechVolumeChangeEvent,
} from '@react-native-voice/voice';
import { useEffect } from 'react';

export const useVoice = () => {
  const handleSpeechRecognised = (value: SpeechRecognizedEvent) => {
    return value;
  };
  const handleSpeechStart = (event: SpeechStartEvent) => {
    return event;
  };
  const handleSpeechEnd = (value: SpeechEndEvent) => {
    return value;
  };
  const handleSpeechError = (error: SpeechErrorEvent) => {
    return error;
  };

  const handleSpeechResults = (data: SpeechResultsEvent) => {
    return data;
  };

  const handleSpeechPartialResults = (data: SpeechResultsEvent) => {
    return data;
  };

  const onSpeechVolumeChanged = (event: SpeechVolumeChangeEvent) => {
    return event;
  };

  const stopRecognizing = async () => {
    await Voice.stop();
  };

  const cancelRecognizing = async () => {
    await Voice.cancel();
  };

  const destroyRecognizer = async () => {
    await Voice.destroy();
  };

  useEffect(() => {
    Voice.onSpeechStart = handleSpeechStart;
    Voice.onSpeechRecognized = handleSpeechRecognised;
    Voice.onSpeechEnd = handleSpeechEnd;
    Voice.onSpeechError = handleSpeechError;
    Voice.onSpeechResults = handleSpeechResults;
    Voice.onSpeechPartialResults = handleSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return {
    destroyRecognizer,
    cancelRecognizing,
    stopRecognizing,
  };
};
