import React from "react";
import "./About.css";
import { motion } from "framer-motion"; // Import framer-motion
import profilePhoto from "../../assets/images/profilePhoto.jpg";

const About = () => {
    return (
        <>
            {/* Replace Jump with framer-motion */}
            <motion.div
                initial={{ y: -50 }}  // Start slightly above
                animate={{ y: 0 }}    // End at normal position
                transition={{ type: "spring", stiffness: 300, damping: 20 }}  // Spring animation
                className="about"
            >
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-conen">
                        <h1>About me</h1>
                        <p>
                            Aspiring Software Engineer with expertise in programming,
                            problem-solving, and software development methodologies. Proficient in
                            multiple programming languages and experienced in version control and
                            object-oriented design. Strong understanding of data structures and
                            algorithms. Skilled in web development with front-end and back-end
                            technologies. Committed to continuous learning and team collaboration.
                            Contributed to open-source projects and showcased personal software
                            projects. Seeking opportunities to utilize skills and drive innovation in the
                            technology industry.
                        </p>
                    </div>
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-image">
                        <img
                            src={profilePhoto}
                            alt="profile pic"
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default About;
