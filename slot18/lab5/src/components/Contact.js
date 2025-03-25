import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Contact() {
    // Trạng thái cho các trường form
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: false,
    });

    // Trạng thái cho lỗi
    const [errors, setErrors] = useState({});

    // Hàm xử lý thay đổi giá trị input
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Hàm validate form
    const validate = () => {
        const newErrors = {};

        // Validation cho First Name
        if (!formData.firstName) {
            newErrors.firstName = 'Please provide a valid first name.';
        } else {
            newErrors.firstName = 'Looks good!';
        }

        // Validation cho Last Name
        if (!formData.lastName) {
            newErrors.lastName = 'Please provide a valid last name.';
        } else {
            newErrors.lastName = 'Looks good!';
        }

        // Validation cho các trường còn lại
        if (!formData.username) newErrors.username = 'Please choose a username.';
        if (!formData.city) newErrors.city = 'Please provide a valid city.';
        if (!formData.state) newErrors.state = 'Please provide a valid state.';
        if (!formData.zip) newErrors.zip = 'Please provide a valid zip.';
        if (!formData.agree) newErrors.agree = 'You must agree before submitting.';

        return newErrors;
    };

    // Hàm xử lý submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        // Nếu không có lỗi, có thể xử lý submit (ví dụ: gửi dữ liệu lên server)
        if (Object.keys(validationErrors).every((key) => validationErrors[key] === 'Looks good!')) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <Container className="mt-4">
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={4}>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First name"
                                isValid={formData.firstName && errors.firstName === 'Looks good!'}
                                isInvalid={errors.firstName && errors.firstName !== 'Looks good!'}
                            />
                            <Form.Control.Feedback type="valid">{errors.firstName}</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last name"
                                isValid={formData.lastName && errors.lastName === 'Looks good!'}
                                isInvalid={errors.lastName && errors.lastName !== 'Looks good!'}
                            />
                            <Form.Control.Feedback type="valid">{errors.lastName}</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Username"
                                isInvalid={errors.username}
                            />
                            <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col md={4}>
                        <Form.Group controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="City"
                                isInvalid={errors.city}
                            />
                            <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group controlId="formState">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="State"
                                isInvalid={errors.state}
                            />
                            <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group controlId="formZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                placeholder="Zip"
                                isInvalid={errors.zip}
                            />
                            <Form.Control.Feedback type="invalid">{errors.zip}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="formAgree" className="mt-3">
                    <Form.Check
                        type="checkbox"
                        label="Agree to terms and conditions"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        isInvalid={errors.agree}
                    />
                    <Form.Control.Feedback type="invalid">{errors.agree}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Submit form
                </Button>
            </Form>
        </Container>
    );
}

// PropTypes (trong trường hợp bạn truyền props vào Contact, ví dụ: một callback onSubmit)
Contact.propTypes = {
    onSubmit: PropTypes.func,
};

export default Contact;