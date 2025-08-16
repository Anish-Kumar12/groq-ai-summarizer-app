import fs from 'fs';
import { getSummary } from '../services/GroqService.js';

export const summarize = async (req, res) => {
  try {
    let transcriptText = '';
    // Use default prompt if none provided
    const defaultPrompt = 'Please analyze the following transcript and provide a clear, concise, and well-structured summary highlighting the key points, decisions, and action items. The summary should be suitable for professional review and include any important deadlines or follow-ups.';
    const prompt = req.body.prompt && req.body.prompt.trim() !== '' ? req.body.prompt : defaultPrompt;

    if (req.file) {
      transcriptText = fs.readFileSync(req.file.path, 'utf8');
      fs.unlinkSync(req.file.path);
    } else if (req.body.transcript) {
      transcriptText = req.body.transcript;
    }

    if (!transcriptText) {
      return res.status(400).json({ error: 'Transcript is required.' });
    }

    const summary = await getSummary(transcriptText, prompt);
    res.json({ summary });
  } catch (error) {
    res.status(500).json({ error: 'Summarization failed.', details: error.message });
  }
};
