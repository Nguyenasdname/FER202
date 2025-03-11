import React from "react";
import PropTypes from "prop-types";
import { Card, Button, ListGroup } from "react-bootstrap";

const AnimalCard = ({ name, scientificName, size, diet, additional, showAdditional, image }) => {
    return (
        <Card className="m-3 shadow-sm bg-warning rounded overflow-hidden">
            <Card.Img variant="top" src={image} alt={name}
                style={{ width: "100%", height: "450px", objectFit: "cover" }} />
            <Card.Body className="px-3 py-2 ">
                <Card.Title className="text-danger fw-bold fs-4">{name}</Card.Title>
                <ListGroup variant="flush" className="mt-2 bg-white">
                    <ListGroup.Item className="border-0 bg-transparent px-2 py-1">
                        <strong>Scientific Name:</strong> {scientificName}
                    </ListGroup.Item>
                    <hr></hr>
                    <ListGroup.Item className="border-0 bg-transparent px-2 py-1">
                        {size} kg
                    </ListGroup.Item>
                    <hr></hr>
                    <ListGroup.Item className="border-0 bg-transparent px-2 py-1">
                        {diet.join(", ")}.
                    </ListGroup.Item>
                </ListGroup>
                <div className="d-flex justify-content-center">
                    <Button
                        variant="danger"
                        className="fw-bold mt-3"
                        onClick={() => showAdditional(additional)}
                    >
                        More Info
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

// PropTypes kiểm tra dữ liệu đầu vào
AnimalCard.propTypes = {
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    additional: PropTypes.shape({
        notes: PropTypes.string,
        link: PropTypes.string,
    }),
    showAdditional: PropTypes.func.isRequired,
};

// Giá trị mặc định nếu không có `additional`
AnimalCard.defaultProps = {
    additional: {
        notes: "No Additional Information",
    },
};

export default AnimalCard;
