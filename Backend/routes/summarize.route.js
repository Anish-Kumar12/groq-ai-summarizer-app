import express from 'express';
import multer from 'multer';
import { summarize } from '../controllers/summarize.controller.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'Uploads/',
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });


router.post('/', upload.single('transcriptFile'), summarize);

export default router;
