import React from "react";
import PropTypes from "prop-types";
import { Card, Alert } from "react-bootstrap";

const UserProfile = ({ name, age }) => {
    if (!name || typeof name !== "string") {
        return <Alert variant="danger">Tên không hợp lệ hoặc không được cung cấp!</Alert>;
    }

    if (!age || isNaN(age)) {
        return <Alert variant="danger">Tuổi phải là một số hợp lệ!</Alert>;
    }

    return (
        <Card className="p-3 m-2">
            <Card.Body>
                <Card.Title>Thông Tin Người Dùng</Card.Title>
                <Card.Text>Tên: {name}</Card.Text>
                <Card.Text>Tuổi: {age}</Card.Text>
            </Card.Body>
        </Card>
    );
};

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default UserProfile;
