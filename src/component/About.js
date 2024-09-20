import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img from "../assets/port_LE_auto_x2-01[2].png";

function About() {
    const [ref, inView] = useInView({
        threshold: 0.3,
    });
    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        setAnimationDone(true);
    }, []);

    return (
        <section className="section" id="about" ref={ref}>
            <div className="container mx-auto flex flex-col md:flex-row items-center px-4 lg:px-0">
                {/* Image */}
                <motion.div
                    className="flex-1 bg-contain bg-no-repeat mix-blend-lighten bg-top"
                    initial="hidden"
                    animate={inView && animationDone ? "visible" : "hidden"}
                    variants={fadeIn}
                >
                    <img
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={animationDone ? 'show' : 'hidden'}
                        viewport={{ once: true, amount: 0.7 }}
                        id="im"
                        className="block w-full sm:w-auto sm:h-[400px] md:h-[400px] mobile:h-[300px]"
                        src={img}
                        alt="About me"
                    />
                </motion.div>
                {/* Text */}
                <motion.div
                    className="flex-1 mt-8 md:mt-0 md:ml-8 px-4 lg:px-0"
                    initial="hidden"
                    animate={inView && animationDone ? "visible" : "hidden"}
                    variants={fadeIn}
                >
                    <motion.h2
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={animationDone ? 'show' : 'hidden'}
                        viewport={{ once: true, amount: 0.7 }}
                        className="h2 font-bold mt-16 text-center md:text-left md:text-3xl
                        sm:text-3xl mobile:text-[25px]"
                    >
                        About me.
                    </motion.h2>
                    <motion.h3
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={animationDone ? 'show' : 'hidden'}
                        viewport={{ once: true, amount: 0.7 }}
                        className="text-xl mt-4  mb-4 text-center md:text-left"
                    >
                        I'm a Freelancer Front-end Developer with over 1 year of experience
                    </motion.h3>
                    <motion.p
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={animationDone ? 'show' : 'hidden'}
                        viewport={{ once: true, amount: 0.7 }}
                        className="mt-2 text-red text-center md:text-left"
                    >
                        I specialize in HTML, CSS, JavaScript, and modern frameworks like React, crafting seamless digital experiences for clients. Passionate about clean code and innovative design, I continuously aim to enhance my skills and stay updated with the latest trends in web development.
                    </motion.p>
                    {/* Stats */}
                    <div className="mt-6 flex flex-col md:flex-row gap-4 sm:flex justify-start items-center">
                        <div className="text-[30px] font-tertiary text-gradient mb-2 text-center">
                            {inView && animationDone ? <CountUp start={0} end={1} duration={6} /> : null}
                            <div className="font-primary text-[20px] tracking-[2px]">
                                Years of <br />
                                Experience
                            </div>
                        </div>
                        {/* Second */}
                        <div className="text-[30px] font-tertiary text-gradient mb-2 text-center sm:text-[40px]">
                            {inView && animationDone ? <CountUp start={0} end={5} duration={6} /> : null}
                            <div className="font-primary text-[20px] tracking-[2px]">
                                Projects <br />
                                Completed
                            </div>
                        </div>
                        {/* Third */}
                        <div className="text-[30px] font-tertiary text-gradient mb-2 text-center">
                            {inView && animationDone ? <CountUp start={0} end={8} duration={6} /> : null}
                            <div className="font-primary text-[20px] tracking-[2px]">
                                Number of <br />
                                Skills
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap max-w-max gap-x-6 items-center justify-center gap-4 mb-12 mt-12 mx-auto lg:mx-0 sm:mt-8">
                        <motion.button
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={animationDone ? 'show' : 'hidden'}
                            viewport={{ once: true, amount: 0.7 }}
                            className="btn btn-lg lg:text-2xl font-bold md: text-xl sm:text-xl mobile:text-[17px]"
                        >
                            Contact Us
                        </motion.button>
                        <motion.a
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={animationDone ? 'show' : 'hidden'}
                            viewport={{ once: true, amount: 0.7 }}
                            href="#"
                            className="text-gradient btn-link text-2xl z-50 relative"
                        >
                            My Portfolio
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
