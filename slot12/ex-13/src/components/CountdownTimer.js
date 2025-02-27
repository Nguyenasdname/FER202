import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CountdownTimer = ({ initialValue }) => {
    const [timeRemaining, setTimeRemaining] = useState(initialValue);

    useEffect(() => {
        if (timeRemaining <= 0) return;
        const timerId = setInterval(() => {
            setTimeRemaining((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, [timeRemaining]);

    return <h2>Time Remaining: {timeRemaining}</h2>;
};

export default CountdownTimer;