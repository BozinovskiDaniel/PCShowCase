import React from 'react';
import '../App.scss';
import {Link} from 'react-router-dom';
import '../js/main';

function Home() {
    return (
        <body>

            
            <div className="landing-page">
                <div class="overlay"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src={require('../images/bg-vid.mp4')} type="video/mp4" />
                </video>
                <div class="container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                            <img src={require('../images/logo-bg.png')} height="100px" alt="logo" />
                            <p class="lead mb-0">View our wide variety of high quality PC gear</p>
                            <a class="arrow bounce"><i class="fa fa-angle-double-down fa-5x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <section className="sectiontwo">
                <div className="grid-item">
                    <h1>The Competitive Edge</h1>
                    <p>Hard to beat, and impossible to miss - SPEC-ALPHA'S hard edged design and numerous
                       color</p>
                    <p>combinations make a bold statement.</p>
                    <div className="btnholder"><button type="button" class="btn">SEE MORE</button></div>
                </div>
            </section>
            
            <section className="wrapper skewed">
                <div className="layer bottom">
                    <div class="content-wrap">
                        <div className="content-body">
                            <h1>LOOK SHARP</h1>
                            <p>The bold, modern exterior of this case features a panoramic window
                            display and front intake LED fans that light up your throw downs.</p>
                        </div>
                        <img src={require('../images/light.png')} alt="light pc" />
                    </div>
                </div>


                <div className="layer top">
                    <div className="content-wrap">
                        <div className="content-body">
                            <h1>STAY COOL</h1>
                            <p>Three included 150mm fans keep you running cool with an unobstructed direct-airflow path
                            , and in control with a three-speed fan controller for ultimate noise control.</p>
                        </div>
                        <img src={require('../images/dark.png')} alt="dark pc" />
                    </div>
                </div>

                <div className="handle"></div>

            </section>

            <section className="imageBundle">
                <div id="gallery" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row no-gutters">
                                <div class="col">
                                    <img class="img-fluid" src={require('../images/1.jpg')} alt="Image 1"/>
                                </div>

                                <div class="col">
                                    <img class="img-fluid" src={require('../images/2.jpg')} alt="Image 2"/>
                                </div>

                                <div class="col">
                                    <img class="img-fluid" src={require('../images/3.jpg')} alt="Image 3"/>
                                </div>

                                <div class="col">
                                    <img class="img-fluid" src={require('../images/4.jpg')} alt="Image 4"/>
                                </div>

                            </div>
                        </div>

                        <div class="carousel-item">
                            <div class="row no-gutters">
                                <div class="col">
                                    <img class="img-fluid" src={require('../images/5.jpg')} alt="Image 6"/>
                                </div>

                                <div class="col">
                                    <img class="img-fluid" src={require('../images/6.jpg')} alt="Image 7"/>
                                </div>

                                <div class="col">
                                    <img class="img-fluid" src={require('../images/7.jpg')} alt="Image 8"/>
                                </div>

                                <div class="col">
                                    <img class="img-fluid" src={require('../images/8.jpg')} alt="Image 9"/>
                                </div>

                                </div>
                                </div>
                            </div>
                        </div>        
            </section>


            <section className="whiteBlock">
                <h1>Some text</h1>
            </section>

            <section className="sectionthree">
                <div className="grid-item"></div>
                <div className="grid-item">
                    <h1>Get an Edge on your Opponents</h1>
                    <p>Receive the best possible gaming equipment with us, allowing you
                    to get that much needed edge!</p>
                       <button type="button" class="btn">SHOP NOW</button>
                </div>
                <div className="grid-item"></div>
            </section>
            
        </body>
    );
}

export default Home;