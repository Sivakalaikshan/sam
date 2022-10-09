import axios from "axios";
import { useState } from "react";
import "../components/registration.css";

function Register()
{
    //const [id, setId] = useState("");
    const [firstname, setFname] = useState("");
    const [lastname, setLname] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [salary, setSalary] = useState("");

    async function handleSubmit(event){
        event.preventDefault();
        try{
            await axios.post("http://localhost:8080/add",
            {
               // id: id,
                fname: firstname,
                lname: lastname,
                city: city,
                phone: phone,
                salary: salary
            });

            alert("User Registration Successfully");
            setFname("");
            setLname("");
            setCity("");
            setPhone("");
            setSalary("");
        }
        catch(err)
        {
            alert("User Registration Failed");
        }
    }
    return(
        <div className="register-container">
            <form className="register-form" method="add" onSubmit={handleSubmit}>
                <br/>
                <h1>Register</h1>
                <p>Fill in the Information below</p>

                <input type="text" name="firstname" placeholder="Firstname"
                 onChange={(event)=>{
                    setFname(event.target.value);
                 }}
                 />

                <input type="text" name="lastname" placeholder="Lastname"
                 onChange={(event)=>{
                    setLname(event.target.value);
                 }}
                 />

                <input type="text" name="city" placeholder="City"
                 onChange={(event)=>{
                    setCity(event.target.value);
                 }}
                 />

                <input type="text" name="phone" placeholder="Phone Number"
                 onChange={(event)=>{
                    setPhone(event.target.value);
                 }}
                 />

                <input type="text" name="salary" placeholder="Salary"
                 onChange={(event)=>{
                    setSalary(event.target.value);
                 }}
                 />

                <button type="submit">Register</button>
            
            </form>    
        </div>
    )
}

export default Register;