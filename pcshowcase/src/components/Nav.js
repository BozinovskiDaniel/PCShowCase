import React from 'react';
import '../App.scss';
import {Link} from 'react-router-dom';
import '../js/main';

function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <Link to="/"><div className="navbar-brand"><img src={require('../images/logonav.png')} width="135px" height="65px" alt="logo" /></div></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link to="/"><div className="nav-link" style={{color: 'white'}}>Home<span className="sr-only">(current)</span></div></Link>
                </li>
                <li className="nav-item">
                    <Link to="/store"><div className="nav-link">Store</div></Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact"><div className="nav-link">Contact Us</div></Link>
                </li>
            </ul>
        </div>
        </nav>

    );
}

export default Nav;