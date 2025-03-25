import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Question from './Question';
import Result from './Result';
import QuizContext from './QuizContext';

const Quiz = ({ quizData }) => {
    const { score, setScore, currentQuestion, setCurrentQuestion, showResult, setShowResult } = useContext(QuizContext);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    return (
        <Container className="quiz-container">
            {!showResult ? (
                <Question
                    question={quizData[currentQuestion].question}
                    answers={quizData[currentQuestion].answers}
                    correctAnswer={quizData[currentQuestion].correctAnswer}
                    onSelect={handleAnswer}
                />
            ) : (
                <Result score={score} total={quizData.length} />
            )}
        </Container>
    );
};

export default Quiz;
