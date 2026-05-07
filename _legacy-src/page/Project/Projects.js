import React from "react";
import './Projects.css';
import { motion } from "framer-motion";

const Projects = () => {
    const spinAnimation = {
        hidden: { opacity: 0, rotate: -180 },
        visible: {
            opacity: 1,
            rotate: 0,
            transition: { duration: 1 }
        }
    };

    return (
        <div className="project" id="projects">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                TOP RECENT PROJECTS
            </h2>
            <hr />
            <p className="pb-3 text-center">
                Developed a backend for a personal portfolio using Spring Boot. It manages API endpoints for contact forms, projects, and skills, integrating email functionality with Sendinblue for real-time notifications. This project is integrated with a React frontend for seamless interaction.
            </p>
            <div className="row" id="ads">
                <motion.div
                    className="col-md-4"
                    initial="hidden"
                    animate="visible"
                    variants={spinAnimation}
                >
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">Full stack</span>
                            <img
                                src="https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b"
                                alt="project1"
                            />
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                            <span className="card-detail-badge">Node</span>
                            <span className="card-detail-badge">Express</span>
                            <span className="card-detail-badge">React</span>
                            <span className="card-detail-badge">MongoDB</span>
                        </div>
                        <div className="card-body text-center">
                            <div className="ad-title m-auto">
                                <h6 className="text-uppercase">
                                    Gym Website
                                </h6>
                            </div>
                            <a
                                className="ad-btn"
                                href="https://github.com/sahilkumarclass/Gym-Website.git"
                            >
                                View
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="col-md-4"
                    initial="hidden"
                    animate="visible"
                    variants={spinAnimation}
                >
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">Full Stack</span>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                                alt="project2"
                            />
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                            <span className="card-detail-badge">React</span>
                            <span className="card-detail-badge">Spring Boot</span>
                            <span className="card-detail-badge">REST API</span>
                        </div>
                        <div className="card-body text-center">
                            <div className="ad-title m-auto">
                                <h5 className="text-uppercase">Music Player App</h5>
                            </div>
                            <a
                                className="ad-btn"
                                href="https://github.com/sahilkumarclass/MusicPlayerAPI.git"
                            >
                                View
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="col-md-4"
                    initial="hidden"
                    animate="visible"
                    variants={spinAnimation}
                >
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">Backend</span>
                            <img
                                src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                                alt="project3"
                            />
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                            <span className="card-detail-badge">Node</span>
                            <span className="card-detail-badge">Express</span>
                            <span className="card-detail-badge">NoSQL</span>
                        </div>
                        <div className="card-body text-center">
                            <div className="ad-title m-auto">
                                <h5 className="text-uppercase">Coming soon...</h5>
                            </div>
                            <a className="ad-btn" href="view">
                                View
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
