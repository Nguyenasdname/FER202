import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";

const validateName = (name) => name.length >= 3;
const validateCountry = (country) => country.trim() !== "";
const validateGender = (gender) => gender !== "";

function ValidatedForm() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setErrors({
            name: !validateName(name) ? "Name must be at least 3 characters long" : "",
            gender: !validateGender(gender) ? "Please select a gender" : "",
            country: !validateCountry(country) ? "Country cannot be empty" : "",
            agreed: !agreed ? "You must agree to the terms and conditions" : ""
        });
    }, [name, gender, country, agreed]);

    return (
        <Card className="my-5 py-5 px-5">
            <Form className="">
                <h1 className="text-center">ValidatedForm</h1>
                <Form.Group controlId="nameInput">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        isInvalid={errors.name}
                        isValid={!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="genderInput" className="mt-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Check
                        inline
                        type="radio"
                        label="Male"
                        name="gender"
                        value="Male"
                        onChange={(e) => setGender(e.target.value)}
                        isInvalid={errors.gender}
                        isValid={!errors.gender}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Female"
                        name="gender"
                        value="Female"
                        onChange={(e) => setGender(e.target.value)}
                        isInvalid={errors.gender}
                        isValid={!errors.gender}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Other"
                        name="gender"
                        value="Other"
                        onChange={(e) => setGender(e.target.value)}
                        isInvalid={errors.gender}
                        isValid={!errors.gender}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.gender}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="countryInput" className="mt-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        isInvalid={errors.country}
                        isValid={!errors.country}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.country}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="agreement" className="mt-3">
                    <Form.Check
                        type="checkbox"
                        label="I agree to the terms and conditions"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        isInvalid={errors.agreed}
                        isValid={!errors.agreed}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.agreed}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button className="mt-3" variant="primary" type="submit" disabled={Object.values(errors).some(err => err !== "")}>
                    Submit
                </Button>
            </Form>
        </Card>
    );
}

export default ValidatedForm;
