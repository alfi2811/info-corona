import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/layout/Navbar/NavBar';

import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';


class App extends Component {
  render(){
    return (
      <NavBar />
    )
  }
}

export default App;
