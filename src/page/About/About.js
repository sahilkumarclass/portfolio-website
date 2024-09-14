import React from 'react';
import './About.css';
import Jump from "react-reveal/Jump";

const About = () => {
    return (
        <>
            <Jump>
                <div className="about">
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
                            <img src='https://media.licdn.com/dms/image/v2/D4D03AQFeVG6MgbqLPg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683881162161?e=1731542400&v=beta&t=MysUMUoy-JnP8vGD8wo8N0LNs50ULc3ThCQY73d5lHk'
                                alt='profile pic'
                            />
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    );
};

export default About;
