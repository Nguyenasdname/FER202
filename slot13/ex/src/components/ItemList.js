import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer, useState } from "react";
import { Button, Form, Container, ListGroup, Card, Row, Col } from "react-bootstrap";
import { FaTrash, FaPlus, FaEdit, FaCheck } from "react-icons/fa"; // Icon đẹp mắt

// Reducer xử lý danh sách item
function listReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.item] };

        case "REMOVE_ITEM":
            return { ...state, items: state.items.filter(item => item.id !== action.id) };

        case "EDIT_ITEM":
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.id ? { ...item, isEditing: true } : item
                ),
            };

        case "SAVE_ITEM":
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.id ? { ...item, name: action.newName, isEditing: false } : item
                ),
            };

        default:
            return state;
    }
}

const initialState = { items: [] };

function ItemList() {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const [newItemName, setNewItemName] = useState("");
    const [editName, setEditName] = useState(""); // Lưu giá trị mới khi chỉnh sửa

    const handleAddItem = () => {
        if (newItemName.trim()) {
            const newItem = { id: Date.now(), name: newItemName, isEditing: false };
            dispatch({ type: "ADD_ITEM", item: newItem });
            setNewItemName("");
        }
    };

    return (
        <Container className="mt-4 d-flex justify-content-center">
            <Card className="p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center">📋 Item List</h3>
                <Form className="mb-3">
                    <Form.Group as={Row}>
                        <Col xs={8}>
                            <Form.Control
                                type="text"
                                value={newItemName}
                                onChange={(e) => setNewItemName(e.target.value)}
                                placeholder="Enter an item"
                            />
                        </Col>
                        <Col xs={4}>
                            <Button variant="primary" className="w-100" onClick={handleAddItem}>
                                <FaPlus /> Add
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>

                <ListGroup>
                    {state.items.length > 0 ? (
                        state.items.map((item) => (
                            <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                                {item.isEditing ? (
                                    <Form.Control
                                        type="text"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                    />
                                ) : (
                                    <span>{item.name}</span>
                                )}

                                <div>
                                    {item.isEditing ? (
                                        <Button
                                            variant="success"
                                            size="sm"
                                            className="me-2"
                                            onClick={() => dispatch({ type: "SAVE_ITEM", id: item.id, newName: editName })}
                                        >
                                            <FaCheck />
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="warning"
                                            size="sm"
                                            className="me-2"
                                            onClick={() => {
                                                setEditName(item.name);
                                                dispatch({ type: "EDIT_ITEM", id: item.id });
                                            }}
                                        >
                                            <FaEdit />
                                        </Button>
                                    )}

                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
                                    >
                                        <FaTrash />
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        ))
                    ) : (
                        <p className="text-center text-muted">No items added yet</p>
                    )}
                </ListGroup>
            </Card>
        </Container>
    );
}

export default ItemList;
