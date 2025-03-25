import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Spinner, Alert } from 'react-bootstrap';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/posts.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to load post');
                }
                return res.json();
            })
            .then(data => {
                const found = data.find(p => p.id.toString() === id);
                if (!found) {
                    setError('Post not found');
                }
                setPost(found);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    return (
        <Container className="mt-4">
            {loading && <Spinner animation="border" className="d-block mx-auto" />}

            {error && <Alert variant="danger" className="text-center">{error}</Alert>}

            {!loading && post && (
                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title className="mb-3">{post.title}</Card.Title>
                        <Card.Text>{post.content}</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
}

export default PostDetail;
