import { AuthService } from "@/services/auth-service";
import { betterAuthView } from "@/views/auth-view";
import Elysia from "elysia";

const v1Router = new Elysia({ name: "v1-router", prefix: "/v1" })
  .get("/hi", () => {
    return {
      msg: "Hello!, World!",
    };
  })
  .all("/auth/*", betterAuthView);

export default v1Router;
