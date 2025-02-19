import { FastifyReply } from "fastify";

export class ResponseUtil {
  static success<T>(res: FastifyReply, message: string, data: T = {} as T) {
    return res.status(200).send({ success: true, message, data });
  }

  static error(res: FastifyReply, message: string, status = 400) {
    return res.status(status).send({ success: false, message });
  }
}
