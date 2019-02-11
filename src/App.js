import React, { Component } from 'react';
import './App.css';
import Calendar from './containers/Calendar/calendar'
import {Layout } from './components/Layout/Layout'


class App extends Component {
  render() {
    return (
      
        <Layout >
            <Calendar></Calendar>
           
        </Layout>
    
    );
  }
}

export default App;
