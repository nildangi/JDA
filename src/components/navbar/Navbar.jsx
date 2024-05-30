import React from 'react'
// import '../../App.css'
// import '../../assets_uarban/css/main.css'
// import '../../assets_uarban/css/animate.css'
// import '../../assets_uarban/css/bootstrap.min.css'


import { FaHome, FaSearch, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo3 from '../../images/header/logo3.png'
import { Nav } from 'react-bootstrap';

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
                                            <a href="index.html">
                                                <img
                                                    style={{ backgroundColor: 'white' }}
                                                    src={logo3} alt="Madhya Pradesh" width="70" />
                                            </a>
                                        </div>
                                        <div className="logo-title">
                                            {/* <h1> Jabalpur Development Authority </h1> */}
                                            <h1>जबलपुर विकास प्राधिकरण</h1>
                                            {/* <p>Jabalpur, Madhya Pradesh</p> */}
                                            <p>हमारा प्रयास--निरंतर विकास</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="navigation" >
                <div className="container">
                    <div className="row" style={{ justifyContent: 'space-between'}}>
                        <div className="col-lg-15">
                            <nav className="navbar navbar-expand-lg navbar-light justify-content-between flex-wrap p-0">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="fa fa-bars"><FaBars color='white' /></span>
                                </button>
                                <div className="collapse navbar-collapse" id="menu">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="active"><NavLink to="/" href="index.html">
                                            <em className="it-home">
                                                <li className="home"><a to="/" target="_blank" ></a></li>
                                            </em><FaHome size={18} /> Home </NavLink></li>
                                        <li className="nav-item dropdown">
                                            <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">About JDA</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <NavLink to="/about" >About JDA</NavLink>
                                                    <NavLink to="/BoardMember">Board Member</NavLink>
                                                    <NavLink to="/OrganizationalStructure">Organizational Structure</NavLink>
                                                    <NavLink to="/Gallery">Gallery</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#" className=" dropdown-toggle">Town Planning</a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <NavLink to="/MasterPlan">Master Plan 2021</NavLink>
                                                </li>
                                                <li class="dropdown-submenu">
                                                    <a href="#" className="dropdown-toggle">Schemes</a>
                                                    <ul class="dropdown-menu">
                                                        <li><NavLink to="/transferred">Transferred</NavLink></li>
                                                        <li><NavLink to="/running"> Running</NavLink></li>
                                                        <li><NavLink to="/upcoming"> Upcoming</NavLink></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#" className=" dropdown-toggle">Notice Board</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <a href="#" className="dropdown-toggle">Acts/Rules/Circulars</a>
                                                    <ul class="dropdown-menu">
                                                        <li><NavLink to="/Act1973">1973 Act</NavLink></li>
                                                        <li><NavLink to="/Niyam2013"> व्ययन नियम 2013</NavLink></li>
                                                        <li><NavLink to="/Niyam2018"> व्ययन नियम 2018</NavLink></li>
                                                        <li><NavLink to="/RERAAct"> RERA Act</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li >
                                                    <NavLink to="/importantnotices">Important Notices</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#" className="dropdown-toggle">Citizen Services</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <NavLink to="/DownloadFormate">Download Formats</NavLink>
                                                    <NavLink to="/timelimits">Time Limits</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#" className="dropdown-toggle">Properties</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <NavLink to="/PropertiesForSale">Properties for Sale</NavLink>
                                                    <NavLink to="/Expressyourinterest">Express Your Interest</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#" className="dropdown-toggle">Online Services</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <NavLink to="/PayYourDue">Pay Your Dues</NavLink>
                                                    <NavLink to="/propertiesforsale">Properties for Sale</NavLink>
                                                    <NavLink to="/tenders">Tenders</NavLink>
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
                                    <i className="" ><FaSearch size={18} style={{ marginLeft: '-2' }} /></i>
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