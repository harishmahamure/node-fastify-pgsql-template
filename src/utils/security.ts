export class SecurityUtil {
  static sanitizeInput(input: string): string {
    return input.replace(/<script.*?>.*?<\/script>/gi, "").trim(); // Prevent XSS
  }

  static generateUUID(): string {
    return crypto.randomUUID();
  }
}
