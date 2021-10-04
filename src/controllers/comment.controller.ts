import { NextFunction, Request, Response } from "express";

import { sanitizeDateToUTC } from "../helpers/parseToUtc";

const models = require("../../database/models/");

const { Movie, Comment } = models;

export const getAllComments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await Comment.findAll({
      include: [{ model: Movie, as: "movie" }],
    });
    const sanitizeData = sanitizeDateToUTC(response);

    res.json(sanitizeData);
  } catch (error) {
    next(error);
  }
};

export const createComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const body = req.body;
    const comment = await Comment.create({
      ...body,
      ip,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
};
