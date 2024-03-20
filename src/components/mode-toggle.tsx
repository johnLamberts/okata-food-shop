import { useEffect } from "react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const themeColor = theme === "dark" ? "#020817" : "#fff";

    const metaThemeColor = document.querySelector("meta[name='theme-color']");

    metaThemeColor && metaThemeColor.setAttribute("content", themeColor);
  }, [theme]);
  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className="rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <MoonIcon height={20} /> : <SunIcon height={20} />}
    </Button>
  );
};
export default ModeToggle;
