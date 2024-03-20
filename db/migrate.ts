import { db } from ".";
import { sql } from "drizzle-orm";

const migration = async () => {
  console.log("Running migration...");

  await db.execute(sql`CREATE TABLE IF NOT EXISTS tools (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    link TEXT NOT NULL,
    tags TEXT[] NOT NULL
    );`);

  await db.execute(
    sql`INSERT INTO tools (name, description, link, tags) VALUES ('Drizzle', 'ORM for Node.js', 'text', '{node, typescript, postgres}');`
  );

  console.log("Migration complete.");
};

(async () => {
  await migration();
  process.exit();
})();
