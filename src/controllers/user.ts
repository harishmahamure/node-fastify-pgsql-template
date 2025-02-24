import { FastifyReply, FastifyRequest } from "fastify";
import { UserType } from "../constants/user-types";
import { LoginRequest, RegisterRequest } from "../dto/user";
import { UserService } from "../services/users";
import { ResponseUtil } from "../utils/response";

export default class UserController {
  static async login(
    req: FastifyRequest<{ Body: LoginRequest }>,
    res: FastifyReply,
  ) {
    try {
      const { email, password } = req.body;
      const tokens = await UserService.login(email, password);

      return ResponseUtil.success(res, "Login successful", {
        ...tokens,
      });
    } catch (error) {
      return ResponseUtil.error(res, "Login failed");
    }
  }

  static async register(
    req: FastifyRequest<{ Body: RegisterRequest }>,
    res: FastifyReply,
  ) {
    try {
      const { email, firstName, lastName, password, username } = req.body;
      const user = await UserService.register({
        email,
        firstName,
        lastName,
        password,
        username,
        role: UserType.USER,
      });

      return ResponseUtil.success(res, "Register successful", {
        user,
      });
    } catch (error) {
      return ResponseUtil.error(res, "Register failed");
    }
  }
}
