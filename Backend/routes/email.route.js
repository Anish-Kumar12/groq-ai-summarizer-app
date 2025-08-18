import express from 'express';
import { emailSummary } from '../controllers/email.controller.js';

const router = express.Router();

router.post('/send', emailSummary);

export default router;
