import { omit } from "lodash";
import UserModel, { UserInput } from "../models/user.model";

export async function createUser(input: UserInput) {
  try {
    const user = await UserModel.create(input);

    return omit(user.toJSON(), "password");
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getAllUsers() {
  try {
    const users = await UserModel.find();

    const sanitizedUsers = users.map((user) => {
      const { password, ...sanitizedUser } = user.toJSON();
      return sanitizedUser;
    });

    return sanitizedUsers;
  } catch (e: any) {
    throw new Error(e);
  }
}
