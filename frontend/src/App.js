import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomepageComponent from './component/homepage/homepgaecomponent';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import RegistrationComponent from './component/authcomponent/registrationcomponent';
import LoginComponent from './component/authcomponent/logincomponent';


class App extends React.Component
{

    constructor(props)
    {
        super(props)

    }

    render()
    {

      return (
        <React.Fragment>
        <HomepageComponent/>
        <Router>  
        <Switch>
      
        <Route path = '/auth/register'>  
          <RegistrationComponent open="true"/>
        </Route> 
        <Route path = '/auth/signin'>  
          <LoginComponent open="true"/>
        </Route>  

        </Switch>
        </Router>
        </React.Fragment>
      )

    }

}

export default App;
