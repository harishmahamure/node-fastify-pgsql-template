import jwt from "jsonwebtoken";

export class JwtUtil {
  private secretKey: jwt.Secret;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  sign(payload: object, expiresIn = "3600"): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: expiresIn as any });
  }

  verify<T>(token: string): T | null {
    try {
      return jwt.verify(token, this.secretKey) as T;
    } catch (error) {
      return null;
    }
  }
}

jwt.sign({ har: "1" }, "");
