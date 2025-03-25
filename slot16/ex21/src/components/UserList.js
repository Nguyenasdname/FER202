import React from 'react';
import { Link } from 'react-router-dom';
import users from '../data/users';
import { ListGroup, Container } from 'react-bootstrap';

const UserList = () => (
    <Container className="my-4">
        <h3>Users List</h3>
        <ListGroup>
            {users.map(user => (
                <ListGroup.Item key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.firstName} {user.lastName}</Link>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </Container>
);

export default UserList;
