import React, { useState } from "react";
import Result from "./Result";
import Question from "./Quesion";

const QuizApp = () => {
    const questions = [
        {
            id: 1,
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            id: 2,
            question: "What is the largest planet in our solar system?",
            options: ["Jupiter", "Saturn", "Mars", "Earth"],
            answer: "Jupiter",
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);

    const handleAnswerClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizEnd(true);
        }
    };

    return (
        <div>
            {quizEnd ? (
                <Result score={score} totalQuestions={questions.length} />
            ) : (
                <Question
                    questionData={questions[currentQuestion]}
                    questionNumber={currentQuestion + 1}
                    handleAnswerClick={handleAnswerClick}
                />
            )}
        </div>
    );
};

export default QuizApp;
