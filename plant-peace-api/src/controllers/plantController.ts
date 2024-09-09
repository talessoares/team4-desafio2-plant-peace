import { Request, Response } from 'express';
import { getPlants, createPlant } from '../services/plantService';

export const getAllPlants = async (req: Request, res: Response) => {
  try {
    const plants = await getPlants();
    res.status(200).json({ plants });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching plants', error });
  }
};

export const addPlant = async (req: Request, res: Response) => {
  try {
    const plant = await createPlant(req.body);
    res.status(201).json({ plant });
  } catch (error) {
    res.status(500).json({ message: 'Error adding plant', error });
  }
};
