import { createAuthClient } from "better-auth/client";
const authClient = createAuthClient({
  basePath: "/api/v1/auth",
});

export default authClient;
