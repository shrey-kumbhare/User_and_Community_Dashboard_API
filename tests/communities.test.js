const request = require("supertest");
const app = require("../index");

describe("GET /communities/:id", () => {
  it("should return community details with member info", async () => {
    const res = await request(app).get("/communities/1");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
    expect(res.body).toHaveProperty("name");
    expect(Array.isArray(res.body.members)).toBe(true);
    expect(res.body.members.length).toBeGreaterThan(0);

    // validate member structure
    expect(res.body.members[0]).toHaveProperty("id");
    expect(res.body.members[0]).toHaveProperty("name");
    expect(res.body.members[0]).toHaveProperty("role");
  });

  it("should return 404 if community does not exist", async () => {
    const res = await request(app).get("/communities/0");

    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("error");
  });
});
