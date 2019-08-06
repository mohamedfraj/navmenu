import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from "./Home";
import Servise from "./Service";
import Contact from "./Contact";
import NavMenu from "./NavMenu";



class Routes extends Component {
    render() {
        return (
            <div>
                <NavMenu/>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/service' component={Servise}></Route>
                <Route exact path='/Contact' component={Contact}></Route>
                <Route path='/b2b' render={() => "Business 2 Business"}></Route>
                <Route path='/b2c' render={() => "Business 2 Customer"}></Route>
                <Route path='/service/hello' render={()=><h1>Hello</h1>}></Route>
                <Route path="/Contact/PhoneNumber" render={()=><h1>97154862</h1>}></Route>
            </div>
        );
    }
}

export default Routes;
