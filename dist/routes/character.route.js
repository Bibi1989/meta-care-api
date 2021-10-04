"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const character_controller_1 = require("../controllers/character.controller");
const router = express_1.Router();
router.post("/character", character_controller_1.createCharacter);
router.get("/characters", character_controller_1.getAllCharacters);
exports.default = router;
//# sourceMappingURL=character.route.js.map