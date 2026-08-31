import { Router } from 'express';
import { listarAnimais, cadastrarAnimal } from '../controllers/animais.controller';

const router = Router();

router.get('/', listarAnimais);
router.post('/', cadastrarAnimal);

export default router;
