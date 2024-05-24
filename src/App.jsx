import React from 'react';
import Footer from './components/footer/Footer';
// import { IconName } from "react-icons/fa6";
import { RiHomeHeartFill } from "react-icons/ri";
// import { mdiCarConnected } from '@mdi/js';
import Slider from '../src/components/Slider'
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './components/navbar/Navbar'
// <=======CSS======>
import './App.css';
import './assets_uarban/css/animate.css'
import './assets_uarban/css/bootstrap.min.css'
import './assets_uarban/css/default.css'
import './assets_uarban/css/font-awesome.min.css'
import './assets_uarban/css/ionicons.min.css'
import './assets_uarban/css/jquery.fancybox.min.css'
import './assets_uarban/css/jquery.mCustomScrollbar.min.css'
import './assets_uarban/css/materialdesignicons.min.css'
import './assets_uarban/css/modern-ticker.css'
import './assets_uarban/css/nivo-slider.css'
import './assets_uarban/css/slick-theme.css'
import './assets_uarban/css/slick.css'
import './assets_uarban/css/theme1.css'
// import './assets_uarban/css/main.css'
import './assets_uarban/fonts/fonts.css'

// <=======Image=====>
import logo from './images/Photos/logo.jpg'
import logo1 from './images/header/logo1.png'
import logo3 from './images/header/logo3.png'
import building from './images/Photos/building.jpeg'
import ceo from './images/Photos/ceo.jpg'
import chairman from './images/Photos/chairman.jpg'
import ed from './images/Photos/ed.jpeg'
import F from './images/Photos/F.png'
import it from './images/Photos/it.jpg'
import others from './images/Photos/others.jpg'
import road from './images/Photos/road.jpg'
import T from './images/Photos/T.png'
import I from './images/Photos/I.png'
import india_gov from './images/slider/15122017120232india-gov.png'
import mygov from './images/slider/15122017120409mygov.png'
import swachbharat from './images/slider/15122017120459swach-bharat.png'
import dialgov from './images/slider/15122017120741dialgov.png'
import rajbhavan from './images/slider/30012020072441rajbhavan.jpg'
import mapit from './images/slider/30012020074058mapit.jpg'
import mpdc from './images/slider/30012020074725mpdc.jpg'
import mptourism from './images/slider/30012020074807mptourism.jpg'
import fomp from './images/slider/30012020074852fomp.jpg'
import lokseva from './images/slider/30012020075728lokseva.jpg'
import back1 from './images/slider/back1.jpg'
import back3 from './images/slider/back3.jpg'
import oat from './images/slider/oat.jpg'
import building1 from './images/slider/building(1).jpg'
import cmhelpline from './images/slider/loader.png'
import { BiDirections } from 'react-icons/bi';
import ButtomSlider from './components/buttomNav/ButtomSlider';
import slider1 from './images/slider/slide1.jpg'
import slider2 from './images/slider/slide2.jpg'
import slider3 from './images/slider/slide3.jpg'
import slider4 from './images/slider/slide4.jpg'
import slider5 from './images/slider/slide5.jpg'
import ceo1 from './images/slider/ceo1.jpg'
import chairmen from './images/slider/chairmen.jpg'
import blankImage from './images/Photos/blankImage.jpg'
import SubPart1 from './images/Photos/SubPart1.jpg'
import SubPart2 from './images/Photos/SubPart2.jpg'
import SubPart3 from './images/Photos/SubPart3.jpg'
import SubPart4 from './images/Photos/SubPart4.jpg'
import log from './images/header/5172658.jpg'
import logo5 from './images/Photos/logo5.jpg'
import logo6 from './images/header/logo6.jpg'

//  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
//       rel="stylesheet"></link> 

// <=======JavaScript========>     
// import './assets_uarban/js/bootstrap.min.js'
// import './assets_uarban/js/custom.jsx'
// import './assets_uarban/js/jquery.fancybox.min.js'
// import './assets_uarban/js/jquery.mCustomScrollbar.concat.min.js'
// import './assets_uarban/js/jquery.min.js'
// import './assets_uarban/js/jquery.modern-ticker.min.js'
// import './assets_uarban/js/jquery.nivo.slider.js'
// import './assets_uarban/js/popper.min.js'
// import './assets_uarban/js/slick.min.js'
// import './assets_uarban/js/themeswitcher.js'


