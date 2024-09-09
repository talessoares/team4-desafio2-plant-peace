// src/controllers/plantController.ts
import { Request, Response } from 'express';
import { getPlants, createPlant } from '../services/plantService';
import { IPlant } from '../models/plant';

export const getAllPlants = async (req: Request, res: Response): Promise<void> => {
  console.log('getAllPlants controller');  
  try {
    const plants = await getPlants();
    console.log(plants);
    
    res.json(plants);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const addPlant = async (req: Request, res: Response): Promise<void> => {
  console.log('addPlant controller');
  try {
    const plantData = req.body.plants; // Extraia o array de plantas do corpo da requisição
    console.log("req.body", req.body);

    if (!Array.isArray(plantData)) {
      res.status(400).json({ message: 'Invalid data format' });
      return;
    }

    // Crie um array de promessas para salvar cada planta
    const newPlants = await Promise.all(plantData.map((plant: IPlant) => createPlant(plant)));

    res.status(201).json(newPlants);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

