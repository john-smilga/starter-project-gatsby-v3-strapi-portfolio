import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `With 22 years in web development, We deliver intuitive and fast websites, web portals, and other web solutions that bring about digital transformation and enhance business workflows.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Web design services comprise the processes of user interface (UI) and user experience (UX) design of any web-based solution. In each of its web design projects, We shrewdly balance the technology, visual aesthetics and business objectives, bringing you fast-loading, impactful and high-converting online experiences.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: `Mobile app development services cover end-to-end development of mobile apps, from business analysis and UI/UX design to mobile application testing and deployment or online market publication.`,
  },
]

export default services
