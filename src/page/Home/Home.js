import React from 'react';
import { useTheme } from "../../Context/ThemeContext";
import Typewriter from 'typewriter-effect';
import Resume from '/Users/sahilkiumar/Desktop/Portfolio/client/src/assets/docs/Resume.pdf';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";
import { motion } from "framer-motion"; // Import framer-motion

const Home = () => {
    const [theme, setTheme] = useTheme();

    // Handle theme
    const handleTheme = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    };

    return (
        <>
            <div className="container-fluid home-container" id="home">
                <div className="theme-btn" onClick={handleTheme}>
                    {theme === "light" ? (
                        <BsFillMoonStarsFill size={30} />
                    ) : (
                        <BsFillSunFill size={30} />
                    )}
                </div>

                <div className="container home-content">
                    {/* Replace Fade right with framer-motion slide-in animation */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }} // Start from the right
                        animate={{ x: 0, opacity: 1 }} // Slide into view
                        transition={{ type: "spring", stiffness: 50, duration: 0.8 }} // Spring effect for smooth motion
                    >
                        <h2>Hi 👋🏻 I'm Sahil Kumar</h2>
                        <h1>
                            <Typewriter
                                options={{
                                    strings: ['Aspiring Software Developer', 'Passionate Coder', 'Code Crafting'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                    </motion.div>

                    {/* Replace Fade bottom with framer-motion fade-in effect */}
                    <motion.div
                        className="home-buttons"
                        initial={{ y: 100, opacity: 0 }} // Start from the bottom
                        animate={{ y: 0, opacity: 1 }} // Fade and slide up
                        transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
                    >
                        <button className="btn btn-hire">Hire Me</button>
                        <a className="btn btn-cv" href={Resume} download="Resume.pdf">My Resume</a>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Home;
