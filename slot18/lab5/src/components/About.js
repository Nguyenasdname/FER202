import { Container, Row, Col, Card } from 'react-bootstrap';


const newsList = [
    { id: 1, title: 'Woman bakes expletive-laden pies...', description: '“What started as a means...”', images: 'images/event-1.jpg' },
    { id: 2, title: 'Martha Stewart shows off her 30 pies...', description: 'Queen of Thanksgiving...', images: 'images/event-2.jpg' },
    { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for...', images: 'images/event-3.jpg' },
];


const aboutData = {
    mission: "Our mission is to provide an engaging platform for users to test their knowledge through quizzes while staying updated with the latest news in food and culture.",
    vision: "We envision a community where learning and staying informed is fun, interactive, and accessible to everyone.",
};

const styles = {
    page: {
        minHeight: '100vh', 
        background: 'linear-gradient(45deg, #f3e7ff, #e0f7fa, #ffebef)', 
        backgroundSize: '200% 200%', 
        animation: 'gradientAnimation 15s ease infinite', 
    },
    contentWrapper: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
    },
};


const keyframes = `
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;


const styleSheet = document.createElement("style");
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

function About() {
    return (
        <div style={styles.page}>
            <Container className="py-5">
                {/* Phần nội dung chính với lớp nền trắng mờ */}
                <div style={styles.contentWrapper}>
                    {/* Phần giới thiệu chính */}
                    <Row className="text-center mb-5">
                        <Col>
                            <h2>About Us</h2>
                            <p className="lead">
                                Welcome to the Quiz App – your go-to platform to test your knowledge and stay updated with the latest news!
                            </p>
                        </Col>
                    </Row>

                    {/* Phần Mission và Vision */}
                    <Row className="mb-5">
                        <Col md={6}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Card.Title>Our Mission</Card.Title>
                                    <Card.Text>{aboutData.mission}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Card.Title>Our Vision</Card.Title>
                                    <Card.Text>{aboutData.vision}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Phần tin tức nổi bật */}
                    <Row>
                        <Col>
                            <h3>Why We Love Food & Culture</h3>
                            <p>Here are some interesting stories that inspire us:</p>
                        </Col>
                    </Row>
                    <Row>
                        {newsList.slice(0, 3).map((news) => (
                            <Col md={4} key={news.id} className="mb-4">
                                <Card className="h-100 shadow-sm">
                                    <Card.Img variant="top" src={news.images} style={{ height: '200px', objectFit: 'cover' }} />
                                    <Card.Body>
                                        <Card.Title>{news.title}</Card.Title>
                                        <Card.Text>{news.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default About;