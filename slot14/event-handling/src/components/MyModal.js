import React, { useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";

function MyModal() {
    const [show, setShow] = useState(false);

    return (
        <Container className="mt-4">
            <Button variant="primary" onClick={() => setShow(true)}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setShow(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default MyModal;
