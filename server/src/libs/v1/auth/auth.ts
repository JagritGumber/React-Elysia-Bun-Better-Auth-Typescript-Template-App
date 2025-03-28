import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/database";
import { Account, Session, User, Verification } from "@/schema";

export const auth = betterAuth({
  basePath: "/api/v1/auth",
  trustedOrigins: ["http://localhost:5173"],
  baseURL: "http://localhost:5173",
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: {
      user: User,
      session: Session,
      verification: Verification,
      account: Account,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: Bun.env.GITHUB_CLIENT_ID!,
      clientSecret: Bun.env.GITHUB_CLIENT_SECRET!,
    },
    google: {
      clientId: Bun.env.GOOGLE_CLIENT_ID!,
      clientSecret: Bun.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});
