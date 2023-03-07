import { createClient } from "redis";

const redisUrl = `redis://localhost:6379`;

const redisClient = createClient({
  url: redisUrl,
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("'? redis client connected ...");
    redisClient.set(
      "tRPC",
      "Welcome to tRPC with Nextjs, Prisma and Typescript"
    );
  } catch (err: any) {
    console.log("Catching error");
    console.log(err.message);
    process.exit(1);
  }
};

connectRedis();

redisClient.on("error", (err) => console.log(err));

export default redisClient;
