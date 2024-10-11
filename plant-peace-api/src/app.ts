import express from "express";
import upload from "../src/config/multerConfig"; // Ajuste o caminho conforme necessário
import {
  getAllPlants,
  addPlant,
  deletePlantHandler,
  updatePlantHandler,
  getPlantHandler,
} from "../src/controllers/plantController"; // Ajuste o caminho conforme necessário

const app = express();

// Configuração do CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Supondo que você esteja usando JSON
app.use(express.json());

// Definição das rotas
app.get("/api/plants", getAllPlants);
app.post("/api/plants", addPlant);
app.delete("/api/plants/:id", deletePlantHandler);
app.put("/api/plants/:id", updatePlantHandler);
app.get("/api/plants/:id", getPlantHandler);

// Outros middlewares ou configurações podem ser adicionados aqui

export default app; // Exporta o app
