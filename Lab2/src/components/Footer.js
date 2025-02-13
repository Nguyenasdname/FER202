import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

const Footer = () => {
    return (
        <Container className="text-white py-5">
            <h1 className="text-center">Book Your Table</h1>
            <Row className="mb-3">
                <Col md={4}><Form.Control type="text" placeholder="Your Name*" /></Col>
                <Col md={4}><Form.Control type="email" placeholder="Your Email*" /></Col>
                <Col md={4}>
                    <Form.Select>
                        <option disabled selected>Select a Service</option>
                        <option>Service 1</option>
                        <option>Service 2</option>
                        <option>Service 3</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className="mt-4 mb-3">
                <Col><Form.Control as="textarea" rows={7} placeholder="Please write your comment" /></Col>
            </Row>
            <Row>
                <Col className="text-center d-flex justify-content-left">
                    <Button variant="warning" className="fs-4 fw-bold">Send Message</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;