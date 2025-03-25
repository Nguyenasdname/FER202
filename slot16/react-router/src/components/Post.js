import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, ListGroup, Spinner, Alert } from 'react-bootstrap';

function Post() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/posts.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to load posts');
                }
                return res.json();
            })
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Post List</h2>

            {loading && <Spinner animation="border" className="d-block mx-auto" />}

            {error && <Alert variant="danger">{error}</Alert>}

            {!loading && !error && (
                <Card className="shadow-sm">
                    <ListGroup variant="flush">
                        {posts.map(post => (
                            <ListGroup.Item key={post.id}>
                                <Link to={`/post/${post.id}`} className="text-decoration-none">
                                    {post.title}
                                </Link>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
            )}
        </Container>
    );
}

export default Post;
