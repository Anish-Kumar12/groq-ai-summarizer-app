import Groq from 'groq-sdk';
import dotenv from 'dotenv';
dotenv.config();
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const getSummary = async (transcript, prompt) => {
  const chatCompletion = await client.chat.completions.create({
    model: 'openai/gpt-oss-20b',
    messages: [{ role: 'user', content: `${prompt}\n\n${transcript}` }],
  });
  return chatCompletion.choices[0].message.content;
};
