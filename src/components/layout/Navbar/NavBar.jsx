import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { HashRouter as BrowserRouter, Link, NavLink, Redirect, Route, Switch} from 'react-router-dom'
import './Navbar.css';
import image from './Logo.png';
import styled from 'styled-components';
import Home from '../../Home/Home';
import Data from '../../Data/Data';

const Logo = styled.img`  
  width: 122px;
  margin-right: 0.5em;
  margin-left: 1em;
`;

export default class NavBar extends Component{
    render(){
        return(
            <div>
            <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">                        
                <a className="navbar-brand ml-5" href="">
                    <Logo src={image} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mr-5" id="navbarNavAltMarkup">                                                  
                    <div className="navbar-nav ml-auto">
                        <Nav.Link as={NavLink} className="nav-item" to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} className="nav-item" to="/Data">Data</Nav.Link>
                        <Nav.Link as={NavLink} className="nav-item" to="/Contact">Contact</Nav.Link>                                                
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Data' component={Data}/>
                <Redirect from="/" to="/Data"/>
            </Switch>
            </BrowserRouter>

               
            
        </div>
        )
    }
}