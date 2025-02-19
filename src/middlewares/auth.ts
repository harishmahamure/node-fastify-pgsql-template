import { FastifyReply, FastifyRequest } from "fastify";
import { AuthUtil } from "../utils/jwt";

declare module "fastify" {
  interface FastifyRequest {
    user: any;
  }
}

export function authenticateJWT(
  req: FastifyRequest,
  res: FastifyReply,
  next: any
) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).send({ success: false, message: "Unauthorized" });

  const decoded = AuthUtil.verifyToken(token, process.env.JWT_SECRET!) as any;
  if (!decoded)
    return res.status(401).send({ success: false, message: "Invalid Token" });

  req.user = decoded;
  next();
}

export function authorizeRoles(...roles: string[]) {
  return (req: FastifyRequest, res: FastifyReply, next: any) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send({ success: false, message: "Forbidden" });
    }
    next();
  };
}
