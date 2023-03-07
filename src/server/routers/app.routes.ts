import { t } from "../createRouter";
import redisClient from "../utils/connectRedis";
import connectDB from "../utils/prisma";

connectDB();

export const appRouter = t.router({
  getHello: t.procedure.query(async ({ ctx }) => {
    console.log("calling query");
    const message = await redisClient.get("tRPC");
    return { message };
  }),
});

export type AppRouter = typeof appRouter;
