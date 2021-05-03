import React, { Component, Fragment } from 'react';
import { AiFillBehanceCircle } from 'react-icons/ai';
import { TiSocialInstagram, TiSocialLinkedin, TiSocialGithub, TiSocialTwitter, TiSocialFacebook } from 'react-icons/ti';
import { FaDev } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    handleClick = (e) => {
        const items = ['about', 'contact', 'resume', 'projects', 'quotes'];
        const item = e.target;
        const background = document.querySelector ('.background');
        item.classList.add ('navbar-item-clicked');


        item.classList.forEach ((className) => {
            for (let i = 0; i < 5; i++) {
                if (className.includes (items[i]) && !className.includes (`navbar-item-${items[i]}-clicked`)) {
                    item.classList.add (`navbar-item-${items[i]}-clicked`);
                    background.classList.add (`background-${items[i]}-color`);
                }
            }
        })
        
        // remove other items extra classes
        for (let i = 0; i < 5; i++) {
            const currentItem = document.querySelector (`.navbar-item-${items[i]}`);
            if (currentItem === item) {
                continue;
            }
            if (currentItem.classList.contains (`navbar-item-${items[i]}-clicked`)) {
                currentItem.classList.remove (`navbar-item-${items[i]}-clicked`);
            }
            if (currentItem.classList.contains (`navbar-item-clicked`)) {
                currentItem.classList.remove (`navbar-item-clicked`);
            }
            if (background.classList.contains (`background-${items[i]}-color`)) {
                background.classList.remove (`background-${items[i]}-color`);
            }
        }
        
    }

    render () {
        return (
            <Fragment>
                <div className="sidebar">
                    <ul className="sidebar-navbar">
                        <Link to="/" className="remove-link-style">
                            <li className="navbar-item navbar-item-about navbar-item-clicked navbar-item-about-clicked navbar-item-first" onClick={this.handleClick}> About Me </li>
                        </Link>

                        <Link to="/contact" className="remove-link-style">
                            <li className="navbar-item navbar-item-contact" onClick={this.handleClick}> Contact Me </li>
                        </Link>

                        <a rel="noreferrer" className="navbar-resume-link" href="https://drive.google.com/file/d/14pER2spfeTQz0BPpgMcPnI9opqfbBtD5/view" target="_blank">
                            <li className="navbar-item navbar-item-resume" > Resume </li>
                        </a>
                        <Link to="projects" className="remove-link-style">
                            <li className="navbar-item navbar-item-projects" onClick={this.handleClick}> Projects </li>
                        </Link>

                        <Link to="/quotes" className="remove-link-style">
                            <li className="navbar-item navbar-item-quotes navbar-item-last" onClick={this.handleClick}> Quotes </li>
                        </Link>
                    </ul>

                    <div className="navbar-social">
                        <div className="navbar-social-text">
                            Reach Me On Social Networks
                        </div>

                        <div className="navbar-social-icons-container">
                            <div className="navbar-social-icon-facebook">
                                <a rel="noreferrer" href="https://www.facebook.com/AbdelrahmanDeghedy/" target="_blank">
                                    <TiSocialFacebook />
                                </a>
                            </div>
                            <div className="navbar-social-icon-twitter">
                                <a rel="noreferrer" href="https://twitter.com/Deghedy_" target="_blank">
                                    <TiSocialTwitter />
                                </a>
                            </div>
                            <div className="navbar-social-icon-github">
                                <a rel="noreferrer" href="https://github.com/AbdelrahmanDeghedy" target="_blank">
                                    <TiSocialGithub /> 
                                </a>
                            </div>
                            <div className="navbar-social-icon-linkidin">
                                <a rel="noreferrer" href="https://www.linkedin.com/in/abdelrahman-deghedy/" target="_blank">
                                    <TiSocialLinkedin />
                                </a>
                            </div>
                            <div className="navbar-social-icon-instagram">
                                <a rel="noreferrer" href="https://www.instagram.com/abdelrahman_deghedy/" target="_blank">
                                    <TiSocialInstagram />
                                </a>
                            </div>
                            <div className="navbar-social-icon-behance">
                                <a rel="noreferrer" href="https://www.behance.net/Deghedy" target="_blank">
                                    <AiFillBehanceCircle />
                                </a>
                            </div>
                            <div className="navbar-social-icon-dev">
                                <a rel="noreferrer" href="https://dev.to/abdelrahmandeghedy" target="_blank">
                                    <FaDev />
                                </a>
                            </div>
                        </div>
                    </div>



                </div>

            </Fragment>
        )
    }
}

export default Navbar;