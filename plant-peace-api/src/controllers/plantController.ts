import { Request, Response } from "express";
import {
  getPlants,
  createPlant,
  deletePlant,
  updatePlant,
  getPlant,
} from "../services/plantService";
import Plant, { IPlant } from "../models/plant";

export const getAllPlants = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("getAllPlants controller");
  try {
    const plants = await getPlants();
    console.log(plants);

    res.json(plants);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const addPlant = async (req: Request, res: Response): Promise<void> => {
  console.log("addPlant controller");
  try {
    let plantData = req.body;

    if (!Array.isArray(plantData)) {
      if (typeof plantData === "object") {
        plantData = [plantData];
      } else {
        res.status(400).json({ message: "No plant data provided" });
        return;
      }
    }

    console.log("req.body", req.body);

    if (req.body.discountPercentage === 0) {
      req.body.isInSale = false;
    }

    const newPlants = await Promise.all(
      plantData.map((plant: IPlant) => createPlant(plant))
    );

    console.log("newPlants", newPlants);

    // Certifica-se de que o campo `id` está sendo enviado de volta ao cliente
    const responsePlants = newPlants.map((plant) => ({
      id: plant.id, // Campo `id` que você criou manualmente
      name: plant.name,
      subtitle: plant.subtitle,
      label: plant.label,
      price: plant.price,
      isInSale: plant.isInSale,
      discountPercentage: plant.discountPercentage,
      features: plant.features,
      description: plant.description,
      imgUrl: plant.imgUrl,
    }));

    res.status(201).json(responsePlants);
  } catch (error) {
    console.error("Error in addPlant:", error);
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "An unknown error occurred" });
    }
  }
};

const isValidPlant = (plant: any): plant is IPlant => {
  console.log("isValidPlant");

  return (
    plant &&
    typeof plant === "object" &&
    "plantName" in plant &&
    "plantSubtitle" in plant &&
    "plantType" in plant &&
    "price" in plant &&
    "discountPrice" in plant &&
    "label" in plant &&
    "features" in plant &&
    "description" in plant &&
    "imgUrl" in plant
  );
};

export const deletePlantHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("deletePlant controller");
  try {
    const plantId = req.params.id;

    // Verifica se o ID foi fornecido
    if (!plantId) {
      res.status(400).json({ message: "Plant ID is required" });
      return;
    }

    console.log("plantId", plantId);

    // Deleta a planta pelo ID
    const deletedPlant = await deletePlant(plantId);

    // Verifica se a planta foi encontrada e deletada
    if (!deletedPlant) {
      res.status(404).json({ message: `Plant with ID ${plantId} not found` });
      return;
    }

    res.status(200).json({ message: "Planta deletada com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const updatePlantHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("updatePlant controller");

  try {
    const plantId = req.params.id; // Obtendo o ID da URL

    // Verifica se o ID é fornecido
    if (!plantId || typeof plantId !== "string") {
      res.status(400).json({ message: "Invalid plant ID" });
      return;
    }

    // Chama a função de atualização
    const updatedPlant = await updatePlant(plantId, req.body);

    // Retorna o resultado da atualização
    res.status(200).json(updatedPlant);
  } catch (error) {
    // Tratamento de erro
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "An unknown error occurred" });
    }
  }
};

export const getPlantHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("getPlant controller");
  try {
    const plantId = req.params.id;
    if (!plantId) {
      res.status(400).json({ message: "Invalid plant ID" });
      return;
    }

    const plant = await getPlant(plantId);
    res.json(plant);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "An unknown error occurred" });
    }
  }
};
