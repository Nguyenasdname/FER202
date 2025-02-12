import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">Pizza House</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About Us</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex ms-3">
                        <Form.Control type="text" placeholder="Search" className="me-2" />
                        <Button variant="danger">🔍</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const CustomCarousel = () => {
    return (
        <Carousel>
            {[1, 2, 3].map((_, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src="images/pizza.jpg" alt="Pizza" />
                    <Carousel.Caption>
                        <h3>Neapolitan Pizza</h3>
                        <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

const MenuItem = ({ img, title, price, salePrice, infor }) => {
    return (
        <Card style={{ width: "18rem" }} className="me-3">
            <Card.Img variant="top" className="item-img" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {salePrice ? (
                        <>
                            <span className="text-decoration-line-through">${price}</span>
                            <span className="text-warning ms-2">${salePrice}</span>
                        </>
                    ) : (
                        <span>${price}</span>
                    )}
                </Card.Text>
                <Button variant="dark">Buy</Button>
            </Card.Body>
            {infor && <div className="bg-warning text-center p-2 new"><strong>{infor}</strong></div>}
        </Card>
    );
};

const Menu = () => {
    const menuItems = [
        { img: "images/pizza1.jpg", title: "Margherita Pizza", price: "40.00", salePrice: "24.00", infor: "Sale" },
        { img: "images/pizza2.jpg", title: "Pepperoni Pizza", price: "45.00", salePrice: null, infor: null },
        { img: "images/pizza3.jpg", title: "Veggie Pizza", price: "38.00", salePrice: null, infor: "New" },
        { img: "images/pizza4.jpg", title: "BBQ Chicken Pizza", price: "50.00", salePrice: "35.00", infor: "Sale" },
    ];
    return (
        <Container className="text-white py-5">
            <h2 className="mb-4">Our Menu</h2>
            <Row className="justify-content-center">
                {menuItems.map((item, index) => (
                    <Col key={index} md={4} lg={3} className="mb-4">
                        <MenuItem {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

const BookingForm = () => {
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
                <Col><Form.Control as="textarea" rows={5} placeholder="Please write your comment" /></Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <Button variant="warning" className="fs-4 fw-bold">Send Message</Button>
                </Col>
            </Row>
        </Container>
    );
};

const PizzaWeb = () => {
    return (
        <div className="bg-dark">
            <CustomNavbar />
            <CustomCarousel />
            <Menu />
            <BookingForm />
        </div>
    );
};

export default PizzaWeb;
