import { Request, Response } from 'express';
import { animais } from '../data/animais';

export const listarAnimais = (req: Request, res: Response) => {
  return res.status(200).json(animais);
};
