import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './index.scss';

class Header extends Component {
    render() {
        return (
            <header className="header__component-container -container">
                <div className="header__site-branding -site-text-size">
                    <img alt={''} className="logo" src={'/images/logo512.png'} /> 
                    <nav className="header__site-nav">
                        <Link to={`/`}>Home</Link>
                        <Link to={`/account`}>Account</Link>
                        <Link to={`/login`}>Login </Link>
                        <Link to={`/register`}>Register</Link>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
