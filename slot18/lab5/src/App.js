import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz';
import { QuizProvider } from './components/QuizContext';
function App() {
  const quizData = [
    {
      question: 'What is ReactJS?',
      answers: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
      correctAnswer: 'A JavaScript library for building user interfaces'
    },
    {
      question: 'What is JSX?',
      answers: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
      correctAnswer: 'A syntax extension for JavaScript'
    }
  ];
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/news">News</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<QuizProvider>
          <Quiz quizData={quizData} />
        </QuizProvider>} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;