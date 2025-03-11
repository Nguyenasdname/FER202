import React, { useState } from 'react';
import { Button, Container, Card } from 'react-bootstrap';

function EventHandlingDemo() {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => setCount(count + 1);

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: '20rem', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} className="p-4 text-center">
                <Card.Body>
                    <Card.Title className="mb-4">Event Handling Demo</Card.Title>
                    <Button variant="success" size="lg" onClick={handleButtonClick}>
                        Click me!
                    </Button>
                    <Card.Text className="mt-4" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        Count: {count}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default EventHandlingDemo;
