import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer } from 'react';
import { Form, Container, Card } from 'react-bootstrap';

// Reducer xử lý cập nhật state
function formReducer(state, action) {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.value };
        case "SET_AGE":
            return { ...state, age: action.value };
        default:
            return state;
    }
}

function ChangeNameAge() {
    const [state, dispatch] = useReducer(formReducer, { name: '', age: '' });

    return (
        <Container className="mt-4 d-flex justify-content-center">
            <Card className="p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center">📝 User Info</h3>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={state.name}
                            onChange={(e) => dispatch({ type: "SET_NAME", value: e.target.value })}
                            placeholder="Enter your name"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Age:</Form.Label>
                        <Form.Control
                            type="number"
                            value={state.age}
                            onChange={(e) => dispatch({ type: "SET_AGE", value: e.target.value })}
                            placeholder="Enter your age"
                        />
                    </Form.Group>
                </Form>
                <hr />
                <h5 className="text-center">
                    Name: <span className="text-primary">{state.name || "N/A"}</span>
                </h5>
                <h5 className="text-center">
                    Age: <span className="text-success">{state.age || "N/A"}</span>
                </h5>
            </Card>
        </Container>
    );
}

export default ChangeNameAge;