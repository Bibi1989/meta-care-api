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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = exports.getAllComments = void 0;
const parseToUtc_1 = require("../helpers/parseToUtc");
const models = require("../../database/models/");
const { Movie, Comment } = models;
exports.getAllComments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield Comment.findAll({
            include: [{ model: Movie, as: "movie" }],
        });
        const sanitizeData = parseToUtc_1.sanitizeDateToUTC(response);
        res.json(sanitizeData);
    }
    catch (error) {
        next(error);
    }
});
exports.createComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
        const body = req.body;
        const comment = yield Comment.create(Object.assign(Object.assign({}, body), { ip, createdAt: new Date(), updatedAt: new Date() }));
        res.status(201).json(comment);
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=comment.controller.js.map