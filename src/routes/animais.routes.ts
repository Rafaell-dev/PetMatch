import { Router } from 'express';
import { listarAnimais } from '../controllers/animais.controller';

const router = Router();

router.get('/', listarAnimais);

export default router;
