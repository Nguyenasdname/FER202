import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import DisplayInfor from './components/DisplayInfor';
import CardFPT from './components/CardFPT';
import CounterApplication from './components/CounterApplication';
import SimpleReact from './components/SimpleReact';
function App() {
  return (
    <div>
      <DisplayInfor />
      <CardFPT />
      <SimpleReact />
      <CounterApplication />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
