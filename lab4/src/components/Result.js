import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Result = ({ score, total }) => {
    return (
        <Card className="text-center p-4 shadow-lg border-0">
            <Card.Body>
                <Card.Title className="text-danger display-4 fw-bold">Quiz Completed!</Card.Title>
                <Card.Text className="fs-3">Your score: {score} / {total}</Card.Text>
                <Button variant="primary" className="mt-3" onClick={() => window.location.reload()}>Retry</Button>
            </Card.Body>
        </Card>
    );
};

export default Result;