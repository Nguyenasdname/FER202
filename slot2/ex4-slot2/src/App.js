import logo from './logo.svg';
import './App.css';
import CompanyAfter1987 from './components/CompanyAfter1987';
import CompanyRetail from './components/CompanyRetail';
import AllCompany from './components/AllCompany';
import CompanySort from './components/CompanySort';
import DescendingAge from './components/DescendingAge';
import SumAgeReduce from './components/SumAgeReduce';
import AllIsTeenager from './components/AllIsTeenager';
import FirstIsTeenager from './components/FirstIsTeenager';
import AnyIsTeenager from './components/AnyIsTeenager';
import EveryIsTeenager from './components/EveryIsTeenager';
import Accumulator from './components/Accumulator';
import HelloReact from './components/HelloReact';
import ReactLogo from './components/ReactLogo';
import NewObject from './components/NewObject';
import ShowResult from './components/AddValueToArray';
import DestructuringStreet from './components/DestructuringStreet';
import ReturnIncrementer from './components/CreateIncrementer';
import ReturnObject from './components/ParseQueryParams';
import ThisIsJSX from './components/ThisIsJSX';
import DisplayCourse from './components/DisplayCourse';
import NavBar from './components/NavBar';
function App() {
  var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
  ]

  var array = [1, 2, 3, 4]

  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };

  return (
    <div className="App">
      <h1>Exercises</h1>
      <h1>1.</h1>
      <HelloReact />
      <h1>2.</h1>
      <ReactLogo/>
      <h1>3.</h1>
      <NavBar/>
      <h1>4.</h1>
      <ThisIsJSX/>
      <h2>5.</h2>
      <DisplayCourse/>
      <h1>Using ES6 and JSX</h1>
      <h1>1.</h1>
      <FirstIsTeenager people={people} />
      <br></br>
      <AllIsTeenager people={people} />
      <br></br>
      <EveryIsTeenager people={people} />
      <br></br>
      <AnyIsTeenager people={people} />
      <br></br>
      <h1>2.</h1>
      <Accumulator array={array} />
      <br></br>
      <h1>3.</h1>
      <AllCompany companies={companies} />
      <br></br>
      <CompanyAfter1987 companies={companies} />
      <br></br>
      <CompanyRetail companies={companies} />
      <br></br>
      <CompanySort companies={companies} />
      <br></br>
      <DescendingAge ages={ages} />
      <br></br>
      <SumAgeReduce ages={ages} />
      <br></br>
      <NewObject companies={companies} />
      <br></br>
      <ShowResult />
      <br></br>
      <DestructuringStreet person={person} />
      <br></br>
      <ReturnIncrementer/>
      <br></br>
      <ReturnObject/>
    </div>
  );
}

export default App;
