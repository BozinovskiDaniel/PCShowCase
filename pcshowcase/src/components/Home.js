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
                            <h1>PC Showcase</h1>
                            <p class="lead mb-0">View our wide variety of high quality PC gear</p>
                            
                        </div>
                        <a class="arrow bounce"><i class="fa fa-angle-double-down fa-4x" aria-hidden="true"></i></a>
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
                            display and front intake LED fans</p>
                            <div className="circle-white"></div>
                        </div>
                        <img src={require('../images/light.png')} alt="light pc" />
                    </div>
                </div>


                <div className="layer top">
                    <div className="content-wrap">
                        <div className="content-body">
                            <h1>STAY COOL</h1>
                            <p>Three included 150mm fans keep you running cool with an unobstructed direct-airflow path
                            , and in control with a three-speed fan</p>
                            <div className="circle-black"></div>
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
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-12">
                            <h1>EASY TO BUILD, HARD TO BEAT</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting in here see</p>
                            <p>industry. Lorem Ipsum has been the industry's number one most</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <i class="fa fa-cloud fa-3x blackiconcolor"></i>
                            <p>Lorem Ipsum is simply</p>
                        </div>
                        <div className="col-4">
                            <i class="fa fa-file fa-3x blackiconcolor" aria-hidden="true"></i>
                            <p>Lorem Ipsum is simply</p>
                        </div>
                        <div className="col-4">
                            <i class="fa fa-bars fa-3x blackiconcolor" aria-hidden="true"></i>
                            <p>Lorem Ipsum is simply</p>
                        </div>
                    </div>

                </div>
            
            
            </section>

            <section className="sectionthree">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <img src={require('../images/hey.png')} height="550px" alt="pc lastdiv"/>
                        </div>
                        <div className="col-6 text-center">
                            <i class="fa fa-cubes fa-3x blackiconcolor" aria-hidden="true"></i>
                            <h1>GET AN EDGE ON YOUR OPPOSITION</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>Some more lorem ipsum is here. </p>
                            <button type="button" class="btn btn-outline-dark">SHOP NOW</button>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </section>
            
        </body>
    );
}

export default Home;