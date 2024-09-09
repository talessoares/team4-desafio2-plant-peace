import { Router } from 'express';
import { getAllPlants, addPlant, deletePlantHandler, updatePlantHandler, getPlantHandler } from '../controllers/plantController';

const router = Router();

router.get('/plants', getAllPlants);
router.post('/plants', addPlant);
router.delete('/plants/:id', deletePlantHandler);
router.put('/plants/:id', updatePlantHandler);
router.get('/plants/:id', getPlantHandler);


export default router;
