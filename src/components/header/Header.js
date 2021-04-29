import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-secondary">
                <Link to="/" className="navbar-brand">React</Link>
                <Link to="/form" >Form</Link>
                <Link to="/list" >List</Link>
                <Link to="/todo" >Todo</Link>
                
            </nav>
        );
    }
}

export default Header;