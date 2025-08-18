import { sendSummaryEmail } from '../services/EmailService.js';

export const emailSummary = async (req, res) => {
  try {
    const { recipients, summary } = req.body;
    if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
      return res.status(400).json({ error: 'Recipients list is required.' });
    }
    if (!summary || summary.trim() === '') {
      return res.status(400).json({ error: 'Summary is required.' });
    }
    await sendSummaryEmail(recipients, summary);
    res.json({ success: true, message: 'Summary sent by email.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email.', details: error.message });
  }
};
