import Fastify from "fastify";
import securityConfig from "./config/security";

const app = Fastify({ logger: true });

securityConfig(app);

export default app;
