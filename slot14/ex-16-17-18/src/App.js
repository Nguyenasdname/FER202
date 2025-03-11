import React from 'react';
import { Container, Tab, Nav } from 'react-bootstrap';
import EventHandlingDemo from './components/EventHandlingDemo';
import RenderAndCommitDemo from './components/RenderAndCommitDemo';
import SnapshotDemo from './components/SnapShotDemo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Tab.Container defaultActiveKey="eventHandling">
      <Container className="my-5">
        <Nav variant="tabs" className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link eventKey="eventHandling">Event Handling Demo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="renderCommit">Render and Commit Demo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="snapshot">Snapshot Demo</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="eventHandling">
            <EventHandlingDemo />
          </Tab.Pane>
          <Tab.Pane eventKey="renderCommit">
            <RenderAndCommitDemo />
          </Tab.Pane>
          <Tab.Pane eventKey="snapshot">
            <SnapshotDemo />
          </Tab.Pane>
        </Tab.Content>
      </Container>
    </Tab.Container>
  );
}

export default App;
