import express from "express";
import plantRoutes from "./routes/plantRoutes";
import connectDB from "./config/db";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://3.144.159.94:5000/api/plants",
  "http://plant-peace-app.s3-website.us-east-2.amazonaws.com/*",
];

const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else [callback(new Error("Not allowed by CORS"))];
  },
  methods: ["GET", "POST", "PUT"],
  alloweHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api", plantRoutes);

export default app;
