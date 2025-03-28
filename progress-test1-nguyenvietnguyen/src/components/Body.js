import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/index.css";
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';


const CardInfor = ({ student }) => {
    return (
        <Card className="stu-detail-card border border-dark" style={{ width: '30rem' }}>
            <Card.Img variant="top" src={student.img} className="stu-img" />
            <Card.Body>
                <div className="d-flex justify-content-center align-items-center mssv mt-3">{student.mssv}</div>
                <div className="name mt-3 d-flex justify-content-between align-items-center ps-3 pe-3">
                    <div>{student.name}</div>
                    <div>{student.location}</div>
                </div>
                <Form>
                    <div className="mb-3 mt-1 check-attendant d-flex justify-content-center align-items-center">
                        <Form.Check
                            type="radio"
                            id={student.name + "present"}
                            name={"attendance-" + student.mssv}
                            label="Present"
                            className="pe-5 me-5"
                        />
                        <Form.Check
                            type="radio"
                            id={student.name + "absent"}
                            name={"attendance-" + student.mssv}
                            label="Absent"
                            className="ps-5 ms-5"
                        />
                    </div>
                    <div className="submit d-flex justify-content-center align-items-center">
                        <Button className="bg-orange text-white" type="submit">Submit</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};


const Body = () => {
    const students = [
        { name: "Nguyen Huu Quoc Khanh", mssv: "DE181082", location: "Da Nang", img: "images/Std1.png" },
        { name: "Nguyen Huu Quoc Khanh", mssv: "DE181082", location: "Da Nang", img: "images/Std2.png" },
        { name: "Nguyen Huu Quoc Khanh", mssv: "DE181082", location: "Da Nang", img: "images/Std3.png" },
        { name: "Nguyen Huu Quoc Khanh", mssv: "DE181082", location: "Da Nang", img: "images/Std4.png" }
    ];

    return (
        <Container fluid className="container-s">
            <div className="home-student d-flex justify-content-center align-items-center py-3 ms-5">
                <span className="text-orange">Home /<span className="text-black"> Student</span></span>
            </div>
            <div className="mt-5 mb-5 fs-1 d-flex justify-content-center align-items-center fw-bold">Student Detail</div>
            <Row className="justify-content-center">
                {students.map((student, index) => (
                    <Col key={index} md={6} className="d-flex justify-content-center mb-4">
                        <CardInfor student={student} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Body;