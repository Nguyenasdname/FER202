import React from 'react';
import { Container } from 'react-bootstrap';
import Quiz from './components/Quiz';
import { QuizProvider } from './components/QuizContext';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const quizData = [
    {
      question: 'What is ReactJS?',
      answers: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
      correctAnswer: 'A JavaScript library for building user interfaces'
    },
    {
      question: 'What is JSX?',
      answers: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
      correctAnswer: 'A syntax extension for JavaScript'
    }
  ];

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <QuizProvider>
        <Quiz quizData={quizData} />
      </QuizProvider>
    </Container>
  );
};

export default App;