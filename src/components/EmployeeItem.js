import '../css/EmployeeItem.css'
import { FaTimes } from 'react-icons/fa'

const EmployeeItem = ({employee, deleteClicked, toggleEmployee}) => {
    return (
        <div className={`employee ${employee.active?'active':''}`} onDoubleClick={()=>toggleEmployee(employee.id)}>
           <h3>{employee.name} <FaTimes style={{color: 'red'}} onClick={()=>deleteClicked(employee.id)}></FaTimes></h3>
           <p>{employee.email}</p> 
        </div>
    )
}

export default EmployeeItem
