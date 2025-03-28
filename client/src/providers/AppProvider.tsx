import { StrictMode } from "react";
import ThemeProvider from "./ThemeProvider";

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <StrictMode>
      <ThemeProvider>{children}</ThemeProvider>
    </StrictMode>
  );
};

export default AppProvider;
