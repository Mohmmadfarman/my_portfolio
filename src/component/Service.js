import React, { useEffect, useState } from "react";
// icon
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";

// services data
const services = [
    {
        name: 'UI/UX Design',
        des: 'Creating intuitive and visually engaging user experiences through thoughtful design, focusing on functionality and aesthetics.',
        link: 'Learn more..'
    },
    {
        name: 'Development',
        des: 'Creating websites that are visually appealing, easy to use, and optimized for a smooth user experience.',
        link: 'Learn more..'
    },
    {
        name: 'Freelancing',
        des: 'Delivering custom web solutions that blend creativity and functionality to meet client needs in freelance projects.',
        link: 'Learn more..'
    },
    {
        name: 'Database',
        des: 'Organizing and managing data efficiently to support applications and improve decision-making processes.',
        link: 'Learn more..'
    },
];

function Service() {
    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        setAnimationDone(true);
    }, []);

    return (
        <section id="services" className="section">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row mt-8">
                    {/* text & image */}
                    <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-11 lg:mb-0">
                        <motion.h2
                            variants={fadeIn('right', 0.2)}
                            initial='hidden'
                            whileInView={animationDone ? 'show' : 'hidden'}
                            viewport={{ once: true, amount: 0.7 }}
                            className=" md:text-[37px] font-semibold mb-1 mt-32 sm:text-[35px] mobile:text-[26px]">What I Do.</motion.h2>

                        <div className="flex justify-start">
                            <div className="w-[300px] h-[3px] bg-yellow-400 mt-3"></div>
                        </div>

                        <motion.h3
                            variants={fadeIn('right', 0.2)}
                            initial='hidden'
                            whileInView={animationDone ? 'show' : 'hidden'}
                            viewport={{ once: true, amount: 0.7 }}
                            className="md:text-2xl max-w-[455px] sm:text-xl mb-10 mt-8">I’m a Freelance Front-end Developer with over a year of experience in building dynamic, responsive websites and web applications. My passion for clean, efficient code and user-centric design drives me to continually improve and keep up with the latest industry trends.
                        </motion.h3>
                        <motion.button
                            variants={fadeIn('left', 0.2)}
                            initial='hidden'
                            whileInView={animationDone ? 'show' : 'hidden'}
                            viewport={{ once: true, amount: 0.7 }}
                            className="btn btn-sm md: text-2xl sm:text-xl mobile:text-[20px]">See My Work</motion.button>
                    </div>
                    {/* services */}
                    <div>
                        {/* services list */}
                        <div className="flex-1 mt-14">
                            {services.map((service, index) => {
                                return (
                                    <div className="border-b border-white/20 h-[146px] mb-[10px] flex" key={index}>
                                        <motion.div
                                            variants={fadeIn('right', 0.2)}
                                            initial='hidden'
                                            whileInView={animationDone ? 'show' : 'hidden'}
                                            viewport={{ once: true, amount: 0.7 }}
                                            className="max-w-[476px]"
                                        >
                                            <h4
                                                variants={fadeIn('left', 0.2)}
                                                initial='hidden'
                                                whileInView={animationDone ? 'show' : 'hidden'}
                                                viewport={{ once: true, amount: 0.7 }}
                                                className=" md:text-[28px] text-accent tracking-wider font-primary font-semibold mb-2 sm:text[28px] mobile:text-[22px]">{service.name}</h4>
                                            <p
                                                variants={fadeIn('right', 0.2)}
                                                initial='hidden'
                                                whileInView={animationDone ? 'show' : 'hidden'}
                                                viewport={{ once: true, amount: 0.7 }}
                                                className="font-secondary leading-tight">{service.des}</p>
                                        </motion.div>
                                        {/* links */}
                                        <div className="flex flex-col flex-1 items-end">
                                            <a
                                                variants={fadeIn('down', 0.2)}
                                                initial='hidden'
                                                whileInView={animationDone ? 'show' : 'hidden'}
                                                viewport={{ once: true, amount: 0.7 }}
                                                className="btn w-9 h- mb-[19px] mt-6 pt-3 flex justify-center items-center" href="#"><BsArrowUpRight /></a>
                                            <a
                                                variants={fadeIn('down', 0.2)}
                                                initial='hidden'
                                                whileInView={animationDone ? 'show' : 'hidden'}
                                                viewport={{ once: true, amount: 0.7 }}
                                                className="text-gradient text-sm" href="#">{service.link}</a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
