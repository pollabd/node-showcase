import request from "supertest";
import app from "../app";

require("dotenv").config();

describe("GET /api/users", () => {
  it("should return all users", async () => {
    return request(app)
      .get("/api/users")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200)
      .then((res) => {
        expect(res).toBe(Array);
      });
  });
});

// test("POST /api/users creates a new user", async () => {
//   const newUser = {
//     email: "hfghgf@j.com",
//     password: "12345678",
//     passwordConfirmation: "12345678",
//     name: "jj",
//   };

//   const response = await request(app).post("/api/users").send(newUser);

//   expect(response.status).toBe(201);
//   expect(response.body).toEqual(newUser);
// });
