import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import User from "./user";

const Session = sqliteTable("session", {
  id: text("id")
    .primaryKey()
    .$default(() => Bun.randomUUIDv7()),
  userId: text("user_id")
    .notNull()
    .references(() => User.id),
  token: text("token").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
  ipAddress: text("", { mode: "text", length: 40 }),
  userAgent: text("userAgent"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).$default(
    () => new Date()
  ),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .$default(() => new Date())
    .$onUpdate(() => new Date()),
});

export default Session;

export type InsertSession = typeof Session.$inferInsert;
export type SelectSession = typeof Session.$inferSelect;
