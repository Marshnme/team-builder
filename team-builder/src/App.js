import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Member from "./components/Member"
import Form from "./components/Form"

function App() {

  const [members, setMember] = useState([{
    id:0,
    name: "Nicole",
    email: "Nicole@email.com",
    role: "Full-Stack Web Dev"

  }]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMember([...members, newMember])
  }
  return (
    <div className="App">
      <header className="App-header">
        <Form addNewMember = {addNewMember}></Form>
        <Member member={members}></Member>
      </header>
    </div>
  );
}

export default App;
