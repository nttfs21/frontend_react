import { useState } from "react";
const AddEmployee = ({addEmployee}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [active, setActive] = useState(false);

    const formSubmitted = (event)=>{
        event.preventDefault();
        //validations - if any apply here
        addEmployee({
            name, email, active
        })

        setName("");
        setEmail("");
        setActive(false);

    }

    return (
        <form className="employeeForm" onSubmit={formSubmitted}>
            <div className="form-control">
                <label>Name</label>
                <input type="text" name="employeeName" placeholder="Enter name" value={name} onChange={(event)=>setName(event.target.value)}></input>
            </div>
            <div className="form-control"> 
                <label>Email</label>
                <input type="text" name="employeeEmail" placeholder="Enter email" value={email} onChange={(event)=>setEmail(event.target.value)}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Active</label>
                <input type="checkbox" name="employeeActive" value={active} checked={active} onChange={(event)=>setActive(event.currentTarget.checked)}></input>
            </div>
            <input className="btn btn-block" type="submit" value="Add Employee"></input>
        </form>
    )
}

export default AddEmployee
