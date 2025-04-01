import { useEffect, useState } from "react";
import "./ThemeSwitcher.css"

import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const DARK = "dark";
const LIGHT = "light";
const ATTRIBUTE = "data-theme";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(DARK);
  const [iconClass, setIconClass] = useState("icon");

  useEffect(() => {
    const savedTheme = localStorage.getItem(ATTRIBUTE);
    if (savedTheme && savedTheme !== theme)
        setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.querySelector("html").setAttribute(ATTRIBUTE, theme);
    localStorage.setItem(ATTRIBUTE, theme);
  }, [theme]);

  return (
    <button className="btn-theme"
      onClick={e =>
        setTheme(t => t === DARK ? LIGHT : DARK)
      }
      onMouseEnter={e => {setIconClass("icon-hover")}}
      onMouseLeave={e => {setIconClass("icon")}}
    >
      <span>{theme === "dark" ? LIGHT.toUpperCase() : DARK.toUpperCase()}</span>
      {theme === "dark" ?  
          <IconSun className={iconClass}/> :
          <IconMoon className={iconClass}/>
      }
    </button>
  );
}