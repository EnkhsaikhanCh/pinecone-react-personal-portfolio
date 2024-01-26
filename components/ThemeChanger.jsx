import { useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { LuMoon } from "react-icons/lu";

export function ThemeChanger() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
    document.documentElement.classList.add(localTheme);
  }, []);

  return (
    <button
      className="rounded-lg bg-gray-200 px-3 py-3 dark:bg-[#242933]"
      onClick={changeTheme}
    >
      {theme === "light" && <GoSun />}
      {theme === "dark" && <LuMoon />}
    </button>
  );
}
