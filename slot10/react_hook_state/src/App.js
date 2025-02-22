import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TextBox from './components/TextBox';
import ProductList from './components/ProductList';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
    <div className="">
      <Counter />
      <br/>
      <TextBox />
      <br/>
      <ProductList />
      <br/>
      <SearchFilter />
    </div>
  );
}

export default App;
