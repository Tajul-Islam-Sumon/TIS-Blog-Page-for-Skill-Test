"use client";

import { useTheme } from "next-themes";
import { MdDarkMode, MdOutlineWbSunny  } from "react-icons/md";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {
            theme ==='dark' ? <MdOutlineWbSunny size={35} /> : <MdDarkMode size={35}/>
        }
    </button>
  );
}
