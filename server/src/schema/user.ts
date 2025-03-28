import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

const User = sqliteTable("user", {
  id: text("id")
    .primaryKey()
    .$default(() => Bun.randomUUIDv7()),
  name: text("name").notNull(),
  email: text("email").notNull(),
  emailVerified: integer("email_verified", { mode: "boolean" }).notNull(),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).$default(
    () => new Date()
  ),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .$default(() => new Date())
    .$onUpdate(() => new Date()),
});

export default User;

export type InsertUser = typeof User.$inferInsert;
export type SelectUser = typeof User.$inferSelect;
