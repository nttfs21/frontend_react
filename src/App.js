import ClassDemo from "./components/ClassDemo";
import Employees from "./components/Employees";
import Header from "./components/Header";
import { useState } from 'react';
import { useEffect } from "react";
import AddEmployee from "./components/AddEmployee";

const httpHeaders = {
  'Content-type': 'application/json'
};

function App() {

  //State is immutable, and we need setter to alter the state
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async() =>{
      setEmployees(await getEmployeesFromServer());
    } 
    fetchEmployees();
  },[]);

  const getEmployeesFromServer = async()=>{
      let response = await fetch('http://localhost:5000/employees');
      let employeeData = await response.json();
      return employeeData;
  }

  const onDeleteClicked = async (id) => {
    let response = await fetch(`http://localhost:5000/employees/${id}`,{
      method: 'DELETE'
    })
    console.log(response);
    setEmployees(employees.filter((employee)=>employee.id !== id));
  }

  const onAddEmployee = async (employee) => {
    let response = await fetch('http://localhost:5000/employees',{
      method: 'POST',
      body: JSON.stringify(employee),
      headers: httpHeaders
    });
    let employeeData = await response.json()
    setEmployees([...employees, employeeData]);
  }

  const toggleForm = ()=>{
    setShowForm(!showForm);
  }

  const onToggleEmployee = async(id) =>{
    let employee = employees.filter((employee=>employee.id == id))[0];
    employee.active = !employee.active;
    let response = await fetch(`http://localhost:5000/employees/${id}`,{
      method:'PUT',
      body: JSON.stringify(employee),
      headers: httpHeaders
    })
    let employeeData = await response.json();
    setEmployees(employees.map((employee)=>
      employee.id == id?employeeData:employee));
  }

  return (
    <div className="container">
      <Header formVisible={showForm} buttonClicked={toggleForm}/>
      {showForm && <AddEmployee addEmployee={onAddEmployee}/>}
      <Employees employees={employees} deleteClicked={onDeleteClicked} toggleEmployee={onToggleEmployee}/>
    </div>
  );
}

export default App;
