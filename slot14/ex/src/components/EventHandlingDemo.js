import React, { useState } from 'react';
import { Container, Button, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventHandlingDemo = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="shadow-lg p-4" style={{ width: '25rem' }}>
                <Card.Body className="text-center">
                    <Card.Title className="mb-3">Event Handling Demo</Card.Title>
                    <Card.Text className="mb-4">
                        <h4>
                            Count: <Badge bg="info">{count}</Badge>
                        </h4>
                    </Card.Text>
                    <Button variant="primary" size="lg" onClick={handleButtonClick}>
                        Increase Count
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default EventHandlingDemo;
