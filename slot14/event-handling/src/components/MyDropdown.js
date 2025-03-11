import React, { useState } from "react";
import { Dropdown, DropdownButton, Container, Card } from "react-bootstrap";

function MyDropdown() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (eventKey, event) => {
        setSelectedItem(event.target.innerText);
    };

    return (
        <Container className="mt-4">
            <Card className="p-3">
                <DropdownButton title={selectedItem || "Select an item"} onSelect={handleSelect}>
                    <Dropdown.Item eventKey="1">Item 1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Item 2</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Item 3</Dropdown.Item>
                </DropdownButton>
                {selectedItem && <p className="mt-3">You selected: {selectedItem}</p>}
            </Card>
        </Container>
    );
}

export default MyDropdown;
