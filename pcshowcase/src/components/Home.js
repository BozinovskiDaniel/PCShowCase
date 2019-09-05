import React from 'react';
import '../App.scss';
import {Link} from 'react-router-dom';
import '../js/main';

function Home() {
    return (
        <body>

            <section className="landing-page">
                <div className="lpbody">
                    <h1>Pc Showcase</h1>
                    <p>A New Take on Hardware!</p>
                </div>

            </section>

            <section className="sectiontwo">
                <div className="grid-item"></div>
                <div className="grid-item">
                    <h1>The Competitive Edge</h1>
                    <p>Hard to beat, and impossible to miss - SPEC-ALPHA'S hard edged design and numerous
                       color combinations make a bold statement.</p>
                       <button type="button" class="btn">SEE MORE</button>
                </div>
                <div className="grid-item"></div>
            </section>
            
            <section className="wrapper skewed">
                <div className="layer bottom">
                    <div class="content-wrap">
                        <div className="content-body">
                            <h1>Look Sharp</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                a more-or-less normal distribution of letters</p>
                        </div>
                        <img src={require('../images/light.png')} alt="light pc" />
                    </div>
                </div>


                <div className="layer top">
                    <div className="content-wrap">
                        <div className="content-body">
                            <h1>Stay Cool</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                a more-or-less normal distribution of letters</p>
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