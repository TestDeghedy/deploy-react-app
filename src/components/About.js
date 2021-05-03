import React, { Component, Fragment } from 'react';
import meImg from "../img/small-version.jpg";
import Footer from "./Footer";
// import scene from '../img/scene1.jpg';
import scene from '../img/scene2.jpg';
import ecpcImg from '../img/acm.jpg';

class About extends Component {
    render () {
        return (
            <Fragment>
                <div className="about-container">
                    <div className="main-content-container">
                        <div className="main-content-name">
                            Abdelrahman Deghedy
                        </div>
                        <div className="main-content-description">
                            Self-Learning Software Developer.
                        </div>
                    </div>

                    <div className="summary-content-container">
                        <div className="summary-content-img">
                            <img src={meImg} alt="Abdelrahman's img" className="summary-content-img-itself"/>
                            <div className="summary-content-img-text">
                                Black / White Abdelrahman
                            </div>
                        </div>
                        <div className="summary-content-paragraph summary-content-paragraph-first">
                            I'm a second-year student at the Communication department. I study in the Faculty of Engineering-Alexandria University. Self-learner, writer, and in love with talking to people and hearing their stories.
                        </div>

                        <div className="summary-content-paragraph">
                            I chose to be a software developer, because I really enjoy the process of solving problems, also the field is so versatile, and this gives me a huge challenge to work in.
                        </div>

                        <div className="summary-content-header">
                            Hobbies
                        </div>

                        <div className="summary-content-paragraph">
                            I love writing and communicating my thoughts. I'm currently writing at <a rel="noreferrer" className="link-inside" href="https://dev.to/abdelrahmandeghedy" target="_blank"> dev.to </a> check it out!.
                        </div>

                        <div className="summary-content-paragraph">
                            Whenever I see a good scene, I always use my phone camera to capture it. Unfortunately, good moments always pass, but memories last forever. You can find more on my  <a rel="noreferrer" className="link-inside" href="https://www.behance.net/Deghedy" target="_blank"> behane </a> account.
                        </div>

                        <div className="showoff-container showoff-container-scene">
                            <img 
                                className="showoff-img-itself"
                                src={scene}
                                alt="Beautiful Scene"
                            />
                        </div>


                        <div className="summary-content-header">
                            Activities
                        </div>

                        <div className="summary-content-paragraph">
                            I'm currently participating as a student rep in my department. I chose this, as it gives me a chance to help and connect with other students, and to build the community that I always strived for!
                        </div>

                        <div className="summary-content-paragraph">
                            Last year, I participated in ECPC, as I fall in love with algorithms, and problem-solving; It was a nice experience, and I enjoyed working with my team. It gave me the chance to know beautiful personalities, and opened my mind to a lot of new ideas!
                        </div>

                        <div className="showoff-container showoff-img-itself-acm">
                            <img 
                                className="showoff-img-itself"
                                src={ecpcImg}
                                alt="Me on the ECPC last year"
                            />
                        </div>


                    </div>

                    <Footer />
                </div>
            </Fragment>
        )
    }
}

export default About;