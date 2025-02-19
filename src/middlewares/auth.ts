import { FastifyReply, FastifyRequest } from "fastify";
import { AuthUtil } from "../utils/jwt";

declare module "fastify" {
  interface FastifyRequest {
    user?: { id: number; role: string }; // Ensure user has proper type
  }
}

export async function authenticateJWT(req: FastifyRequest, res: FastifyReply) {
  try {
    const token =
      req.headers["x-authorization"] ||
      req.headers["authorization"]?.split(" ")[1]; // Support Bearer Token

    if (!token) {
      return res.code(401).send({ success: false, message: "Unauthorized" });
    }

    const decoded = AuthUtil.verifyAccessToken(token as string);

    if (!decoded) {
      return res.code(401).send({ success: false, message: "Invalid Token" });
    }

    req.user = decoded as { id: number; role: string };
  } catch (error) {
    return res
      .code(401)
      .send({ success: false, message: "Authentication failed" });
  }
}

export function authorizeRoles(...roles: string[]) {
  return async (req: FastifyRequest, res: FastifyReply) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.code(403).send({ success: false, message: "Forbidden" });
    }
  };
}
