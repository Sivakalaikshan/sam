import './App.css';
import { /*BrowserRouter,*/ Route, Switch} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Register from './components/registration';
import ListEmployee from './components/ListEmployee';


function App() {
   const history = useHistory();

   const routeChange = () =>{ 
    let path = '/add'; 
    history.push(path);
   }
   const routeChange1 = () =>{ 
    let path = '/getAll'; 
    history.push(path);
   }
 /* return (
    <div className="App">
    <BrowserRouter>
     <Switch>
      <Route path='/' exact>
        <Register/>
      </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );*/

  return (
    <div className="app flex-row align-items-center">
    <container>
      ...
      <row>
                             
          <form  
            onClick={routeChange}
              >
              <Register/>
            </form>
        
          <form  className="c" onClick={routeChange1}><ListEmployee/></form>
       
      </row>
      ...
    </container>
  </div>
  );

 /* return(
    <div>
      <ListEmployee/>
    </div>
  )*/
}

export default App;
