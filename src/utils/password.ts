import crypto from "crypto";

export class SecurityUtil {
  static generateSalt(length = 16): string {
    return crypto.randomBytes(length).toString("hex");
  }

  static hashPassword(password: string, salt: string): string {
    return crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");
  }

  static comparePassword(
    inputPassword: string,
    salt: string,
    hash: string
  ): boolean {
    return SecurityUtil.hashPassword(inputPassword, salt) === hash;
  }
}
