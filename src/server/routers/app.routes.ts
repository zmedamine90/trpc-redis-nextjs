import { t } from "../createRouter";
import redisClient from "../utils/connectRedis";
import connectDB from "../utils/prisma";

connectDB();

export const appRouter = t.router({
  getHello: t.procedure.query(async ({ ctx }) => {
    const message = await redisClient.get("trpc");
    return message;
  }),
});
