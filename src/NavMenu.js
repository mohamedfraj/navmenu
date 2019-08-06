import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";


class NavMenu extends Component {
    render() {
        return (
            <Container >
                <ul className='navbar'>
                    <li className="home"><NavLink activeClassName="active" exact to='/'>Home</NavLink></li>
                    <li className="service"><NavLink to='/service'>service</NavLink></li>
                    <li className="contact"><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </Container>
        );
    }
}

export default NavMenu;
