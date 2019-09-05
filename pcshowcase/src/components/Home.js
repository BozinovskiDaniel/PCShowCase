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
                    <div className="btn btn-outline-dark btn-lg">See More</div>
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
                     
            </section>

            
        </body>
    );
}

export default Home;