import "../styles/globals.css";
import { useState, useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("udaan-theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("udaan-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("udaan-theme", "light");
    }
  };

  return <Component {...pageProps} darkMode={darkMode} toggleDark={toggleDark} />;
}
