import React from 'react'
import '../../App.css'
import About from '../../Screens/About';
import { FaHome, FaSearch, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo3 from '../../images/header/logo3.png'

function Navbar() {
    return (
        <div>
            <div>
                <div className="main-content">
                    <div className="logo-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="logo-holder">
                                        <div className="logo">
                                            <NavLink to="/">
                                                <img
                                                    style={{ backgroundColor: 'white' }}
                                                    src={logo3} alt="Madhya Pradesh" width="70" />
                                            </NavLink>
                                        </div>
                                        <div className="logo-title">
                                            <h1>जबलपुर विकास प्राधिकरण</h1>
                                            <p>हमारा प्रयास--निरंतर विकास</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="navigation">
                <div className="container">
                    <div className="row" style={{ justifyContent: 'space-between' }}>
                        <div className="col-lg-15">
                            <nav className="navbar navbar-expand-lg navbar-light justify-content-between flex-wrap p-0">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="fa fa-bars"><FaBars color='white' /></span>
                                </button>
                                <div className="collapse navbar-collapse" id="menu">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <NavLink exact to="/" className="nav-link" activeClassName="active">
                                                <FaHome size={18} /> Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">About JDA</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <NavLink to="/about" className="dropdown-item">About JDA</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/board-member" className="dropdown-item">Board Member</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/organizational-structure" className="dropdown-item">Organizational Structure</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/gallery" className="dropdown-item">Gallery</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Town Planning</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <NavLink to="/master-plan-2021" className="dropdown-item">Master Plan 2021</NavLink>
                                                </li>
                                                <li className="dropdown-submenu">
                                                    <a href="#" className="dropdown-item dropdown-toggle">Schemes</a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <NavLink to="/schemes/transferred" className="dropdown-item">Transferred</NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/schemes/running" className="dropdown-item">Running</NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/schemes/upcoming" className="dropdown-item">Upcoming</NavLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Notice Board</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <a href="#" className="dropdown-item dropdown-toggle">Acts/Rules/Circulars</a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <NavLink to="/acts/1973-act" className="dropdown-item">1973 Act</NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/acts/2013-rules" className="dropdown-item">व्ययन नियम 2013</NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/acts/2018-rules" className="dropdown-item">व्ययन नियम 2018</NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/acts/rera-act" className="dropdown-item">RERA Act</NavLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <NavLink to="/important-notices" className="dropdown-item">Important Notices</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Citizen Services</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <NavLink to="/download-formats" className="dropdown-item">Download Formats</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/time-limits" className="dropdown-item">Time Limits</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Properties</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <NavLink to="/properties-for-sale" className="dropdown-item">Properties for Sale</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/express-your-interest" className="dropdown-item">Express Your Interest</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Online Services</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <NavLink to="/pay-your-dues" className="dropdown-item">Pay Your Dues</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/online-properties-for-sale" className="dropdown-item">Properties for Sale</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/tenders" className="dropdown-item">Tenders</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-2 d-flex justify-content-end abs_xs">
                            <div className="searchbox">
                                <input className="form-control" placeholder="Search" aria-label="Search" type="text" />
                                <button className="btn btn-sm" type="button" style={{ marginTop: '6px' }}>
                                    <FaSearch size={18} style={{ marginLeft: '-2' }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
