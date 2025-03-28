import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import AppProvider from "./providers/AppProvider";
import RouterProvider from "./providers/RouterProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <RouterProvider />
  </AppProvider>
);