function App() {
    const divStyle = {
        width: '300px',
        height: '200px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        border: '2px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
    };

    const headingStyle = {
        color: '#333',
        marginBottom: '10px'
    };

    const paragraphStyle = {
        color: '#666',
        lineHeight: '1.5'
    };

    return (

        <div id="dvCategoryResults" className="main">
            <div className="main-content">
                {/* Rest of the JSX code */}

                <div className="logo-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7">
                                <div className="logo-holder">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img
                                                style={{ backgroundColor: 'red' }}
                                                src={logo6} alt="Madhya Pradesh" width="160" />
                                        </a>
                                    </div>
                                    <div className="logo-title">
                                        <h1> Jabalpur Development Authority </h1>
                                        <p>Jabalpur, Madhya Pradesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <>
                    <Navbar />
                </>
            </div>
            {/* -----------NNNNNn222--------------- */}
            {/* <!-- /navigation --> */}

            <main className="fontresize">
                <div id="innerpage">
                    <div>
                        <style>
                            {`
                            @media (min-width:1920px){
                                .banner-img {
                                    max-width: initial;
                                    width: 100%;
                                    object-fit: cover;
                                }
                            }
                        `}
                        </style>

                        {/* <div className="home-fixed-slider pr slider-wrapper theme-default">
                            <div id="slider" className="nivoSlider">
                                <img style={{ position: 'relative' }} src={back3} alt="Slider Image 1" />
                                <img style={{ position: 'relative' }} src={back1} data-thumb="images/slider/back3.JPG" alt="Slider Image 2" />
                                <img style={{ position: 'relative' }} src={building1} data-thumb="images/slider/oat.jpg" alt="Slider Image 3" />
                                <img style={{ position: 'relative' }} src={oat} data-thumb="images/slider/building.jpeg" alt="Slider Image 4" />
                            </div>
                            <button id="Pause" type="button" className="control"><span className="fa fa-pause"></span></button>
                            <button id="Play" type="button" className="control"><span className="fa fa-play"></span></button>
                        </div> */}



                        <div className="home-fixed">
                            <div id="slider" className="nivoSlider">
                                {/* //<img src={mpdc} />  */}
                                {/* <img
                                    style={{ position: 'relative' }}
                                    src={back3} /> */}
                            </div>
                            <Slider />
                        </div>



                    </div>
                    <div>
                        <div className="headertxt">
                            <div className="container">
                                <div className="ticker1 modern-ticker mt-round">
                                    <div className="mt-body">
                                        <div className="mt-label"><em className="mdi mdi-bullhorn"></em> Updates</div>
                                        <div></div>
                                        <div className="mt-news">
                                            <ul>
                                                <li>
                                                    {/* <a href="" title=""> Email : ceojscl@mpurban.gov.in</a> */}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec-pad implinks pr">
                        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '', zIndex: '1', position: 'relative' }}>
                            <div style={{ justifyContent: 'space-between', padding: '10px', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap' }} >
                                <div style={{ width: '100%', padding: '10px', justifyContent: 'space-between', border: '1px solid rgba(0, 0, 0, 0.1)', boxShadow: '0 2px 4px black', borderRadius: '10px', backgroundColor: '#e8dada' }}>


                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', alignSelf: 'center', alignItems: 'center', textAlign: 'center', alignContent: 'center' }}>
                                            <img
                                                style={{ height: '15vw', width: '50vw', borderRadius: '20px', margin: '5px', zIndex: '1', border: '1px solid rgba(0, 0, 0, 0.1)', boxShadow: '1px 4px 4px #34495E' }}
                                                src={chairmen} alt="" />
                                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center', textAlign: 'center' }}>
                                                <div>
                                                    <p style={{ fontSize: '1.5vw', color: 'red', fontWeight: 'bold' }}>Chairmen</p>
                                                    <h6 style={{ fontSize: '1.5vw', fontWeight: 'bold', marginTop: '-1vw' }}>Shri Abhay Verma</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ margin: '10px', marginTop: '0px', justifyContent: 'center', textAlign: 'center', fontSize: '1.2vw', zIndex: '1' }}>
                                            <p style={{ lineHeight: 1.3 }}>
                                                Our city is not just a place on the map; it's our home, our community, and our shared responsibility. Together, we have the power to shape its future, to build a thriving, sustainable environment where every individual can flourish.
                                                <br></br>

                                                I urge you to join hands with us in our efforts to enhance the infrastructure, preserve our natural resources, and foster a spirit of unity and progress. Your participation, your ideas, and your commitment are vital in realizing our collective vision for Jabalpur.<br></br>

                                                Let's work together to create a city we can all be proud of—one that is inclusive, vibrant, and full of opportunity.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ justifyContent: 'space-between', padding: '10px', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap' }} >
                                <div style={{ width: '100%', padding: '10px', justifyContent: 'space-between', border: '1px solid rgba(0, 0, 0, 0.1)', boxShadow: '0 2px 4px black', borderRadius: '10px', backgroundColor: '#C0C0C0' }}>


                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', alignSelf: 'center', alignItems: 'center', textAlign: 'center', alignContent: 'center' }}>
                                            <img
                                                style={{ height: '15vw', width: '50vw', borderRadius: '20px', margin: '5px', zIndex: '1', border: '1px solid rgba(0, 0, 0, 0.1)', boxShadow: '1px 4px 4px #34495E' }}
                                                src={ceo1} alt="" />
                                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center', textAlign: 'center' }}>
                                                <div>
                                                    <p style={{ fontSize: '1.5vw', color: 'red', fontWeight: 'bold' }}>CEO</p>
                                                    <h6 style={{ fontSize: '1.4vw', fontWeight: 'bold', marginTop: '-1vw' }}>Shri Deepak K Vaidya</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ margin: '10px', marginTop: '0px', justifyContent: 'center', textAlign: 'center', fontSize: '1.2vw', zIndex: '1' }}>
                                            <p style={{ lineHeight: 1.3 }}>
                                                Jabalpur is on a journey of growth and transformation, and your role in this journey is paramount. Your feedback, engagement, and active participation are crucial as we strive to create a city that meets the needs and aspirations of every citizen.<br></br>

                                                I encourage you to voice your concerns, share your ideas, and collaborate with us in shaping the future of Jabalpur. Together, let's work towards building a sustainable, inclusive, and vibrant community that we can all be proud to call home.<br></br>

                                                Thank you for your continued support and commitment to Jabalpur's development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="sec-pad implinks pr">
                        <div className="flex-row">
                            <div className="card">
                                <div className="flex-row">
                                    <div className="image-container">
                                        <img src={chairmen} alt="Chairmen" />
                                        <div className="text-center">
                                            <div>
                                                <p className="title red">Chairmen</p>
                                                <h6 className="name">Shri Abhay Verma</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <p>
                                            Our city is not just a place on the map; it's our home, our community, and our shared responsibility. Together, we have the power to shape its future, to build a thriving, sustainable environment where every individual can flourish.
                                            <br /><br />
                                            I urge you to join hands with us in our efforts to enhance the infrastructure, preserve our natural resources, and foster a spirit of unity and progress. Your participation, your ideas, and your commitment are vital in realizing our collective vision for Jabalpur.
                                            <br /><br />
                                            Let's work together to create a city we can all be proud of—one that is inclusive, vibrant, and full of opportunity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="flex-row">
                                    <div className="image-container">
                                        <img src={ceo1} alt="CEO" />
                                        <div className="text-center">
                                            <div>
                                                <p className="title red">CEO</p>
                                                <h6 className="name">Shri Deepak K Vaidya</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <p>
                                            Jabalpur is on a journey of growth and transformation, and your role in this journey is paramount. Your feedback, engagement, and active participation are crucial as we strive to create a city that meets the needs and aspirations of every citizen.
                                            <br /><br />
                                            I encourage you to voice your concerns, share your ideas, and collaborate with us in shaping the future of Jabalpur. Together, let's work towards building a sustainable, inclusive, and vibrant community that we can all be proud to call home.
                                            <br /><br />
                                            Thank you for your continued support and commitment to Jabalpur's development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* ------------------NNNN3333------------------ */}
                <div>
                    <div className="about">
                        <div className="container pr">
                            <h2 className="title">Jabalpur Development Authority</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="contentbox">
                            <div className="row">
                                <div className="col-lg-3 px-2">
                                    <div className="panel bg1">
                                        <div className="panel-heading">
                                            <h4>
                                                <span className="mdi mdi-bookmark-plus-outline"></span> Project
                                            </h4>
                                        </div>
                                        <div className="panel-body listing">
                                            <img src={SubPart1} alt="Roads" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 px-2">
                                    <div className="panel bg2">
                                        <div className="panel-heading">
                                            <h4>
                                                <span className="mdi mdi-bookmark-plus-outline"></span> Buildings
                                            </h4>
                                        </div>
                                        <div className="panel-body listing">
                                            <img src={SubPart2} alt="Buildings" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 px-2">
                                    <div className="panel bg3">
                                        <div className="panel-heading">
                                            <h4>
                                                <span className="mdi mdi-bookmark-plus-outline"></span> Map
                                            </h4>
                                        </div>
                                        <div className="panel-body listing">
                                            <img src={SubPart3} alt="IT" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 px-2">
                                    <div className="panel bg4">
                                        <div className="panel-heading">
                                            <h4>
                                                <span className="mdi mdi-bookmark-plus-outline"></span> Others
                                            </h4>
                                        </div>
                                        <div className="panel-body listing">
                                            <img src={SubPart4} alt="Others" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* // ---------------NNNNN4444444--------------- */}
                {/* ----------Start Partner----------------- */}
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-12">
                            <div>
                                <div className="detail">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank">
                                                <em className="mdi mdi-home-heart"></em>
                                                <span> ICCC</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <em className="mdi mdi-car-connected"></em>
                                                <span> ITMS </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <em className="mdi mdi-book-multiple"></em>
                                                <span>Waste to Energy</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <em className="mdi mdi-certificate"></em>
                                                <span>MLCP</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <em className="mdi mdi-folder-account"></em>
                                                <span>OAT</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <em className="mdi mdi-map"></em>
                                                <span>Smart Road</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <em className="mdi mdi-leaf"></em>
                                                <span>Smart Light</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <em className="mdi mdi-home"></em>
                                                <span>Incubation Center</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-md-5">
                            <FacebookUpdates />
                        </div>
                        <div className="col-md-7">
                            <TwitterUpdates />
                        </div> */}

                    </div>
                </div>
                {/* ----------End Partner---------- */}
                {/* ----------------Fackbook update---------------------- */}

                {/* <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="socialbox fb-post">
                                <div class="s_title"><em class="fa fa-facebook"></em> Facebook Updates</div>
                                <div class="p-2">
                                    <div id="fb-root"></div>
                                    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/hi_IN/sdk.js#xfbml=1&version=v5.0"></script>
                                    <div class="fb-page" data-href="https://www.facebook.com/SmartCityJabalpur" data-tabs="timeline" data-width="500" data-height="510" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/MunicipalCorporationJabalpur" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/MunicipalCorporationJabalpur">नगर निगम जबलपुर</a></blockquote></div>            </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="socialbox tw-post">
                                <div class="s_title"><em class="fa fa-twitter"></em> Twitter Updates</div>
                                <div class="p-2">
                                    <a class="twitter-timeline" data-height="500" href="https://twitter.com/jscljabalpur"></a>
                                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* -----------------NNNN5555-------------------- */}

                {/* <!--  partners --> */}
                {/* <div class="partners-section">
                    <div class="container">
                        <div class="logo-slider">
                            <div>
                                <a href="https://india.gov.in/" target="_blank" title="इंडिया  गवर्नमेंट ">
                                    <div class="img-box">
                                        <img src={india_gov} data-thumb={india_gov.default} alt="इंडिया  गवर्नमेंट " />

                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="http://governor.mp.gov.in/" target="_blank" title="राजभवन म.प्र">
                                    <div class="img-box">
                                        <img alt="राजभवन म.प्र" src={rajbhavan} data-thumb={rajbhavan.default} />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://mygov.in/" target="_blank" title="माय गवर्नमेंट भारत ">
                                    <div class="img-box">
                                        <img alt="माय गवर्नमेंट भारत " src={mygov} />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="http://swachhbharatmission.gov.in/sbmcms/index.htm" target="_blank" title="स्वच्छ - भारत ">
                                    <div class="img-box">
                                        <img alt="स्वच्छ - भारत " src={swachbharat} />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.mapit.gov.in/" target="_blank" title="MAP_IT website ">
                                    <div class="img-box">
                                        <img alt="MAP_IT website " src={mapit} />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://invest.mp.gov.in/" target="_blank" title="Invest MP">
                                    <div class="img-box">
                                        <img alt="Invest MP" src={mpdc} />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="http://tourism.mp.gov.in/" target="_blank" title="MP Tourism">
                                    <div class="img-box">
                                        <img alt="MP Tourism" src={mptourism} />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="http://www.friendsofmp.gov.in/" target="_blank" title="Friends of MP">
                                    <div class="img-box">
                                        <img alt="Friends of MP" src={fomp} />
                                    </div>
                                </a>
                            </div>
                            <div >
                                <a href="http://dial.gov.in/" target="_blank" title="डायल गवर्नमेंट ">
                                    <div class="img-box">
                                        <img alt="डायल गवर्नमेंट " src={dialgov} />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="http://mpedistrict.gov.in/Public/index.aspx" target="_blank" title="MP Lok Seva">
                                    <div class="img-box">
                                        <img alt="MP Lok Seva" src={lokseva} />
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="http://cmhelpline.mp.gov.in/" target="_blank" title="&#160;CM Helpline">
                                    <div class="img-box">
                                        <img alt="CM Helpline" src={cmhelpline} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <ButtomSlider />
           
            {/* <div class='CustPartner'>
                    <div style={{flexDirection:'row'}}>
                        <img src={india_gov} alt="" />
                    </div>
                    <div>
                        <img src={mygov} alt="" />
                    </div>
                    <div>
                        <img src={dialgov} alt="" />
                    </div>
                    <div>
                        <img src={rajbhavan} alt="" />
                    </div>
                </div> */}

            {/* <!-- partners end--> */}


            {/* --------------------NNNN666666------------------ */}



            {/* ---------------Footer start---------------- */}


            </main>
            <Footer />

            {/* ---------------Footer end---------------- */}



        </div>
    );

}

export default App;
