import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import UserProfile from './components/UserProfile';
import NameList from './components/NameList';
import StudentCard from './components/StudentCard';

function App() {
  const userData = { name: "nguyennvde181082@fpt.edu.vn", age: 20 };
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
  const students = [
    { name: "Doan Xuan Son", age: 20, avatar: "/images/student1.jpg" },
    { name: "Duong Cong Ming", age: 20, avatar: "/images/student2.jpg" },
    { name: "Doan Nam Son", age: 20, avatar: "/images/student3.jpg" },
  ];

  return (
    <div>
      <Welcome name = "nguyennvde181082@fpt.edu.vn"/>
      <UserProfile user={userData}/>
      <NameList names={namesList} />
      <StudentCard students={students}/>
    </div>
  );
}

export default App;
