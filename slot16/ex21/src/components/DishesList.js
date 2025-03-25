import React from 'react';
import { Link } from 'react-router-dom';
import dishes from '../data/dishes';
import { Card, Container, Row, Col } from 'react-bootstrap';

const DishList = () => (
    <Container className="my-4">
        <h3 className="mb-4">Dishes List</h3>
        <Row>
            {dishes.map((dish) => (
                <Col md={3} className="mb-4" key={dish.id}>
                    <Card>
                        <Card.Img style={{height: "230px"}} variant="top" src={dish.image} alt={dish.name} />
                        <Card.Body>
                            <Card.Title>{dish.name}</Card.Title>
                            <Card.Text>
                                <strong>Price: </strong>${dish.price}
                            </Card.Text>
                            <Link to={`/dishes/${dish.id}`} className="btn btn-primary">
                                View Details
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);

export default DishList;