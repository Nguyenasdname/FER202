import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventHandlingDemo from './components/EventHandlingDemo';
import RenderAndCommitDemo from './components/RenderAndCommitDemo';
import RenderCommitDemo from './components/RenderCommitDemo';



function App() {
  return (
    <div className="App">
      <EventHandlingDemo />
      <RenderAndCommitDemo />
      <RenderCommitDemo />
    </div>
  );
}

export default App;
