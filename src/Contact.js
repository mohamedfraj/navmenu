import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <Link to="/Contact/PhoneNumber">PhoneNumber</Link>
            </div>
        );
    }
}

export default Contact;
