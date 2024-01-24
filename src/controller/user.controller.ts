import { Request, Response } from "express";
import logger from "../utils/logger";
import { createUser, getAllUsers } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    res.status(409).send(e.message);
  }
}

export async function getAllUsersHandler(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    return res.send(users);
  } catch (e: any) {
    logger.error(e);
    res.status(500).send(e.message);
  }
}
