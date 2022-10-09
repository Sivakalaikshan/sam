import {  useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router"
import RegisterService from "../Service/Register.Service";

const AddRegistration = () =>{
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [licence, setLicence] = useState('');
    const [type, setType] = useState('');
    const [no_plate, setNo_plate] = useState('');
    const [plate_type, setPlate_type] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [make_year, setMake_year] = useState('');

    const initialvalue = {fname: "",lname:"",licence:"",type:"",no_plate:"",plate_type:"",make:"",model:"", make_year:""}
    const [formvalue, setFormvalue] = useState(initialvalue)
    const [formerror, setFormerror] = useState({})
    const [issubmit, setIssubmit] = useState(false)

    const histroy= useHistory();
    const {id} = useParams();

   const handleChange = (e) =>{
        const {name , value} = e.target;
        setFormvalue({...formvalue, name:value});

    };

    
     const validate = (values) =>{
        const errors = {}
        const old = /^[0-9]{2,3}\s-\s[0-9]{4}$/i;
        const old1 = /^[0-9]{2,3}-[0-9]{4}$/i;
        const modern2 = /^[A-Z]{2}\s[A-Z]{2}-[0-9]{4}$/i;
        const modern3 = /^[A-Z]{2}-[0-9]{4}$/i;
        const vintage1 = /^[0-9]{2}\s \ශ්‍රී \s[0-9]{4}$/i;
        if(!values.fname){
            errors.fname = "First name is required";
        }
        if(!values.lname){
            errors.lname = "Last name is required";
        }
        if(!values.licence){
            errors.licence = "Licence number is required";
        }
        if(!values.no_plate){
            errors.no_plate = "Number plate is required";
        }
        if(!values.plate_type){
            errors.plate_type = "Number type is required";
        }
        if(!values.make){
            errors.make = "Vehicle brand is required";
        }
        if(!values.model){
            errors.model = "Vehicle model is required";
        }
        if(!values.make_year){
            errors.make_year = "Made Year is required";
        }
        if(!values.fname){
            errors.fname = "First name is required";
        }
        return errors;
     };

     useEffect(()=>{
        console.log(formerror);
        if(Object.keys(formerror).length === 0 && issubmit){
            console.log(formvalue)
        }
     },[formerror])

    async function handleSubmit(event){
        event.preventDefault();
        setFormerror(validate(formvalue));
        setIssubmit(true);
        const register = {fname, lname, licence, type, no_plate, plate_type, make, model, make_year,id};
        
        if(id){
            RegisterService.update(register)
            .then(responce =>{
                console.log('Employee Data Updated Successfully', responce.data);
                histroy.push('/')
            })
            .catch(error=>{
                console.log('Something went wrong!', error);
            });
        }else{
        try{
            await axios.post("http://localhost:8080/add",
            {
                fname: fname,
                lname: lname,
                licence: licence,
                type: type,
                no_plate: no_plate,
                plate_type: plate_type,
                make: make,
                model: model,
                make_year: make_year
            });

            alert("User Registration Successfully");
            setFname("");
            setLname("");
            setLicence("");
            setType("");
            setNo_plate("");
            setPlate_type("");
            setMake("");
            setModel("");
            setMake_year("");
            histroy.push("/")
            
        }
        catch(err)
        {
            alert("Vehicle Registration Failed");
        }

        RegisterService.create(register)
        .then(response => {
            console.log('Employee data added successfully', response.data);
            navigate('/');
        })
        .catch(error => {
            console.log('Something went wrong', error);
        });
    }
}
useEffect(() =>{
    if(id){
        RegisterService.get(id)
        .then(register =>{
            setFname(register.data.fname);
            setLname(register.data.lname);
            setLicence(register.data.licence);
            setNo_plate(register.data.no_plate);
            setType(register.data.type);
            setPlate_type(register.data.plate_type);
            setMake(register.data.make);
            setModel(register.data.model);
            setMake_year(register.data.make_year);
            

        })
        .catch(error =>{
            console.log('Something went wrong', error);
        });
    }
},[])
return (
<div className="container">
<h1>Add New Employee</h1>
<hr/>
<form method="add" onSubmit={handleSubmit}>
    <div className="mb-3">
                <input type="text" name="firstname" placeholder="Enter Your Firstname" className="form-control" //value={formvalue.fname}
                 onChange={(event)=>{
                    setFname(event.target.value);
                 }}
                 />         
    </div>
    <p>{formerror.fname}</p>
    <div className="mb-3">
                <input type="text" name="lastname" placeholder="Enter your Lastname" className="form-control" //value={formvalue.lname}
                 onChange={(event)=>{
                    setLname(event.target.value);
                 }}
                 />
    </div>
    <p>{formerror.lname}</p>
    <div className="mb-3">
                 <input type="text" name="licence" placeholder="Your Licence Number" className="form-control" //value={formvalue.licence}
                 onChange={(event)=>{
                    setLicence(event.target.value);
                 }}
                 />
    </div>
    <p>{formerror.licence}</p>
    <div className="mb-3">
                <select type="text" name="type" className="form-select form-select-sm" /*value={formvalue.type}*/
                 onChange={(event)=>{
                    setType(event.target.value);
                 }}
                 >
                    <option value=".">Select Your Vehicle Class</option>
                    <option value="car">Car</option>
                    <option value="bike">Motor Bike</option>
                    <option value="Three-Wheeler">Three-Wheeler</option>
                    <option value="Lorry">Lorry</option>
                 </select>
    </div>
    <p>{formerror.type}</p>
    <div className="mb-3">
                 <input type="text" name="no_plate" placeholder="Your Number plate" className="form-control" //value={formvalue.no_plate}
                 onChange={(event)=>{
                    setNo_plate(event.target.value);
                    //validate();
                 }}
                 />
    </div>
    <p>{formerror.no_plate}</p>
    <div className="mb-3">
                <label type="text" name="plate_type" placeholder="Plate Type" className="form-control" //value={formvalue.plate_type}
                 onChange={(event)=>{
                    setPlate_type(event.target.value);
                 }}
                 />
    </div>
    
    <div className="mb-3">
                 <input type="text" name="make" placeholder="Your Vehicle Made" className="form-control" //value={formvalue.make}
                 onChange={(event)=>{
                    setMake(event.target.value);
                 }}
                 />
    </div>
    <p>{formerror.make}</p>
    <div className="mb-3">
                 <input type="text" name="model" placeholder="Vehicle Model" className="form-control" //value={formvalue.model}
                 onChange={(event)=>{
                    setModel(event.target.value);
                 }}
                 />
    </div>
    <p>{formerror.model}</p>
    <div className="mb-3">
                 <input type="text" name="make_year" placeholder="Vehicle Made Year" className="form-control" //value={formvalue.make_year}
                 onChange={(event)=>{
                    setMake_year(event.target.value);
                 }}
                 />
    </div>
    <p>{formerror.make_year}</p>
    <div>
        <button className="btn btn-primary" type="submit" onClick={handleChange} >Save</button>
    </div>
</form>
<hr/>
<Link to="/">Back to List</Link>
</div>
);
}
export default AddRegistration