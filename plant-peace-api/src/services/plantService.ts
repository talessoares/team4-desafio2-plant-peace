import Plant, { IPlant } from '../models/plant';

export const getPlants = async (): Promise<IPlant[]> => {
  console.log('getPlants service');
  try {
    return await Plant.find();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to get plants: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while retrieving plants');
    }
  }
};

export const createPlant = async (plant: IPlant): Promise<IPlant> => {
  console.log('createPlant service');
  console.log('plant', plant);
  try {
    const newPlant = new Plant(plant);
    return await newPlant.save();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to create plant: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while creating the plant');
    }
  }
};
