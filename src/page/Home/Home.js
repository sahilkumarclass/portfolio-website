import React from 'react';
import { useTheme } from "../../Context/ThemeContext";
import Typewriter from 'typewriter-effect';
import Resume from '/Users/sahilkiumar/Desktop/Portfolio/client/src/assets/docs/Resume.pdf';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "/Users/sahilkiumar/Desktop/Portfolio/client/src/page/Home/Home.css";
import Fade from "react-reveal/Fade";
const Home = () => {
    const [theme, setTheme] = useTheme();
    //handle theme
    const handleTheme = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    };
    return (
        <>
            <div className='container-fluid home-container' id="home">
                <div className="theme-btn" onClick={handleTheme}>
                    {theme === "light" ? (
                        <BsFillMoonStarsFill size={30} />
                    ) : (
                        <BsFillSunFill size={30} />
                    )}
                </div>
                <div className='container home-content'>
                    <Fade right>
                        <h2>Hi 👋🏻 I'm a Sahil Kumar</h2>
                        <h1><Typewriter
                            options={{
                                strings: ['Aspiring Software Developer',
                                    'Passionate Coder',
                                    'Code Crafting',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h1>
                    </Fade>
                    <Fade bottom>
                        <div className="home-buttons">
                            <button className="btn btn-hire">Hire Me</button>
                            <a className="btn btn-cv" href={Resume} download="Resume.pdf">My Resume</a>
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    );
};

export default Home;