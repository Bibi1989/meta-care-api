import { Router } from "express";
import {
  createComment,
  getAllComments,
} from "../controllers/comment.controller";

const router = Router();

router.post("/comment", createComment);

router.get("/comments", getAllComments);

export default router;
