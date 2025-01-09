import logo from './logo.svg';
import './App.css';
import CompanyAfter1987 from './components/CompanyAfter1987';
import CompanyRetail from './components/CompanyRetail';
import AllCompany from './components/Company';
import CompanySort from './components/CompanySort';
import SortAge from './components/DescendingAge';
import SumAgeReduce from './components/Sum';
function App() {
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
        
        <AllCompany companies={companies} />
        <br></br>
        <CompanyAfter1987 companies={companies}/>
        <br></br>
        <CompanyRetail companies={companies}/>
        <br></br>
        <CompanySort companies={companies}/>
        <br></br>
        <SortAge ages={ages}/>
        <br></br>
        <SumAgeReduce ages={ages}/>
    </div>
  );
}

export default App;
