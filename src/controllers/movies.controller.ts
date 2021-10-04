import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";

import { sanitizeMovie } from "../helpers/sanitize";
import Sequelize from "sequelize";

const models = require("../../database/models/");

const { Movie, Comment } = models;

export const getAllMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await Movie.findAll({
      order: [["release_date", "ASC"]],
      attributes: {
        include: [
          [Sequelize.fn("COUNT", Sequelize.col("comments.id")), "commentCount"],
        ],
      },
      group: ["Movie.id"],
      include: [
        {
          model: Comment,
          as: "comments",
          attributes: [],
        },
      ],
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const createMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await fetch("https://swapi.dev/api/films/");
    const { results } = await response.json();
    const sanitizeMovies = sanitizeMovie(results);
    for (let result of sanitizeMovies) {
      await Movie.create({
        ...result,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    res.status(201).json(sanitizeMovies);
  } catch (error) {
    next(error);
  }
};
