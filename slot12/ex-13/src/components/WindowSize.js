import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <p>
            Window size: {windowSize.width} x {windowSize.height}
        </p>
    );
};

export default WindowSize