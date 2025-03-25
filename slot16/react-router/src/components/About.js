// components/About.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';

function About() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <Card className="p-4 shadow-lg" style={{ maxWidth: '600px', textAlign: 'center' }}>
                <Card.Body>
                    <Card.Title className="mb-3" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        About Us
                    </Card.Title>
                    <Card.Text style={{ fontSize: '1.2rem', color: '#555' }}>
                        Welcome to our website! We are dedicated to providing the best services and experiences
                        for our users. Our team is committed to excellence and innovation.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default About;