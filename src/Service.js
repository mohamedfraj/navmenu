
import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Service extends Component {
    render() {
        return (
            <div>
                <h1>Service</h1>
                <Link to='/service/hello'>hello</Link>
            </div>
        );
    }
}

export default Service;
