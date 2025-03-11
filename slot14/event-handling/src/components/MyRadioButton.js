import React, { useState } from "react";
import { Form, Alert, Container, Card } from "react-bootstrap";

function MyRadioButton() {
    const [selectedValue, setSelectedValue] = useState("option1");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setAlertMessage(`You selected: ${event.target.value}`);
        setShowAlert(true);
    };

    return (
        <Container className="mt-4">
            <Card className="p-3">
                <Form.Check
                    type="radio"
                    label="Option 1"
                    value="option1"
                    checked={selectedValue === "option1"}
                    onChange={handleChange}
                />
                <Form.Check
                    type="radio"
                    label="Option 2"
                    value="option2"
                    checked={selectedValue === "option2"}
                    onChange={handleChange}
                />

                {showAlert && (
                    <Alert variant="info" className="mt-3" dismissible onClose={() => setShowAlert(false)}>
                        {alertMessage}
                    </Alert>
                )}
            </Card> 
        </Container>  
    );
}

export default MyRadioButton;
