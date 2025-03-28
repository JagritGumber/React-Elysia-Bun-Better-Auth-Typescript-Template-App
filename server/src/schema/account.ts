import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import User from "./user";

const Account = sqliteTable("account", {
  id: text("id")
    .primaryKey()
    .$default(() => Bun.randomUUIDv7()),
  userId: text("user_id")
    .notNull()
    .references(() => User.id),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", {
    mode: "timestamp_ms",
  }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", {
    mode: "timestamp_ms",
  }),
  scope: text("scope"),
  idToken: text("id_token"),
  password: text("password"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).$default(
    () => new Date()
  ),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .$default(() => new Date())
    .$onUpdate(() => new Date()),
});

export default Account;

export type InsertAccount = typeof Account.$inferInsert;
export type SelectAccount = typeof Account.$inferSelect;
