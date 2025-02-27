import logo from './logo.svg';
import './App.css';
import ValidatedInput from './components/ValidatedInput';
import ValidateEmailPassword from './components/ValidateEmailPassword';
import ValidatedFormInput from './components/ValidateFormInput';
import { Form, Button, Container, Card } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
          <ValidatedInput />
          <ValidateEmailPassword />
          <ValidatedFormInput />
      </Container>
    </div>
  );
}

export default App;
