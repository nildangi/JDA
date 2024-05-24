import React from 'react'
import '../../App.css'
import About from '../../Screens/About';
import { FaAngleDoubleRight, FaChevronRight, FaSpinner, FaTwitter, FaFacebook, FaYoutube, FaHome,FaSearch,FaBars } from 'react-icons/fa';


function Navbar() {
    return (
        <div>
            <div id="navigation">
                <div className="container">
                    <div className="row" style={{justifyContent:'space-between'}}>
                        <div className="col-lg-15">
                            <nav className="navbar navbar-expand-lg navbar-light justify-content-between flex-wrap p-0">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="fa fa-bars"><FaBars color='white' /></span>
                                </button>
                                <div className="collapse navbar-collapse" id="menu">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="active"><a href="index.html">
                                            <em className="it-home">
                                                <li className="home"><a href="#" target="_blank" rel="noopener noreferrer"></a></li>
                                            </em><FaHome size={18} /> Home </a></li>
                                        <li className="nav-item dropdown">
                                            <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">About JDA</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <a href="About" onclick="loadPage`{About}`">About JDA</a>
                                                    <a href="#">Board Member</a>
                                                    <a href="#">Organizational Structure</a>
                                                    <a href="#">Gallary</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#">Town Planning</a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a href="#">Master Plan 2021</a>
                                                </li>
                                                <li class="dropdown-submenu">
                                                    <a href="#">Schemes</a>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="#">Transferred</a></li>
                                                        <li><a href="#"> Running</a></li>
                                                        <li><a href="#"> Upcoming</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#">Notice Board</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <a href="#">Acts/Rules/Circulars</a>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="#">1973 Act</a></li>
                                                        <li><a href="#"> व्ययन नियम 2013</a></li>
                                                        <li><a href="#"> व्ययन नियम 2018</a></li>
                                                        <li><a href="#"> RERA Act</a></li>
                                                    </ul>
                                                </li>
                                                <li >
                                                    <a href="#">Important Notices</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#">Citizen Services</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <a href="#">Download Formats</a>
                                                    <a href="#">Time Limits</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#">Properties</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <a href="#">Properties for Sale</a>
                                                    <a href="#">Express Your Interest</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="#">Online Services</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <a href="#">Pay Your Dues</a>
                                                    <a href="#">Properties for Sale</a>
                                                    <a href="#">Tenders</a>
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
                                <button className="btn btn-sm" type="button" style={{marginTop:'6px'}}>
                                    <i className="" ><FaSearch size={18} style={{marginLeft:'-2'}}/></i>
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
