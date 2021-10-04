import request from "supertest";
import app from "../app";

describe("Movies", () => {
  it("should seed database with movies", async () => {
    const res = await request(app).post("/api/v1/movie").send({});
    expect(res.status).toEqual(201);
    expect(res.body.length).toBeGreaterThan(1);
  });

  it("should get all movies", async () => {
    const res = await request(app).get("/api/v1/movies");
    expect(res.status).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
