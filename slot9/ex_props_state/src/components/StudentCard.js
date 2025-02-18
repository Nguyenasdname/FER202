import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Col } from "react-bootstrap";

const StCard = ({ student }) => {
    return (
        <Card style={{ width: "18rem" }} className="mb-4">
            <Card.Img
                variant="top"
                src={student.avatar}
                alt={`${student.name}'s avatar`}
            />
            <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Text>Age: {student.age}</Card.Text>
                <Button variant="primary">Edit</Button>
            </Card.Body>
        </Card>
    );
};

const StudentCard = ({ students }) => {
    return (
        <div className="d-flex">
            {students.map((student, index) => (
                <Col key={index} sm={12} md={4}>
                    <StCard student={student} />
                </Col>
            ))}

        </div>
    )
}

export default StudentCard;
