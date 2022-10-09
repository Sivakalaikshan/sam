import { BrowserRouter,  Route, Routes } from "react-router-dom";
import RegistrationList from "./component/RegistrationList";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddRegistration from "./component/AddRegistration";

function App () {
  return(
     <BrowserRouter>
       <div>
        <Routes>
        
         
           <Route extract path="/" element={<RegistrationList/>} />
           <Route path="/add" element={<AddRegistration/>} />
           <Route path="/update/:id" element={<AddRegistration/>} />
         
           </Routes>
       </div>
   </BrowserRouter>
   )
  }
  export default App;