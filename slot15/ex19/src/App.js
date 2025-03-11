import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimalList from './components/AnimalList';
import animals from './components/Animal';

function App() {

  return (
    <div>
      <h1 className="text-center mt-4">Animal Information</h1>
      <AnimalList animals={animals} />
    </div>
  );
}

export default App;
