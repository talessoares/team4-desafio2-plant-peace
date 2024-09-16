import { log } from 'console';
import Plant, { IPlant } from '../models/plant';
import { v4 as uuidv4 } from 'uuid';


const handleError = (error: unknown, action: string): void => {
  if (error instanceof Error) {
    throw new Error(`Failed to ${action}: ${error.message}`);
  } else {
    throw new Error(`An unknown error occurred while ${action}`);
  }
}

export const getPlants = async (): Promise<IPlant[]> => {
  console.log('getPlants service');
  try {
    return await Plant.find();
  } catch (error) {
    handleError(error, 'get plants');
    throw null;
  }
};

function createId(userId?: number | string): string {
  if (userId !== undefined) {
    if (typeof userId === 'number' || (typeof userId === 'string' && userId.trim() !== '')) {
      return userId.toString();
    } else {
      throw new Error('Invalid user ID provided');
    }
  }
  return uuidv4();
}

export const createPlant = async (plant: IPlant): Promise<IPlant> => {
  console.log('createPlant service');
  console.log('plant', plant);
  if(plant.id === undefined) {
    plant.id = createId();
  }

  try {
    const existingPlant = await verifyIfPlantExists(plant.id);
    if (existingPlant) {
      throw new Error(`Plant with ID ${plant.id} already exists`);
    }
    
    if (plant.discountPercentage < 0 || plant.discountPercentage > 100) {
      throw new Error('Invalid discount percentage');
    }

    
    if (plant.discountPercentage === 0) {
      plant.isInSale = false;
    }

    console.log(plant.discountPercentage);

    const newPlant = new Plant(plant);
    return await newPlant.save();
  } catch (error) {
    handleError(error, 'create plant');
    throw null;
  }
};

export const verifyIfPlantExists = async (plantId: number | string): Promise<boolean> => {
  console.log('verifyIfPlantExists service');
  try {
    const plant = await Plant.findOne({ id: plantId });
    log('plant id', plantId);
    return !!plant;
  } catch (error) {
    handleError(error, 'verify if plant exists');
    return false; 
  }
}

export const deletePlant = async (plantId: number): Promise<IPlant> => {
  console.log('deletePlant service');
  try {
    const deletedPlant = await Plant.findOneAndDelete({ id: plantId });
    if (!deletedPlant) {
      throw new Error(`Plant with ID ${plantId} not found`);
    }
    return deletedPlant;
  } catch (error) {
    handleError(error, 'delete plant');
    throw null; 
  }
}

export const updatePlant = async (plantId: number, plant: IPlant): Promise<IPlant> => {
  console.log('updatePlant service');
  try {
    const updatedPlant = await Plant.findOneAndUpdate({ id: plantId }, plant, { new: true });
    if (!updatedPlant) {
      throw new Error(`Plant with ID ${plantId} not found`);
    }
    return updatedPlant;
  } catch (error) {
    handleError(error, 'update plant');
    throw null;
  }
}

export const getPlant = async (plantId: string): Promise<IPlant> => {
  console.log('getPlant service');
  try {
    const exists = await verifyIfPlantExists(plantId);
    if (!exists) {
      throw new Error(`Plant with ID ${plantId} not found`);
    }
    const foundPlant = await Plant.findOne({ id: plantId });
    if (!foundPlant) {
      throw new Error(`Plant with ID ${plantId} not found`);
    }
    return foundPlant;
  } catch (error) {
    handleError(error, 'get plant');
    throw null; 
  }
}


