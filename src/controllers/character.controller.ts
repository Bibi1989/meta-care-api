import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";

import { totalHeight } from "../helpers/get-total-height";
import { sanitizeCharacter } from "../helpers/sanitize";

const models = require("../../database/models/");

const { Character } = models;

export const getAllCharacters = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const gender = req.query ? req.query.gender : "";

    const where = gender
      ? {
          gender,
        }
      : {};

    const { rows, count } = await Character.findAndCountAll({
      where,
      order: [
        ["name", "ASC"],
        ["gender", "ASC"],
        ["height", "ASC"],
      ],
    });

    const height = totalHeight(rows);

    res.json({ results: rows, count, height });
  } catch (error) {
    next(error);
  }
};

export const createCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await fetch("https://swapi.dev/api/people/?page=2");
    const { results } = await response.json();
    const sanitizeCharacters = sanitizeCharacter(results);
    for (let result of sanitizeCharacters) {
      await Character.create({
        ...result,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    res.status(201).json(sanitizeCharacters);
  } catch (error) {
    next(error);
  }
};
