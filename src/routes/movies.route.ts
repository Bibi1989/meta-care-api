import { Router } from "express";
import { createMovie, getAllMovies } from "../controllers/movies.controller";

const router = Router();

router.get("/movies", getAllMovies);

router.post("/movie", createMovie);

export default router;
