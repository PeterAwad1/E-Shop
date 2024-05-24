import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

import { useEffect, useState } from "react";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
  return (
    <div>
      {darkMode === "dark" ? (
        <img
          src={DarkButton}
          alt="Dark Mode"
          onClick={() => setDarkMode("light")}
          className="w-12 cursor-pointer"
        />
      ) : (
        <img
          src={LightButton}
          alt="light Mode"
          onClick={() => setDarkMode("dark")}
          className="w-12 cursor-pointer"
        />
      )}
    </div>
  );
}

export default DarkMode;
