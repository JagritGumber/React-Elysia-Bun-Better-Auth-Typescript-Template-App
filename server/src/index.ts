import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { v1Router } from "./routers/v1-router";

const app = new Elysia({ name: "app", prefix: "/api" })
  .use(cors())
  .use(swagger())
  .use(v1Router)
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
