import React, { useReducer } from "react";
import { Container, Button, Card } from "react-bootstrap";

// Định nghĩa reducer
function counterReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <Container className="text-center mt-5">
            <Card className="p-4 mx-auto shadow-sm" style={{ maxWidth: "320px" }}>
                <h2>Counter</h2>
                <h1 className="display-4 text-primary fw-bold">{state.count}</h1>
                <div className="mt-3">
                    <Button variant="primary" className="me-2" onClick={() => dispatch({ type: "INCREMENT" })}>+</Button>
                    <Button variant="danger" className="me-2" onClick={() => dispatch({ type: "DECREMENT" })}>-</Button>
                    <Button variant="secondary" onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
                </div>
            </Card>
        </Container>
    );
}

export default Counter;
