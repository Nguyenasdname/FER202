import { Container, Card, Row, Col, Button } from 'react-bootstrap';

// Dữ liệu tin tức
const newLists = [
    { id: 1, title: 'Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition', description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.', images: 'images/event-1.jpg' },
    { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: 'images/event-2.jpg' },
    { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: 'images/event-3.jpg' },
    { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get ’em in five different flavors.', images: 'images/event-4.jpg' },
    { id: 5, title: 'Top salmon with a sizzling mix of aromatics and spices', description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: 'images/event-5.jpg' },
    { id: 6, title: '80 Christmas dinner ideas for the ultimate holiday feast', description: 'Build the perfect Christmas menu with these delicious recipes.', images: 'images/event-6.jpg' },
    { id: 7, title: 'How to make the easiest prime rib roast for the holidays', description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: 'images/event-7.jpg' },
    { id: 8, title: 'Turn leftover turkey into a flavorful Waldorf salad', description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: 'images/event-8.jpg' },
];

// CSS tùy chỉnh
const styles = {
    page: {
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #f9f5ff, #e6f7fa)', // Gradient nhẹ nhàng: tím nhạt -> xanh nhạt
        backgroundSize: '200% 200%',
        animation: 'gradientAnimation 15s ease infinite',
    },
    card: {
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Hiệu ứng chuyển động khi hover
        height: '100%',
        border: 'none',
        borderRadius: '15px',
        overflow: 'hidden',
    },
    cardHover: {
        transform: 'translateY(-10px)', // Nâng card lên khi hover
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', // Tăng bóng khi hover
    },
    image: {
        height: '250px', // Giảm chiều cao hình ảnh để cân đối
        objectFit: 'cover',
    },
    description: {
        height: '80px', // Giảm chiều cao mô tả để đồng nhất
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3, // Giới hạn 3 dòng
        WebkitBoxOrient: 'vertical',
    },
    title: {
        fontSize: '1.1rem', // Giảm kích thước tiêu đề để cân đối
        fontWeight: 'bold',
        color: '#333',
    },
};

// Thêm keyframes cho hiệu ứng gradient
const keyframes = `
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

// Thêm style tag vào head để áp dụng keyframes
const styleSheet = document.createElement("style");
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

function News() {
    return (
        <div style={styles.page}>
            <Container className="py-5">
                {/* Tiêu đề và mô tả */}
                <Row className="mb-5">
                    <Col>
                        <h2 className="text-danger">News Category</h2>
                    </Col>
                </Row>

                {/* Danh sách tin tức */}
                <Row>
                    {newLists.map((news) => (
                        <Col md={4} key={news.id} className="mb-4">
                            <Card
                                style={styles.card}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = styles.cardHover.transform;
                                    e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.05)';
                                }}
                            >
                                <Card.Img variant="top" src={news.images} style={styles.image} />
                                <Card.Body>
                                    <Card.Title style={styles.title}>{news.title}</Card.Title>
                                    <Card.Text style={styles.description}>{news.description}</Card.Text>
                                    <Button variant="outline-primary" size="sm">
                                        Read More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default News;