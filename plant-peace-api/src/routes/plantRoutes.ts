import { Router } from 'express';
import { getAllPlants, addPlant } from '../controllers/plantController';

const router = Router();

router.get('/plants', getAllPlants);
router.post('/plants', addPlant);

export default router;
