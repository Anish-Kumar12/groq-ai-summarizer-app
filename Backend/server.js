import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import summarizeRoutes from './routes/summarize.route.js';
import emailRoutes from './routes/email.route.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Use the summarize routes for /summarize endpoints
app.use('/summarize', summarizeRoutes);
// Use the email routes for /email endpoints
app.use('/email', emailRoutes);

app.get('/', (req, res) => {
  res.send('Groq Meeting Notes AI Backend is running!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
