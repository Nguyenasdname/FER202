import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Home() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="text-center p-5 shadow-lg" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
                <h1 className="display-4">Welcome to Our Website</h1>
                <p className="lead">We strive to bring you the best experience possible.</p>
                <hr className="my-4" />
                <p>Explore our services and learn more about what we offer.</p>
                <Button variant="primary" href="/about">Learn More</Button>
            </div>
        </Container>
    );
}

export default Home;
