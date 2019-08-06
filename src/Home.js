import React, { Component } from 'react';
import { Link } from "react-router-dom"
class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to='/b2b'>b2b</Link>
                <Link to='/b2c'>b2c</Link>
            </div>
        );
    }
}

export default Home;
