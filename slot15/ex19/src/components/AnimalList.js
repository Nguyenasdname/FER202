import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import AnimalCard from "./AnimalCard";

const AnimalList = ({ animals }) => {
    const showAdditionalData = (additional) => {
        const data = additional
            ? Object.entries(additional).map(([key, value]) => `${key}: ${value}`).join("\n")
            : "No additional information available.";
        alert(data);
    };

    return (
        <Container>
            <Row>
                {animals.map((animal, index) => (
                    <Col md={4} key={index}>
                        <AnimalCard {...animal} showAdditional={showAdditionalData} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

// PropTypes kiểm tra dữ liệu đầu vào
AnimalList.propTypes = {
    animals: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            scientificName: PropTypes.string.isRequired,
            size: PropTypes.number.isRequired,
            diet: PropTypes.arrayOf(PropTypes.string).isRequired,
            additional: PropTypes.shape({
                notes: PropTypes.string,
                link: PropTypes.string,
            }),
        })
    ).isRequired,
};

export default AnimalList;
