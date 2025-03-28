import { auth } from "@/libs/v1/auth";
import { Context } from "elysia";

const handle = (context: Context) => {
  const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"];
  if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
    console.log(context.request);
    return auth.handler(context.request);
  } else {
    context.error(405);
  }
};

export default handle;
