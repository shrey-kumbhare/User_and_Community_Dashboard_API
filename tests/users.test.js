const request = require("supertest");
const app = require("../index");

describe("GET /users", () => {
  it("should return all users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("POST /users", () => {
  it("should create a new user when valid data is provided", async () => {
    const res = await request(app).post("/users").send({
      name: "Charlie",
      role: "Member",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe("Charlie");
    expect(res.body.role).toBe("Member");
  });

  it("should return 400 when name or role is missing", async () => {
    const res = await request(app).post("/users").send({
      name: "InvalidUser",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
