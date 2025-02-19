import jwt from "jsonwebtoken";

export class AuthUtil {
  static signToken(
    payload: object,
    secret: string,
    expiresIn = "3600"
  ): string {
    return jwt.sign(payload, secret, { expiresIn: expiresIn as any });
  }

  static verifyToken<T>(token: string, secret: string): T | null {
    try {
      return jwt.verify(token, secret) as T;
    } catch (error) {
      throw new Error("Invalid token");
    }
  }
}
