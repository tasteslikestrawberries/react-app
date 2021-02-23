
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//components
import NavigationBar from './components/NavigationBar.js';
import Home from './components/Home';
import MasterForm from './components/Form';
import Tablica from './components/Table';

//stylesheet
import "./App.css"


function App () {

  return (
     

      <Router>  
       		<NavigationBar/>  
        
		<Switch>
	
            <Route path="/form"> 
            	<MasterForm/>
            </Route >

			<Route path="/table"> 
            	<Tablica/>
            </Route >

		
			<Route>
			    <Home/>
             </Route>
           
        </Switch>

      </Router>

  
  )
}



  export default App;



  /* - home is at the end of the router and IN switch so if no path (previous links) is loaded,
   it loads the one without defined path (home)
   - without switch router would load every component with or without path, but with switch 
   just the 1st one loads and the other ones don't  
*/