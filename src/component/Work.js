import React, { useEffect, useState } from "react";
// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaBootstrap, FaDatabase } from "react-icons/fa";
import Skills from "./Skills";
import Pro from "./Pro";
// images
import Img1 from "../assets/wp1917119-netflix-wallpapers.jpg";
import Img2 from '../assets/weather.jpg';
import Img3 from "../assets/currency.jpg";
import Img4 from '../assets/pp.png';

// Skills data
const skill = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS3', icon: <FaCss3 className="text-blue-600" /> },
    { name: 'JAVASCRIPT', icon: <FaJs className="text-orange-500" /> },
    { name: 'REACT', icon: <FaReact className="text-blue-900" /> },
    { name: 'BOOTSTRAP', icon: <FaBootstrap className="text-blue-900" /> },
    { name: 'SQL', icon: <FaDatabase className="text-blue-900" /> }
];

// Programming skills data
const pro = [
    { name: 'PYTHON', icon: <FaPython className="text-orange-900" /> },
    { name: 'JAVASCRIPT', icon: <FaJs className="text-blue-900" /> },
];

// Project data
const projects = [
    {
        id: 1,
        title: "IMDb-Movies",
        image: Img1,
        link: "https://mohmmadfarman.github.io/MovieRating/",
    },
    {
        id: 2,
        title: "Weather-App",
        image: Img2,
        link: "https://mohmmadfarman.github.io/NewWeather/",
    },
    {
        id: 3,
        title: "Currency Converter",
        image: Img3,
        link: "https://mohmmadfarman.github.io/Currency/",
    },
    {
        id: 4,
        title: "Password Generator",
        image: Img4,
        link: "https://mohmmadfarman.github.io/PasswordGenerotor/",
    },
];

function Work() {
    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        setAnimationDone(true);
    }, []);

    return (
        <section id="work" className="section text-black py-12">
            <div className="container mx-auto">
                {/* Section Title */}
                <div className="text-center mb-1 mt-14">
                    <h2 className="md: text-3xl text-pink-600 font-semibold mb-1 mt-8 pb-2 sm:text-3xl mobile:text-[23px]">My Latest Work & Skills</h2>
                    <div className="flex justify-center items-center">
                        <div className="w-[600px] h-[3px] bg-yellow-400 text-center mb-3"></div>
                    </div>
                    <p className=" md:text-white text-xl mb-2 sm:text-xl sm:text-white mobile:text-[18px] mobile:text-white">
                        I have successfully worked on various projects including a Weather App, IMDb movie app, and Currency Converter. Here are the skills I specialize in: HTML, CSS, JavaScript, Tailwind, and React.
                    </p>
                </div>

                {/* Skills Section */}
                <motion.div 
                    className="skills-section"
                    variants={fadeIn('left', 0.1)} 
                    initial="hidden" 
                    whileInView={animationDone ? "show" : "hidden"} 
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {/* Front-End Skills */}
                        <div className="p-4 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-center">Front-End Skills</h3>
                            <div className="flex flex-wrap justify-around">
                                {skill.map((skill, index) => (
                                    <Skills skill={skill} key={index} />
                                ))}
                            </div>
                        </div>

                        {/* Programming Skills */}
                        <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-center">Programming Skills</h3>
                            <div className="flex flex-wrap justify-around">
                                {pro.map((pro, index) => (
                                    <Pro pro={pro} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Project Section */}
                <h1 className=" md:text-center text-pink-600 md: text-3xl font-semibold pt-8 sm:text-2xl mobile:text-[24px] ml-7 mobile:mb-2">My Latest Projects</h1>
                {/* line */}
                <div className="flex justify-center items-center">
                    <div className="w-[600px] h-[3px] bg-yellow-400 text-center mt-1 mb-2"></div>
                </div>

                {/* Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-3 mb-8">
                    {projects.map((project) => (
                        <motion.a
                            key={project.id}
                            variants={fadeIn('right', 0.3)}
                            initial="hidden"
                            whileInView={animationDone ? "show" : "hidden"}
                            viewport={{ once: true, amount: 0.7 }}
                            href={project.link}
                            target="_blank"
                            className="relative group w-full h-38 lg:h-40 overflow-hidden rounded-lg shadow-lg border-2 border-white"
                        >
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 group-hover:blur-sm transition-all duration-1000 ease-in-out"
                            />
                            {/* title */}
                            <div className="absolute bottom-0 p-4 text-[white] font-bold">
                                <h3 className="text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-1000 ease-in-out">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Work;
