import express from 'express';
import plantRoutes from './routes/plantRoutes';
import connectDB from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api', plantRoutes);

export default app;
