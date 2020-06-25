import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomepageComponent from './component/homepage/homepgaecomponent';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import storeCombineReducers from './store/reducer/combinedReducers'
import UserHeaderComponent from './component/user/dashboardlayout/userHeaderComponent';
class App extends React.Component
{

    constructor(props)
    {
        super(props)

    }

    render()
    {

      return (
        <Provider store= {createStore(storeCombineReducers)}>
        <React.Fragment>
        
        <Router>  
        <Switch>
          <Route path ='/user' component={UserHeaderComponent}>
          
          </Route>
          <Route path='/' component={HomepageComponent} exact>
            
          </Route>
        </Switch>
        </Router> 
        </React.Fragment>
        </Provider>
      )

    }

}

export default App;
