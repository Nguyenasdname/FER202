import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Container, Card, Spinner } from "react-bootstrap";

const UserPosts = ({ userId }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            const data = await response.json();
            setPosts(data);
            setLoading(false);
        };
        fetchData();
    }, [userId]);

    return (
        <Container className="mt-4">
            <h2 className="text-primary">User Post {userId}</h2>

            {loading ? (
                <div className="text-center my-3">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : (
                posts.map((post) => (
                    <Card key={post.id} className="mb-3 shadow-sm">
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.body}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            )}
        </Container>
    );
};

export default UserPosts;
