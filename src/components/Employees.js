import EmployeeItem from "./EmployeeItem"

const Employees = ({employees, deleteClicked, toggleEmployee}) => {
    return (
        employees.map((employee)=><EmployeeItem key={employee.id} employee={employee} deleteClicked={deleteClicked} toggleEmployee={toggleEmployee}/>)
    )
}


export default Employees
