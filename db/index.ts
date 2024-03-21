import { neon } from "@neondatabase/serverless";
import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import {
  NeonHttpDatabase,
  drizzle as neonDrizzle,
} from "drizzle-orm/neon-http";
import { Client } from "pg";

let db:
  | NodePgDatabase<Record<string, never>>
  | NeonHttpDatabase<Record<string, never>>;

if (process.env.IS_OFFLINE) {
  const client = new Client({
    host: "127.0.0.1",
    port: 5432,
    user: process.env.POSTGRES_USER || "web-tool",
    password: process.env.POSTGRES_PASSWORD || "webtoolpassword",
    database: process.env.POSTGRES_DB || "web-tool",
  });

  (async () => {
    await client.connect();
  })();
  db = drizzle(client);
} else {
  db = neonDrizzle(neon(process.env.DRIZZLE_DATABASE_URL!));
}

export { db };
