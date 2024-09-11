import express from 'express';
import plantRoutes from './routes/plantRoutes';
import connectDB from './config/db';
import dotenv from 'dotenv';
import cors from 'cors';  

dotenv.config();

const app = express();

// Configuração do CORS
app.use(cors({
  origin: 'http://localhost:5173' // Substitua pela URL do seu front-end, se diferente
}));

// Middleware para parsear JSON
app.use(express.json());

// Conectar ao banco de dados
connectDB();

// Definir rotas
app.use('/api', plantRoutes);

export default app;