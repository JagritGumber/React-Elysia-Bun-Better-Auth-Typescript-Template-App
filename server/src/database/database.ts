import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

const sqlite = new Database(".data/main.db");
export const db = drizzle(sqlite);
