import React,{useEffect, useState} from 'react'
import EmployeeService from '../services/EmployeeService'

const ListEmployee = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
      EmployeeService.listAll().then((response) =>{
        setEmployees(response.data)
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      })
    },[])
  return (
    <div  className="container">
    <h2 className="text-center">List Employees</h2>
    <table className="table table-bordered table-striped">
      <thead>
        <th>Employee ID</th>
        <th>Employee Firstname</th>
        <th>Employee Lastname</th>
        <th>City</th>
        <th>Phone number</th>
        <th>Salary</th>
      </thead>
      <tbody>
        {
          employees.map(
            employee =>
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.fname}</td>
              <td>{employee.lname}</td>
              <td>{employee.city}</td>
              <td>{employee.phone}</td>
              <td>{employee.salary}</td>
            </tr>
          )
        }
      </tbody>
    </table>
    </div>
  )
}

export default ListEmployee

