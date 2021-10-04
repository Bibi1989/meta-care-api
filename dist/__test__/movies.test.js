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
const request = require("supertest");
const app = require("../app");
const body = {
    title: "Tiger Fist",
    director: "John You",
    producer: "Yul Ti",
    opening_crawl: "some crawling",
    release_date: "12-05-2018",
    url: "http://topnow.se",
};
describe("Post Endpoints", () => {
    it("should create a new post", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app).get("/api/v1/movies");
        expect(res.statusCode).toEqual(200);
        // expect(res.body).toHaveProperty(body);
    }));
});
//# sourceMappingURL=movies.test.js.map