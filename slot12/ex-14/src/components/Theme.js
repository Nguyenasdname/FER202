import React, { createContext, useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const themes = {
    light: {
        foreground: "#000000",
        background: "linear-gradient(135deg, #ffffff, rgb(218, 235, 253))",
        buttonBg: "linear-gradient(135deg, #007bff, #0056b3)",
        buttonBorder: "#0056b3"
    },
    dark: {
        foreground: "#ffffff",
        background: "linear-gradient(135deg, rgb(251, 10, 10), rgb(33, 8, 255))",
        buttonBg: "linear-gradient(135deg, #ff6b6b, #c0392b)",
        buttonBorder: "#c0392b"
    }
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === themes.light ? themes.dark : themes.light
        );
    };

    useEffect(() => {
        document.body.style.background = theme.background;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <button
                className="btn btn-lg text-white px-4 py-2"
                style={{
                    background: theme.buttonBg,
                    border: `2px solid ${theme.buttonBorder}`,
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
                }}
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
        </div>
    );
};

const Theme = () => {
    return (
        <ThemeProvider>
            <ThemeButton />
        </ThemeProvider>
    );
};

export default Theme;
