import React, { Component } from 'react';
import './App.css';
import Calendar from './containers/Calendar/calendar'
import { Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      
        <div style={{display:'flex'}} >
            <Calendar></Calendar>
           
            </div>
    
    );
  }
}

export default App;
