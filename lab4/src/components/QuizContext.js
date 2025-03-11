import React, { createContext, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);

    return (
        <QuizContext.Provider value={{ score, setScore, currentQuestion, setCurrentQuestion, showResult, setShowResult }}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizContext;