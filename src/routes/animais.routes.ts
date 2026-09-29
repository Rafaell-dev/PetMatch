import { Router } from 'express';
import { listarAnimais, cadastrarAnimal, removerAnimal } from '../controllers/animais.controller';

const router = Router();

router.get('/', listarAnimais);
router.post('/', cadastrarAnimal);
router.delete('/:id', removerAnimal);

export default router;
