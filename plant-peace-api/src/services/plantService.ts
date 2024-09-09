import { Plant } from '../models/plant';

const plants: Plant[] = [];

export const getPlants = (): Plant[] => {
  return plants;
};

export const createPlant = (plant: Plant): void => {
  plants.push(plant);
};

export const getPlantById = (id: number): Plant | undefined => {
  return plants.find((plant) => plant.id === id);
};

export const updatePlant = (updatedPlant: Plant): void => {
  const index = plants.findIndex((plant) => plant.id === updatedPlant.id);
  plants[index] = updatedPlant;
};

export const deletePlant = (id: number): void => {
  const index = plants.findIndex((plant) => plant.id === id);
  plants.splice(index, 1);
};


