"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacter = exports.getAllCharacters = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const get_total_height_1 = require("../helpers/get-total-height");
const sanitize_1 = require("../helpers/sanitize");
const models = require("../../database/models/");
const { Character } = models;
exports.getAllCharacters = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gender = req.query ? req.query.gender : "";
        const where = gender
            ? {
                gender,
            }
            : {};
        const { rows, count } = yield Character.findAndCountAll({
            where,
            order: [
                ["name", "ASC"],
                ["gender", "ASC"],
                ["height", "ASC"],
            ],
        });
        const height = get_total_height_1.totalHeight(rows);
        res.json({ results: rows, count, height });
    }
    catch (error) {
        next(error);
    }
});
exports.createCharacter = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield node_fetch_1.default("https://swapi.dev/api/people/?page=2");
        const { results } = yield response.json();
        const sanitizeCharacters = sanitize_1.sanitizeCharacter(results);
        for (let result of sanitizeCharacters) {
            yield Character.create(Object.assign(Object.assign({}, result), { createdAt: new Date(), updatedAt: new Date() }));
        }
        res.status(201).json(sanitizeCharacters);
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=character.controller.js.map