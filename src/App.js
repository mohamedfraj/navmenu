import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Route'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>   
          <Routes/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;