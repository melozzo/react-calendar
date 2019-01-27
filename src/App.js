import React, { Component } from 'react';
import './App.css';
import Calendar from './containers/Calendar/calendar'
import { Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      
        <div className="App">
            <Route  path="/" exact component={Calendar}/>
           
        </div>
    
    );
  }
}

export default App;
