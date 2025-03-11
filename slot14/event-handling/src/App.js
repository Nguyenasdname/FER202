import React from 'react';
import { Container, Tab, Nav } from 'react-bootstrap';
import EventHandlingDemo from './components/EventHandlingDemo';
import MyAlert from './components/MyAlert';
import MyDropdown from './components/MyDropdown';
import MyModal from './components/MyModal';
import MyRadioButton from './components/MyRadioButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Tab.Container defaultActiveKey="event">
      <div className="container mt-5">
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="event">Event Handling</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="alert">Alert Demo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="dropdown">Dropdown Demo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="modal">Modal Demo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="radio">Radio Button</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="mt-4">
          <Tab.Pane eventKey="event">
            <EventHandlingDemo />
          </Tab.Pane>
          <Tab.Pane eventKey="alert">
            <MyAlert />
          </Tab.Pane>
          <Tab.Pane eventKey="dropdown">
            <MyDropdown />
          </Tab.Pane>
          <Tab.Pane eventKey="modal">
            <MyModal />
          </Tab.Pane>
          <Tab.Pane eventKey="radio">
            <MyRadioButton />
          </Tab.Pane>
        </Tab.Content>
      </div>
    </Tab.Container>
  );
}

export default App;