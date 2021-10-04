import { Router } from "express";
import {
  createCharacter,
  getAllCharacters,
} from "../controllers/character.controller";

const router = Router();

router.post("/character", createCharacter);

router.get("/characters", getAllCharacters);

export default router;
