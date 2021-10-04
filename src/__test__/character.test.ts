import request from "supertest";
import app from "../app";

describe("Character", () => {
  it("should seed database with characters", async () => {
    const res = await request(app).post("/api/v1/character").send({});
    expect(res.status).toEqual(201);
  });

  it("should get all characters", async () => {
    const res = await request(app).get("/api/v1/characters");
    console.log(res.body.results.length)
    expect(res.status).toEqual(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
});
