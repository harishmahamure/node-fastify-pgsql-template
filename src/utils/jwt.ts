import jwt from 'jsonwebtoken';

export class AuthUtil {
  static signAccessToken(payload: object): string {
    return jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRY! as unknown as number,
    });
  }

  static signRefreshToken(payload: object): string {
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
      expiresIn: process.env.JWT_REFRESH_EXPIRY! as unknown as number,
    });
  }

  static verifyAccessToken<T>(token: string): T | null {
    try {
      return jwt.verify(token, process.env.JWT_SECRET! as unknown as string) as T;
    } catch {
      return null;
    }
  }

  static verifyRefreshToken<T>(token: string): T | null {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH_SECRET! as unknown as string) as T;
    } catch {
      return null;
    }
  }
}
