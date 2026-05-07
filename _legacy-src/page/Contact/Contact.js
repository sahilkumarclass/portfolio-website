import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./Contact.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si"; // Import LeetCode icon
import RingLoader from "react-spinners/RingLoader";
import { motion } from "framer-motion";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle submit button
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !msg) {
            toast.error("Please provide all fields.");
            return;
        }
        setLoading(true);

        try {
            // First attempt to send the message to the first API endpoint
            const res = await axios.post(
                "https://portfolio-website-backend-production-0f84.up.railway.app/api/v1/portfolio/sendEmail" ||
                "https://portfolio-website-backend-1-2rbd.onrender.com/api/v1/portfolio/sendEmail",
                { name, email, msg }
            );

            if (res.data.success) {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setMsg("");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred while sending the email.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="contact" id="contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <motion.img
                                        src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                                        alt="contact"
                                        className="image"
                                        initial={{ x: -100 }}
                                        animate={{ x: 0 }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <motion.div
                                className="card2 d-flex card border-0 px-4 py-5"
                                initial={{ rotate: -180 }}
                                animate={{ rotate: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                                <div className="row">
                                    <div className="row">
                                        <h6>
                                            Contact With
                                            <a href="https://www.linkedin.com/in/sahil-kumar-16617224a/" target="_blank" rel="noopener noreferrer">
                                                <BsLinkedin color="blue" size={30} className="ms-2" />
                                            </a>
                                            <a href="https://github.com/sahilkumarclass" target="_blank" rel="noopener noreferrer">
                                                <BsGithub color="black" size={30} className="ms-2" />
                                            </a>
                                            <a href="https://leetcode.com/u/sahilkumarclass10/" target="_blank" rel="noopener noreferrer">
                                                <SiLeetcode color="orange" size={30} className="ms-2" />
                                            </a>
                                        </h6>
                                    </div>
                                    <div className="row px-3 mb-4">
                                        <div className="line" />
                                        <small className="or text-center">OR</small>
                                        <div className="line" />
                                    </div>
                                    <div className="row px-3">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your Name"
                                            className="mb-3"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter Your Email Address"
                                            className="mb-3"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <textarea
                                            name="msg"
                                            placeholder="Write your message"
                                            className="mb-3"
                                            value={msg}
                                            onChange={(e) => setMsg(e.target.value)}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <button className="button" onClick={handleSubmit} disabled={loading}>
                                            {loading ? "Sending..." : "SEND MESSAGE"}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />

            {loading && (
                <div className="loading-container">
                    <RingLoader color={"#36D7B7"} loading={loading} size={60} />
                </div>
            )}
        </>
    );
};

export default Contact;
