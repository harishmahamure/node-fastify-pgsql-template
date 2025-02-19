export class DateUtil {
  static formatDate(date: Date, format = "YYYY-MM-DD HH:mm:ss"): string {
    return date.toISOString().replace("T", " ").substring(0, 19);
  }

  static now(): string {
    return DateUtil.formatDate(new Date());
  }
}
