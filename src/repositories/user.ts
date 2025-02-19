import db from "../config/db";
import { UserType } from "../constants/user-types";
import { RegisterRequest } from "../dto/user";
import { UserModel } from "../models/user";

interface UserRegisterData extends RegisterRequest {
  role: UserType;
}
export class UserRepository {
  static async findUserByEmail(email: string) {
    try {
      return db.oneOrNone<UserModel>("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
    } catch (error) {
      throw new Error("Internal Server Error");
    }
  }

  static async createUser(user: UserRegisterData) {
    return db.one<UserModel>(
      "INSERT INTO users (firstName, lastName, email, username, password, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        user.firstName,
        user.lastName,
        user.email,
        user.username,
        user.password,
        user.role,
      ]
    );
  }
}
