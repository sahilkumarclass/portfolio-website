import React from "react";
import "./Menus.css";
import { motion } from "framer-motion"; // Import framer-motion
import { Link } from "react-scroll";
import profilePhoto from "../../assets/images/profilePhoto.jpg";
import {
    FcAbout,
    FcBiotech,
    FcBusinessContact,
    FcHome,
    FcPortraitMode,
    FcReadingEbook,
    FcVideoProjector,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                    {/* Replace Zoom with framer-motion */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="navbar-profile-pic"
                    >
                        <img src={profilePhoto} alt="profile pic" />
                    </motion.div>

                    {/* Replace Fade with framer-motion */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }} // Mimics the Fade with a slide from left
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="nav-items"
                    >
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcHome />
                                    Home
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcAbout />
                                    About
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcReadingEbook />
                                    Education
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcBiotech />
                                    Tech Stack
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcVideoProjector />
                                    Projects
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcPortraitMode />
                                    Work Experience
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcBusinessContact />
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </>
            ) : (
                <>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcHome />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcAbout />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcReadingEbook />
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcBiotech />
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcVideoProjector />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcPortraitMode />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcBusinessContact />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Menus;
