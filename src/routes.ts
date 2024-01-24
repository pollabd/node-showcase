import { Express, Request, Response } from "express";

import {
  createUserHandler,
  getAllUsersHandler,
} from "./controller/user.controller";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";

function routes(app: Express) {
  app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  /**
   * User Routes
   */
  app
    .post("/api/users", validateResource(createUserSchema), createUserHandler)
    .get("/api/users", getAllUsersHandler);
}

export default routes;
