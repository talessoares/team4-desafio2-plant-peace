import request from "supertest";
import app from "../app";
import { IPlant } from "../models/plant";
import connectDB from "../config/db";
import mongoose from "mongoose";

type PlantInput = {
  name: string;
  subtitle: string;
  label: string;
  price: string;
  discountPercentage: number;
  features: string;
  description: string;
  imgUrl: string;
};

const requiredAttributes: Array<keyof PlantInput> = [
  "name",
  "subtitle",
  "label",
  "price",
  "discountPercentage",
  "features",
  "description",
  "imgUrl",
];

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Testando endpoints da API de plantas", () => {
  it("Deve retornar todas as plantas - GET /api/plants", async () => {
    const response = await request(app).get("/api/plants");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it("Deve adicionar uma nova planta - POST /api/plants", async () => {
    const newPlant = {
      name: "Agora Vai",
      subtitle: "Agora Vai",
      label: "Outdoor",
      price: "100",
      isInSale: true,
      discountPercentage: 0,
      features: "Agora Vai Agora Vai",
      description: "Agora Vai Agora Vai Agora Vai",
      imgUrl: "agora_vai.png",
    };

    const response = await request(app)
      .post("/api/plants")
      .send(newPlant)
      .set("Content-Type", "application/json");

    expect(response.status).toBe(201);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0].name).toBe(newPlant.name);
    expect(response.body[0].imgUrl).toBe(newPlant.imgUrl);
  });

  it("Deve retornar erro ao tentar adicionar uma planta sem nome - POST /api/plants", async () => {
    const newPlantWithoutName = {
      subtitle: "Agora Vai",
      label: "Outdoor",
      price: "100",
      isInSale: true,
      discountPercentage: 0,
      features: "Agora Vai Agora Vai",
      description: "Agora Vai Agora Vai Agora Vai",
      imgUrl: "agora_vai.png",
    };

    const response = await request(app)
      .post("/api/plants")
      .send(newPlantWithoutName)
      .set("Content-Type", "application/json");

    expect(response.status).toBe(400);
  });

  requiredAttributes.forEach((attribute) => {
    it(`Deve retornar erro ao tentar adicionar uma planta sem o atributo ${attribute} - POST /api/plants`, async () => {
      const newPlant: PlantInput = {
        name: "Agora Vai",
        subtitle: "Agora Vai",
        label: "Outdoor",
        price: "100",
        discountPercentage: 0,
        features: "Agora Vai Agora Vai",
        description: "Agora Vai Agora Vai Agora Vai",
        imgUrl: "agora_vai.png",
      };

      delete newPlant[attribute];

      const response = await request(app)
        .post("/api/plants")
        .send(newPlant)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toMatch(new RegExp(attribute, "i"));
    });
  });

  it("Deve atualizar uma planta existente - PUT /api/plants/:id", async () => {
    const newPlant = {
      name: "Cacto Inicial",
      subtitle: "Cacto",
      label: "Indoor",
      price: "50.00",
      isInSale: true,
      discountPercentage: 0,
      features: "Resistente",
      description: "Um cacto muito resistente.",
      imgUrl: "cacto_inicial.png",
    };

    const addResponse = await request(app)
      .post("/api/plants")
      .send(newPlant)
      .set("Content-Type", "application/json");

    const plantId = addResponse.body[0].id;

    const updatedPlantData = {
      name: "Cacto Atualizado",
      price: "40.00",
    };

    const response = await request(app)
      .put(`/api/plants/${plantId}`)
      .send(updatedPlantData)
      .set("Content-Type", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.price).toBe("40.00");
  });

  it("Deve criar e deletar uma planta - DELETE /api/plants/:id", async () => {
    const newPlant = {
      name: "Agora Vai",
      subtitle: "Agora Vai",
      label: "Outdoor",
      price: "100",
      isInSale: false,
      discountPercentage: 0,
      features: "Agora Vai Agora Vai",
      description: "Agora Vai Agora Vai Agora Vai",
      imgUrl: "agora_vai.png",
    };

    const createResponse = await request(app)
      .post("/api/plants")
      .send(newPlant);

    expect(createResponse.status).toBe(201);
    expect(Array.isArray(createResponse.body)).toBe(true);
    expect(createResponse.body.length).toBeGreaterThan(0);

    const createdPlantId = createResponse.body[0].id;

    console.log("Plant ID no teste:", createdPlantId);

    expect(createdPlantId).toBeDefined();

    const deleteResponse = await request(app).delete(
      `/api/plants/${createdPlantId}`
    );

    expect(deleteResponse.status).toBe(200);
  });

  it("Deve retornar uma planta específica - GET /api/plants/:id", async () => {
    const plantId = "dd92ff29-346b-4c43-bad8-eed7e5869003";
    const response = await request(app).get(`/api/plants/${plantId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("price");
  });
});
