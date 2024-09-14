import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import RingLoader from "react-spinners/RingLoader";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false); // Add loading state

    // Handle submit button
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !msg) {
            toast.error("Please provide all fields.");
            return;
        }
        setLoading(true); // Show loader

        try {
            const res = await axios.post("http://localhost:8080/api/v1/portfolio/sendEmail", {
                name,
                email,
                msg,
            });
            if (res.data.success) {
                toast.success(res.data.message); // Show success popup
                setName("");
                setEmail("");
                setMsg("");
            } else {
                toast.error(res.data.message); // Show error popup
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred while sending the email.");
        } finally {
            setLoading(false); // Hide loader
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
                                    <LightSpeed>
                                        <img
                                            src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                                            alt="contact"
                                            className="image"
                                        />
                                    </LightSpeed>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <Rotate>
                                <div className="card2 d-flex card border-0 px-4 py-5">
                                    <div className="row">
                                        <div className="row">
                                            <h6>
                                                Contact With
                                                <BsLinkedin color="blue" size={30} className="ms-2" />
                                                <BsGithub color="black" size={30} className="ms-2" />
                                                <BsFacebook color="blue" size={30} className="ms-2" />
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
                                                {loading ? "Sending..." : "SEND MESSAGE"} {/* Show different text while loading */}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Rotate>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add ToastContainer to enable the popup notifications */}
            <ToastContainer />

            {/* Display RingLoader while loading */}
            {loading && (
                <div className="loading-container">
                    <RingLoader color={"#36D7B7"} loading={loading} size={60} />
                </div>
            )}
        </>
    );
};

export default Contact;
