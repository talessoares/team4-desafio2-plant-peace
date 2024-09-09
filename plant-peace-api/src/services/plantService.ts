import { IPlant } from '../models/plant';

const plants: IPlant[] = [];

export const getPlants = (): IPlant[] => {
  return plants;
};

export const createPlant = (plant: IPlant): void => {
  plants.push(plant);
};

export const getPlantById = (id: number): IPlant | undefined => {
  return plants.find((plant) => plant.id === id);
};

export const updatePlant = (updatedPlant: IPlant): void => {
  const index = plants.findIndex((plant) => plant.id === updatedPlant.id);
  if (index !== -1) {
    plants[index] = updatedPlant;
  }
};

export const deletePlant = (id: number): void => {
  const index = plants.findIndex((plant) => plant.id === id);
  if (index !== -1) {
    plants.splice(index, 1);
  }
};
