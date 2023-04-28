import { config } from 'libs/config';

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: config.OPENAI_API_KEY,
});

export const openAI = new OpenAIApi(configuration);

export const AIdefaultOptions = {
  model: 'text-davinci-003',
  temperature: 0.5,
  max_tokens: 4000, // This is for setting the number of result text
};
