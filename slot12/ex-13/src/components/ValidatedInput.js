import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ValidatedInput = ({ validationFunction, errorMessage }) => {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(null);

    useEffect(() => {
        setIsValid(value === "" ? null : validationFunction(value));
    }, [value, validationFunction]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="validatedInput">
                <Form.Label>Nhập giá trị:</Form.Label>
                <Form.Control
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    isValid={isValid === true}
                    isInvalid={isValid === false}
                />
                <Form.Control.Feedback type="invalid">
                    {errorMessage}
                </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-2" disabled={!isValid}>
                Submit
            </Button>
        </Form>
    );
};

export default ValidatedInput;
