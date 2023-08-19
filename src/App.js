import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import PersonTable from './PersonTable';
import MonthCheckBox from './MonthCheckBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "react-bootstrap/Table";
import FormCheck from "react-bootstrap/FormCheck"
import { Container } from 'react-bootstrap';
import moment from "moment";

function App() {
  useEffect(() => {
    fetch("https://randomuser.me/api?results=10")
      .then((res) => res.json())
      .then((json) => json.results)
      .then((people) => people.map((person) => person.name.first))
      .then((names) => console.log(names));
  }, []);

  return (
    
      <PersonTable></PersonTable>
      
   
  );
}

export default App;
