import React from 'react';
import '../footer/red.css';
import '../footer/style.css';
import { FaAngleDoubleRight, FaChevronRight, FaSpinner, FaTwitter, FaFacebook, FaYoutube, FaPhoneAlt, FaNewspaper, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="m-has-bg">
            <div className="footer-bg">
                <div className="footer-inner">
                    {/* FOOTER TOP */}
                    <div className="footer-top">
                        <div className="c-container">
                            {/* BOTTOM PANEL */}
                            <div id="bottom-panel">
                                <div className="bottom-panel-inner">
                                    <div className="row">
                                        <div className="col-md-3">
                                            {/* Important Links Widget */}
                                            <div className="widget">
                                                <hr className="c-separator m-transparent hidden-lg hidden-md" />
                                                <div className="widget-inner">
                                                    <h3 className="widget-title">Important Links</h3>
                                                    <div className="widget-content">
                                                        <h3>
                                                            <a style={{ fontSize: '18px' }} href="#">
                                                                <FaAngleDoubleRight />&nbsp;Disclaimer
                                                            </a><br />
                                                            <a style={{ fontSize: '18px' }} href="#">
                                                                <FaAngleDoubleRight />Hyperlinking Policy
                                                            </a><br />
                                                            <a style={{ fontSize: '18px' }} href="#">
                                                                <FaAngleDoubleRight />&nbsp;Privacy Policy
                                                            </a><br />
                                                            <a style={{ fontSize: '18px' }} href="#" target="_blank" rel="noopener noreferrer">
                                                                <FaAngleDoubleRight />&nbsp;Staff Login
                                                            </a>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-col col-md-3">
                                            {/* Phone Numbers Widget */}
                                            <div className="widget definition-list-widget">
                                                <hr className="c-separator m-transparent hidden-lg hidden-md" />
                                                <div className="widget-inner">
                                                    <h3 className="widget-title m-has-ico">
                                                        <i className="widget-ico tp"><FaPhoneAlt /></i>Phone Numbers
                                                    </h3>
                                                    <div className="widget-content">
                                                        <dl>
                                                            <dt>JDA Office</dt>
                                                            <dd>(+91) 0761-2402832</dd>
                                                            <dt>Toll Free</dt>
                                                            <dd>1800-233-1592</dd>
                                                        </dl>
                                                        <p className="show-all-btn"><a href="#">Contact Us</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-col col-md-3">
                                            {/* Newsletter Widget */}
                                            <div className="widget mailchimp-subscribe-widget">
                                                <hr className="c-separator m-transparent hidden-lg hidden-md" />
                                                <div className="widget-inner">
                                                    <h3 className="widget-title m-has-ico">
                                                        <i className="widget-ico tp"><FaNewspaper /></i>Join Our Newsletter
                                                    </h3>
                                                    <div className="widget-content">
                                                        <form className="mailchimp-subscribe-form" method="get" action="#">
                                                            <div className="subscribe-inner">
                                                                <div className="description">
                                                                    <p>Join our newsletter to receive up to date news about our updates.</p>
                                                                </div>
                                                                <p className="c-alert-message m-warning m-validation-error" style={{ display: 'none' }}>
                                                                    <i className="ico fa fa-exclamation-circle"></i>
                                                                    <span>Your email address is required.</span>
                                                                </p>
                                                                <p className="c-alert-message m-warning m-request-error" style={{ display: 'none' }}>
                                                                    <i className="ico fa fa-exclamation-circle"></i>
                                                                    <span>There was a connection problem. Try again later.</span>
                                                                </p>
                                                                <p className="c-alert-message m-success" style={{ display: 'none' }}>
                                                                    <i className="ico fa fa-check-circle"></i>
                                                                    <span><strong>Form sent successfully!</strong></span>
                                                                </p>
                                                                <div className="form-fields">
                                                                    <input type="text" placeholder="Your Email Address" name="EMAIL" className="m-required m-email" />
                                                                    <button title="Subscribe" type="submit" className="submit-btn">
                                                                        <FaChevronRight />
                                                                        <FaSpinner className="fa-spin" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-col col-md-3">
                                            {/* JDA Contact Info */}
                                            <div className="widget">
                                                <hr className="c-separator m-transparent hidden-lg hidden-md" />
                                                <div className="widget-inner">
                                                    <h3 className="widget-title m-has-ico">
                                                        <i className="widget-ico tp"><FaEnvelope /></i>Jabalpur Development Authority
                                                    </h3>
                                                    <div className="widget-content">
                                                        <p>Block No. 7A, JDA Building, Marhatal, Jabalpur</p>
                                                        <p>Phone: (+91) 0761-2402832<br />Fax: (+91) 0761-2402832<br />
                                                            Email: <a href="mailto:ceojda@gmail.com">ceojda@gmail.com</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER BOTTOM */}
                    <div className="footer-bottom">
                        <div className="footer-bottom-inner">
                            <div className="c-container">
                                {/* Social Media Links */}
                                <div className="footer-social">
                                    <ul className="c-social-icons" style={{ verticalAlign: 'middle' }}>
                                        <li className="ico-twitter"><a href="https://twitter.com/ceojda" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                                        <li className="ico-facebook"><a href="https://www.facebook.com/jabalpur.jda/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                                        <li className="ico-youtube"><a href="https://www.youtube.com/channel/UCUkuiwileBoq4lLaRKjzXiw" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                                    </ul>
                                </div>
                                {/* Footer Menu */}
                                <nav className="footer-menu">
                                    <ul>
                                        <li><a style={{ color: '#C62A1A' }} href="#">Home</a></li>
                                        <li><a style={{ color: '#C62A1A' }} href="#">About JDA</a></li>
                                        <li><a style={{ color: '#C62A1A' }} href="#">City Planning</a></li>
                                    </ul>
                                </nav>
                                {/* Footer Text */}
                                <div className="footer-text">
                                    <p style={{ color: 'black', fontWeight: '700' }}>Design & developed by <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#C62A1A' }}>KSC Infotech Dewas</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
