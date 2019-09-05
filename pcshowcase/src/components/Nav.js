import React from 'react';
import '../App.scss';
import {Link} from 'react-router-dom';
import '../js/main';

function Nav() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <Link to="/"><div className="navbar-brand">Pc ShowCase | Quality Products</div></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to="/"><div className="middle"><div className="nav-item nav-link">HOME</div></div></Link>
                <Link to="/store"><div className="middle"><div className="nav-item nav-link">STORE</div></div></Link>
                <Link to="/contact"><div className="middle"><div className="nav-item nav-link">CONTACT US</div></div></Link>
            </div>
        </div>
        </nav>

    );
}

export default Nav;