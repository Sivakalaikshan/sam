import {useState, useEffect} from "react";
import RegisterService from "../Service/Register.Service";
import { Link } from "react-router-dom";

const RegistrationList = () => {
  const [register, setRegister] = useState([])
  useEffect(() => {
     inits();
  },[])
  
   const inits=()=>{
    RegisterService.listAll().then((response) =>{
      setRegister(response.data)
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
   }

  const handleDelete = id =>{
    RegisterService.delete(id)
    .then(response =>{
        console.log('Registration deleted successfully', response.data);
        inits();
    })
    .catch(error=>{
        console.log('Somthing went wrong', error);
    })
  }

  return (
    <div  className="container">
    <h2 className="text-center">List Vehicle Registration</h2>
    <hr/>
    <Link to="/add" className="btn btn-primary mb-2">Add Registraion</Link>
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
        <th>Owner First Name</th>
        <th>Owner Last Name</th>
        <th>Owner Licence Number</th>
        <th>Vehicle Class</th>
        <th>Number Plate</th>
        <th>Plate Type</th>
        <th>Make</th>
        <th>Vehicle Model</th>
        <th>Make Year</th>
        <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          register.map(
            register =>
            <tr key={register.id}>
              <td>{register.fname}</td>
              <td>{register.lname}</td>
              <td>{register.licence}</td>
              <td>{register.type}</td>
              <td>{register.no_plate}</td>
              <td>{register.plate_type}</td>
              <td>{register.make}</td>
              <td>{register.model}</td>
              <td>{register.make_year}</td>
              <td>
              <Link className="btn btn-info ml-2" to={'/update/'+register.id}>Update</Link>
              <button className="btn btn-danger ml-2" onClick={(event)=>{
                        handleDelete(register.id)
                    }}>Delete</button>
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
    </div>
  )
}
export default RegistrationList;
