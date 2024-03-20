import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "web-tool",
  password: "webtoolpassword",
  database: "web-tool",
});

(async () => {
  client.connect();
})();

export const db = drizzle(client);
