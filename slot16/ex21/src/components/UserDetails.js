import React from 'react';
import { useParams } from 'react-router-dom';
import users from '../data/users';
import { Card, Container } from 'react-bootstrap';

const UserDetail = () => {
    const { id } = useParams();
    const user = users.find(user => user.id === parseInt(id));

    if (!user) return <div>User not found</div>;

    return (
        <Container className="my-4">
            <Card>
                <Card.Body>
                    <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                    <Card.Text>Age: {user.age}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserDetail;
