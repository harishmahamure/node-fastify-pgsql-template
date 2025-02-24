export class DateUtil {
  static formatDate(date: Date): string {
    return date.toISOString().replace('T', ' ').substring(0, 19);
  }

  static now(): string {
    return DateUtil.formatDate(new Date());
  }
}
