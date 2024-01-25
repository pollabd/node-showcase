import supertest from "supertest";
import app from "../app";
import { createUser } from "../service/user.service";

require("dotenv").config();

describe("users", () => {
  describe("get all users route", () => {
    describe("given the users does not exist", () => {
      it("should return a 404", async () => {
        await supertest(app).get("/api/users").expect(404);
      });
    });

    describe("given the users does exist", () => {
      it("should return a 200 and the users", async () => {
        // NOTE : Change email everytime.

        const userPayload = {
          email: Math.random().toString(),
          password: "12345678",
          passwordConfirmation: "12345678",
          name: "jr",
        };

        const user = await createUser(userPayload);

        const { body, statusCode } = await supertest(app).get("/api/users");

        expect(statusCode).toBe(200);
      });
    });
  });
});
