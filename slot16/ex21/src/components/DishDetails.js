import React from 'react';
import { useParams } from 'react-router-dom';
import dishes from '../data/dishes';
import { Container, Card } from 'react-bootstrap';

const DishDetails = () => {
    const { id } = useParams();
    const dish = dishes.find((dish) => dish.id === parseInt(id));

    if (!dish) return <div>Dish not found</div>;

    return (
        <Container className="my-4 d-flex justify-content-center">
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={`/${dish.image}`} alt={dish.name} />
                <Card.Body>
                    <Card.Title>{dish.name}</Card.Title>
                    <Card.Text>{dish.description}</Card.Text>
                    <Card.Text>
                        <strong>Category:</strong> {dish.category}
                    </Card.Text>
                    <Card.Text>
                        <strong>Label:</strong> {dish.label || 'None'}
                    </Card.Text>
                    <Card.Text>
                        <strong>Price:</strong> ${dish.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default DishDetails;
