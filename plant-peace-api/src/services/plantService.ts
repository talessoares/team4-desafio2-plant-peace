import { log } from "console";
import Plant, { IPlant } from "../models/plant";
import { v4 as uuidv4 } from "uuid";

const handleError = (error: unknown, action: string): void => {
  if (error instanceof Error) {
    throw new Error(`Failed to ${action}: ${error.message}`);
  } else {
    throw new Error(`An unknown error occurred while ${action}`);
  }
};

export const getPlants = async (): Promise<IPlant[]> => {
  console.log("getPlants service");
  try {
    return await Plant.find();
  } catch (error) {
    handleError(error, "get plants");
    throw null;
  }
};

function createId(userId?: number | string): string {
  if (userId !== undefined) {
    if (
      typeof userId === "number" ||
      (typeof userId === "string" && userId.trim() !== "")
    ) {
      return userId.toString();
    } else {
      throw new Error("Invalid user ID provided");
    }
  }
  return uuidv4();
}

export const createPlant = async (plant: IPlant): Promise<IPlant> => {
  console.log("createPlant service");
  console.log("plant", plant);
  if (plant.id === undefined) {
    plant.id = createId();
  }

  try {
    const existingPlant = await verifyIfPlantExists(plant.id);
    if (existingPlant) {
      throw new Error(`Plant with ID ${plant.id} already exists`);
    }

    if (plant.discountPercentage < 0 || plant.discountPercentage > 100) {
      throw new Error("Invalid discount percentage");
    }

    if (plant.discountPercentage === 0) {
      plant.isInSale = false;
    }

    console.log(plant.discountPercentage);

    const newPlant = new Plant(plant);
    return await newPlant.save();
  } catch (error) {
    handleError(error, "create plant");
    throw null;
  }
};

export const verifyIfPlantExists = async (
  plantId: number | string
): Promise<boolean> => {
  console.log("verifyIfPlantExists service");
  try {
    const plant = await Plant.findOne({ id: plantId });
    log("plant id", plantId);
    return !!plant;
  } catch (error) {
    handleError(error, "verify if plant exists");
    return false;
  }
};

export const deletePlant = async (plantId: string): Promise<IPlant | null> => {
  console.log("deletePlant service");

  try {
    // Encontra e deleta a planta pelo seu `id`
    const deletedPlant = await Plant.findOneAndDelete({ id: plantId });

    // Verifica se a planta foi encontrada e deletada
    if (!deletedPlant) {
      throw new Error(`Plant with ID ${plantId} not found`);
    }

    return deletedPlant; // Retorna a planta deletada, caso encontrada
  } catch (error) {
    // Chama o manipulador de erros para logar e lidar com o erro
    handleError(error, "delete plant");

    // Lança o erro original para que possa ser tratado na camada superior
    throw new Error(
      `Failed to delete plant with ID ${plantId}: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

export const updatePlant = async (
  plantId: string,
  updateData: Partial<IPlant> // Aceita um objeto com dados parciais de IPlant
): Promise<IPlant> => {
  console.log("updatePlant service");

  // Validação do plantId
  if (!plantId || typeof plantId !== "string") {
    throw new Error(`Invalid plant ID: ${plantId}`);
  }

  // Certifique-se de que o plantId é uma string
  const stringPlantId = String(plantId);
  console.log(`Attempting to update plant with ID: ${stringPlantId}`);

  try {
    // Encontra a planta e atualiza com os dados fornecidos
    const updatedPlant = await Plant.findOneAndUpdate(
      { id: stringPlantId }, // Aqui você deve ter certeza de que 'id' é o campo correto
      updateData, // Os dados que você quer atualizar
      { new: true } // Retorna o documento atualizado
    );

    if (!updatedPlant) {
      throw new Error(`Plant with ID ${stringPlantId} not found`);
    }
    return updatedPlant;
  } catch (error) {
    handleError(error, "update plant");
    throw null;
  }
};

export const getPlant = async (plantId: string): Promise<IPlant> => {
  console.log("getPlant service");
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
    handleError(error, "get plant");
    throw null;
  }
};