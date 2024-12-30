import React, { useEffect, useState } from "react";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );

    useEffect(() => {
        // Apply theme class to the <html> element
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }

        // Save the theme in localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Context for easy access
export const ThemeContext = React.createContext();
