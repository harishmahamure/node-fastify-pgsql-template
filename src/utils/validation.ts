export class ValidationUtil {
  static isValidEmail(email: string): boolean {
    return /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  }

  static isValidPassword(password: string): boolean {
    return (
      password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password)
    );
  }
}
