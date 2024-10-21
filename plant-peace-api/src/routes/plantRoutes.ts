import { Router } from "express";
import upload from "../config/multerConfig";
import {
  getAllPlants,
  addPlant,
  deletePlantHandler,
  updatePlantHandler,
  getPlantHandler,
} from "../controllers/plantController";
import path from "path";
import fs from "fs";
const router = Router();

router.get("/plants", getAllPlants);
router.post("/plants", addPlant);
router.delete("/plants/:id", deletePlantHandler);
router.put("/plants/:id", updatePlantHandler);
router.get("/plants/:id", getPlantHandler);

router.post("/plants/img", upload.single("image"), (req, res) => {
  console.log(req.body);
  renameFile(
    "../images/" + "default-name.png",
    "../images/" + req.body.filename + ".png",
    (err) => {
      console.log(req.body.name);
    }
  );
  res.status(200);
});

function renameFile(
  oldPath: string,
  newPath: string,
  callback: (err: NodeJS.ErrnoException | null) => void
) {
  fs.rename(oldPath, newPath, callback);
}
export default router;