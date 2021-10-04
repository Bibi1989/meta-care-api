import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import moviesRoute from "./routes/movies.route";
import commentRoute from "./routes/comment.route";
import characterRoute from "./routes/character.route";
import handleErrors from "./helpers/handle-errors";

const swaggerDoc = require("../swagger.json");

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/api/v1/", moviesRoute);
app.use("/api/v1/", commentRoute);
app.use("/api/v1/", characterRoute);

app.use("*", (req: Request, res: Response) => {
  res.redirect("/api/docs");
});

process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error", err);
  process.exit(1); //mandatory (as per the Node.js docs)
});

app.use(handleErrors);

export default app;
