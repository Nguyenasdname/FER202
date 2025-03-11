import React, { useState } from 'react';
import { Container, Button, Card, Badge, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SnapshotDemo = () => {
    const [count, setCount] = useState(0);
    const [snapshot, setSnapshot] = useState(null);

    const handleIncrement = () => setCount(count + 1);
    const handleSnapshot = () => setSnapshot(count);
    const handleRestore = () => snapshot !== null && setCount(snapshot);

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="shadow-lg p-4" style={{ width: '30rem' }}>
                <Card.Body className="text-center">
                    <Card.Title className="mb-3">State as a Snapshot Demo</Card.Title>
                    <Card.Text className="mb-4">
                        <h4>
                            Count: <Badge bg="warning">{count}</Badge>
                        </h4>
                        {snapshot !== null && (
                            <div className="mt-2">
                                Snapshot: <Badge bg="secondary">{snapshot}</Badge>
                            </div>
                        )}
                    </Card.Text>
                    <ButtonGroup className="mt-3">
                        <Button variant="warning" onClick={handleIncrement}>Increment</Button>
                        <Button variant="info" onClick={handleSnapshot}>Take Snapshot</Button>
                        <Button variant="success" onClick={handleRestore}>Restore Snapshot</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SnapshotDemo;