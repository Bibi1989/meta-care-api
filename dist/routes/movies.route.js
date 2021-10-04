"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movies_controller_1 = require("../controllers/movies.controller");
const router = express_1.Router();
router.get("/movies", movies_controller_1.getAllMovies);
router.post("/movie", movies_controller_1.createMovie);
exports.default = router;
//# sourceMappingURL=movies.route.js.map