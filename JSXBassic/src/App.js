import './App.css';
import AllIsTeenager from './components/AllIsTeenager';
import AverageAgeOccupation from './components/AverageAgeOccupation';
import FirstIsTeenager from './components/FirstIsTeenager';
import GroupByOccupation from './components/GroupByOccupation';
import HelloReact from './components/HelloReact';
import NamePerson from './components/NamePerson';
import OldAndYoung from './components/OldAndYoung';
import PeopleList from './components/PeopleList';
import PeopleSort from './components/PeopleSort';
import TablePeople from './components/TablePeople';
function App() {
  var people = [
    { name: 'Jack', age: 50, job: 'Developer' },
    { name: 'Michael', age: 19, job: 'Doctor' },
    { name: 'John', age: 40, job: 'Teacher' },
    { name: 'Ann', age: 19, job: 'Lawyer' },
    { name: 'Elisabeth', age: 16, job: 'Nurse' },
    { name: 'Wick', age: 29, job: 'Police' },
    { name: 'Foker', age: 30, job: 'Journalist' },
    { name: 'PHUC', age: 29, job: 'Chef' },
    { name: 'Loan', age: 29, job: 'Doctor' },
    { name: 'Lam', age: 27, job: 'Journalist' },
    { name: 'Hoan', age: 22, job: 'Chef' },
  ]


  return (
    <div className="App">
      <HelloReact/>
      <NamePerson/>
      <PeopleList people={people}/>
      <TablePeople people={people}/>
      <FirstIsTeenager people={people} />
      <AllIsTeenager people={people} />
      <PeopleSort people={people}/>
      <GroupByOccupation people={people}/>
      <OldAndYoung people={people}/>
      <AverageAgeOccupation people={people}/>
    </div>
  );
}

export default App;
