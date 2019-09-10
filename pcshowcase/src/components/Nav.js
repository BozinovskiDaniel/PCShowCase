import React from 'react';
import '../App.scss';
import {Link} from 'react-router-dom';
import '../js/main';

function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <Link to="/"><div className="navbar-brand"><img src={require('../images/logonav.png')} width="105px" height="45px" alt="logo" /></div></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav navbar-nav navbar-center">
                <li className="nav-item active">
                    <Link to="/" style={{ textDecoration: 'none' }}><div className="nav-link"><div className="ilinks active">Home</div><span className="sr-only">(current)</span></div></Link>
                </li>
                <li className="nav-item">
                    <Link to="/store" style={{ textDecoration: 'none' }}><div className="nav-link"><div className="ilinks notActive">Products</div></div></Link>
                </li>
                <li className="nav-item">
                    <Link to="/history" style={{ textDecoration: 'none' }}><div className="nav-link"><div className="ilinks notActive">History</div></div></Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" style={{ textDecoration: 'none' }}><div className="nav-link"><div className="ilinks notActive">Contact</div></div></Link>
                </li>
            </ul>

            <ul class="nav navbar-nav ml-auto">
                <li><i class="fa fa-search fa-1x"></i></li>
                <li><i class="fa fa-shopping-cart fa-1x" aria-hidden="true"></i></li>
            </ul>

        </div>
        </nav>

    );
}

export default Nav;