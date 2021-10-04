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
exports.createMovie = exports.getAllMovies = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const sanitize_1 = require("../helpers/sanitize");
const sequelize_1 = __importDefault(require("sequelize"));
const models = require("../../database/models/");
const { Movie, Comment } = models;
exports.getAllMovies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield Movie.findAll({
            order: [["release_date", "ASC"]],
            attributes: {
                include: [
                    [sequelize_1.default.fn("COUNT", sequelize_1.default.col("comments.id")), "commentCount"],
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
    }
    catch (error) {
        next(error);
    }
});
exports.createMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield node_fetch_1.default("https://swapi.dev/api/films/");
        const { results } = yield response.json();
        const sanitizeMovies = sanitize_1.sanitizeMovie(results);
        for (let result of sanitizeMovies) {
            yield Movie.create(Object.assign(Object.assign({}, result), { createdAt: new Date(), updatedAt: new Date() }));
        }
        res.status(201).json(sanitizeMovies);
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=movies.controller.js.map