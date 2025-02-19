import db from "../config/db";
import { UserType } from "../constants/user-types";
import { UserRegisterDTO } from "../dto/user";
import { UserModel } from "../models/user";

export class UserRepository {
  static async findUserByEmail(email: string) {
    return db.oneOrNone<UserModel>("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
  }

  static async createUser(user: UserRegisterDTO) {
    return db.one(
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
