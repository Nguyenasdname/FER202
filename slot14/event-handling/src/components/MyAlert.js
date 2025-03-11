import React, { useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";

function MyAlert() {
    const [show, setShow] = useState(false);

    return (
        <Container className="mt-4">
            <Button onClick={() => setShow(true)}>Show Alert</Button>

            {show && (
                <Alert variant="success" dismissible onClose={() => setShow(false)} className="mt-3">
                    <Alert.Heading>Success!</Alert.Heading>
                    <p>This is a success alert—check it out!</p>
                </Alert>
            )}
        </Container>
    );
}

export default MyAlert;
