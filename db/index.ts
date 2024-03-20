import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: process.env.POSTGRES_USER || "web-tool",
  password: process.env.POSTGRES_PASSWORD || "webtoolpassword",
  database: process.env.POSTGRES_DB || "web-tool",
});

(async () => {
  client.connect();
})();

export const db = drizzle(client);
