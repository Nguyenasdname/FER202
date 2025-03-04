import React, { useState } from "react";
import { Container, Nav, Tab } from "react-bootstrap";
import Counter from "./components/Counter";
import ChangeNameAge from "./components/ChangeNameAge";
import ItemList from "./components/ItemList";
import QuestionBank from "./components/QuestionBank";

function App() {
  // State để theo dõi tab hiện tại
  const [activeTab, setActiveTab] = useState("counter");

  return (
      <Tab.Container  activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        
        <Nav variant="tabs">
          <Nav.Item >
            <Nav.Link eventKey="counter">🧮 Counter</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="changeNameAge">📝 Change Name & Age</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="itemList">📋 Item List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="questionBank">❓ Quiz</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="mt-3">
          <Tab.Pane eventKey="counter">
            <Counter />
          </Tab.Pane>
          <Tab.Pane eventKey="changeNameAge">
            <ChangeNameAge />
          </Tab.Pane>
          <Tab.Pane eventKey="itemList">
            <ItemList />
          </Tab.Pane>
          <Tab.Pane eventKey="questionBank">
            <QuestionBank />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    
  );
}

export default App;
