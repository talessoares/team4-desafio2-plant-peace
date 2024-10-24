import express from "express";
import plantRoutes from "./routes/plantRoutes";
import connectDB from "./config/db";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api", plantRoutes);

export default app;
