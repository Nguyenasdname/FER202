import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer, useEffect } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icon phản hồi

const initialState = {
    questions: [
        { id: 1, question: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Perth"], answer: "Canberra" },
        { id: 2, question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
        { id: 3, question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
    ],
    currentQuestion: 0,
    selectedOption: "",
    score: 0,
    showScore: false,
    feedback: null, // Phản hồi đúng/sai
    timeLeft: 10, // Thời gian đếm ngược
    highScore: localStorage.getItem("highScore") || 0, // Lấy điểm cao từ Local Storage
};

function quizReducer(state, action) {
    switch (action.type) {
        case "SELECT_OPTION":
            return { ...state, selectedOption: action.payload };

        case "NEXT_QUESTION":
            const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
            const newScore = isCorrect ? state.score + 1 : state.score;
            return {
                ...state,
                score: newScore,
                currentQuestion: state.currentQuestion + 1,
                selectedOption: "",
                feedback: isCorrect ? "correct" : "incorrect",
                showScore: state.currentQuestion + 1 === state.questions.length,
                timeLeft: 10,
            };

        case "UPDATE_TIME":
            return { ...state, timeLeft: state.timeLeft - 1 };

        case "RESTART_QUIZ":
            return { ...initialState, highScore: state.highScore };

        case "SET_HIGH_SCORE":
            return { ...state, highScore: action.payload };

        default:
            return state;
    }
}

function QuestionBank() {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    const { questions, currentQuestion, selectedOption, score, showScore, feedback, timeLeft, highScore } = state;

    // Cập nhật đồng hồ đếm ngược
    useEffect(() => {
        if (timeLeft > 0 && !showScore) {
            const timer = setInterval(() => dispatch({ type: "UPDATE_TIME" }), 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            dispatch({ type: "NEXT_QUESTION" });
        }
    }, [timeLeft, showScore]);

    // Lưu điểm cao vào Local Storage
    useEffect(() => {
        if (showScore && score > highScore) {
            localStorage.setItem("highScore", score);
            dispatch({ type: "SET_HIGH_SCORE", payload: score });
        }
    }, [showScore, score, highScore]);

    return (
        <Container className="mt-4">
            <Card className="p-4 text-center">
                {showScore ? (
                    <>
                        <h2>Your Score: {score} / {questions.length}</h2>
                        <h3>🎯 High Score: {highScore}</h3>
                        <Button variant="primary" onClick={() => dispatch({ type: "RESTART_QUIZ" })}>
                            Restart Quiz
                        </Button>
                    </>
                ) : (
                    <>
                        <h4>
                            Câu hỏi {currentQuestion + 1}/{questions.length}: {questions[currentQuestion].question}
                        </h4>

                        {/* Hiển thị đồng hồ đếm ngược */}
                        <ProgressBar now={(timeLeft / 10) * 100} className="mt-2" variant={timeLeft < 5 ? "danger" : "primary"} />
                        <h5 style={{ color: timeLeft < 5 ? "red" : "black" }}>⏳ {timeLeft}s còn lại</h5>

                        {/* Hiển thị các lựa chọn */}
                        <div className="mt-3">
                            {questions[currentQuestion].options.map((option, index) => (
                                <Button
                                    key={index}
                                    variant={selectedOption === option ? "success" : "outline-secondary"}
                                    className="m-2"
                                    onClick={() => dispatch({ type: "SELECT_OPTION", payload: option })}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>

                        {/* Hiển thị phản hồi */}
                        {feedback && (
                            <h5 className="mt-3">
                                {feedback === "correct" ? (
                                    <span style={{ color: "green" }}><FaCheckCircle /> Correct! 🎉</span>
                                ) : (
                                    <span style={{ color: "red" }}><FaTimesCircle /> Incorrect! The correct answer is "{questions[currentQuestion-1].answer}"</span>
                                )}
                            </h5>
                        )}

                        {/* Nút Next */}
                        <Button
                            variant="primary"
                            className="mt-3"
                            disabled={!selectedOption}
                            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                        >
                            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                        </Button>
                    </>
                )}
            </Card>
        </Container>
    );
}

export default QuestionBank;
