import useTheme from "@/hooks/useTheme";
import { Theme } from "@radix-ui/themes";
import React from "react";

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme] = useTheme();

  return <Theme appearance={theme}>{children}</Theme>;
};

export default ThemeProvider;
