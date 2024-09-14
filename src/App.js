import React, { useState, useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader';
import About from "./page/About/About";
import Contact from "./page/Contact/Contact";
import Education from "./page/Education/Education";
import Projects from "./page/Project/Projects";
import Techstack from "./page/Techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import Layout from "./components/Layout/Layout";
import { useTheme } from "./Context/ThemeContext";
import Tada from "react-reveal/Tada";
import './SpinnerLoader.css';

const App = () => {
  const [theme] = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <RingLoader color={"#36D7B7"} loading={loading} size={60} /> {/* Use RingLoader */}
        </div>
      ) : (
        <div id={theme}>
          <Layout />
          <div className="container">
            <About />
            <Education />
            <Techstack />
            <Projects />
            <Contact />
          </div>
          <div className="footer pb-3 ms-3">
            <Tada>
              <h4 className="text-center">All Right Reserved 😍 SAHIL KUMAR &copy; 2024</h4>
            </Tada>
          </div>
          <ScrollToTop
            smooth
            color="#f29f67"
            style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
          />
        </div>
      )}
    </>
  );
};

export default App;
