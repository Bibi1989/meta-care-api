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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe("Movies", () => {
    it("should seed database with movies", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield supertest_1.default(app_1.default).post("/api/v1/movie").send({});
        expect(res.status).toEqual(201);
        expect(res.body.length).toBeGreaterThan(1);
    }));
    it("should get all movies", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield supertest_1.default(app_1.default).get("/api/v1/movies");
        expect(res.status).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    }));
});
//# sourceMappingURL=movie.test.js.map