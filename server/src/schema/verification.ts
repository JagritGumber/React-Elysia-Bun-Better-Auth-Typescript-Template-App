import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

const Verification = sqliteTable("verification", {
  id: text("id")
    .primaryKey()
    .$default(() => Bun.randomUUIDv7()),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$default(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$default(() => new Date())
    .$onUpdate(() => new Date()),
});

export default Verification;

export type InsertVerification = typeof Verification.$inferInsert;
export type SelectVerification = typeof Verification.$inferSelect;
