import { useEffect, useState } from "react";
import "./ThemeSwitcher.css"

import iconMonn from "../../assets/icon-moon.svg";
import iconSun from "../../assets/icon-sun.svg";

const DARK = "dark";
const LIGHT = "light";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(DARK);

  useEffect(() => {
    document.querySelector("html").setAttribute("theme", theme);
  }, [theme]);

  return (
    <button className="btn-theme"
      onClick={e =>
        setTheme(t => t === DARK ? LIGHT : DARK)
      }
    >
      <span>{theme === "dark" ? LIGHT.toUpperCase() : DARK.toUpperCase()}</span>
      <img 
        src={theme === "dark" ?  iconSun : iconMonn }
        alt="Icon for theme toggle button"
        width="20px"
        height="20px"
      />
    </button>
  );

}