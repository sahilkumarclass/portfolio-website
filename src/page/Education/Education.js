import React from "react";
import { MdSchool } from "react-icons/md";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
    return (
        <>
            <div className=" education" id="education">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Education Details
                </h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="2022 - 2026"
                        iconStyle={{ background: "#138781", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">B.Tech</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Lovely Professional University, IN
                        </h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="2020 - 2022"
                        iconStyle={{ background: "#138781", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Senior Secondary</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            DAV GAYA, IN
                        </h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Education;