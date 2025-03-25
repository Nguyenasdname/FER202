import { Carousel, Row, Col } from 'react-bootstrap';

const slides = [
    { src: 'images/slide1.jpg', alt: 'Slide 1' },
    { src: 'images/slide2.jpg', alt: 'Slide 2' },
    { src: 'images/slide3.jpg', alt: 'Slide 3' },
];

const smallImages = [
    { src: 'images/menu-01.jpg', alt: 'Small Image 1' },
    { src: 'images/menu-02.jpg', alt: 'Small Image 2' },
    { src: 'images/menu-03.jpg', alt: 'Small Image 3' },
    { src: 'images/menu-04.jpg', alt: 'Small Image 3' },
    { src: 'images/menu-05.jpg', alt: 'Small Image 3' },
    { src: 'images/menu-06.jpg', alt: 'Small Image 3' },
];

function Home() {
    return (
        <div className="container-s">
            <Carousel>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block"
                            src={slide.src}
                            alt={slide.alt}
                            style={{ width: "100%", height: "650px" }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* 3 hình ảnh nhỏ bên dưới */}
            <Row className="mt-4">
                {smallImages.map((image, index) => (
                    <Col md={2} key={index} className="text-center">
                        <img
                            src={image.src}
                            alt={image.alt}
                            style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                        />
                    </Col>
                ))}
            </Row>
            <h1 className='text-danger ms-3'>This Is Home Page</h1>    
        </div>
    );
}

export default Home;