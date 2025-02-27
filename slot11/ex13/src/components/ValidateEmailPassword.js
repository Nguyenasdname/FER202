import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";


const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


const validatePassword = (password) => {
    return password.length >= 8;
};

function ValidateEmailPassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        const valid = validateEmail(email);
        setIsEmailValid(valid);
        setEmailError(valid ? "" : "Email không hợp lệ!");
    }, [email]);

    useEffect(() => {
        const valid = validatePassword(password);
        setIsPasswordValid(valid);
        setPasswordError(valid ? "" : "Mật khẩu phải có ít nhất 8 ký tự!");
    }, [password]);

    return (
        <Card className="my-5 py-5 px-5">
            <Form>
                <h1 className="text-center">ValidatedForm</h1>
                <Form.Group controlId="emailInput">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isValid={isEmailValid}
                        isInvalid={!isEmailValid}
                    />
                    <Form.Control.Feedback type="invalid">
                        {emailError}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="passwordInput" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        isValid={isPasswordValid}
                        isInvalid={!isPasswordValid}
                    />
                    <Form.Control.Feedback type="invalid">
                        {passwordError}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button className="mt-3" variant="primary" type="submit" disabled={!isEmailValid || !isPasswordValid}>
                    Submit
                </Button>
            </Form>
        </Card>
    );
}

export default ValidateEmailPassword;
