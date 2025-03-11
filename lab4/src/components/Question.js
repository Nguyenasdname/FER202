import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Question = ({ question, answers, correctAnswer, onSelect }) => {
    return (
        <Card className="mb-3 p-3 shadow-sm border-0">
            <Card.Body>
                <Card.Title className="text-danger fw-bold">{question}</Card.Title>
                {answers.map((answer, index) => (
                    <div key={index} className="d-flex align-items-center my-2">
                        <input type="radio" name="answer" className="me-2" onClick={() => onSelect(answer === correctAnswer)} />
                        <label>{answer}</label>
                    </div>
                ))}
                <Button className="mt-3" variant="danger" onClick={() => onSelect(false)}>Next</Button>
            </Card.Body>
        </Card>
    );
};

export default Question;