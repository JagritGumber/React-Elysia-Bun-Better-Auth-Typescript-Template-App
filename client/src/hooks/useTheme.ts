import { ThemeTypes } from "@/types/essentials";
import { useLocalStorage } from "@uidotdev/usehooks";

const useTheme = (): [
  ThemeTypes,
  React.Dispatch<React.SetStateAction<ThemeTypes>>
] => {
  const defaultTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? ThemeTypes.Dark
      : ThemeTypes.Light;

  const [theme, setTheme] = useLocalStorage<ThemeTypes>(
    "color-theme",
    defaultTheme
  );

  return [theme, setTheme];
};

export default useTheme;
