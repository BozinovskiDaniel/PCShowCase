import React from 'react';
import '../App.scss';
import {Link} from 'react-router-dom';
import '../js/main';

function Nav() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <Link to="/"><a className="navbar-brand">PC Showcase</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link to="/"><a className="nav-link">HOME<span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/store"><a className="nav-link">STORE</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact"><a className="nav-link">CONTACT US</a></Link>
                </li>
            </ul>
        </div>
        </nav>

    );
}

export default Nav;