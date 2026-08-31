import { Request, Response } from 'express';
import { animais } from '../data/animais';

export const listarAnimais = (req: Request, res: Response) => {
  return res.status(200).json(animais);
};

export const cadastrarAnimal = (req: Request, res: Response) => {
  const { nome, especie, idade } = req.body;

  // Validação de campos obrigatórios
  if (
    nome === undefined ||
    especie === undefined ||
    idade === undefined
  ) {
    return res.status(400).json({
      message: 'Nome, espécie e idade são obrigatórios',
    });
  }

  // Validação de nome vazio
  if (typeof nome !== 'string' || nome.trim() === '') {
    return res.status(400).json({
      message: 'Nome não pode ser vazio',
    });
  }

  // Validação de espécie vazia
  if (typeof especie !== 'string' || especie.trim() === '') {
    return res.status(400).json({
      message: 'Espécie não pode ser vazia',
    });
  }

  // Validação de idade
  if (typeof idade !== 'number' || idade < 0) {
    return res.status(400).json({
      message: 'Idade deve ser um número maior ou igual a zero',
    });
  }

  // Geração automática do ID
  const novoId =
    animais.length > 0 ? Math.max(...animais.map((a) => a.id)) + 1 : 1;

  const novoAnimal = {
    id: novoId,
    nome,
    especie,
    idade,
    disponivel: true,
  };

  animais.push(novoAnimal);

  return res.status(201).json(novoAnimal);
};
