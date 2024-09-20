import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import Address from "./Address";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        desc: '(+40) 321 654 786'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        desc: 'mofarman8400@gmail.com'
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Address',
        desc: `Station road near LIC office Tilhar Pin Code:242307`
    },
];

function Contact() {
    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        setAnimationDone(true);
    }, []); // Runs only once after the first render

    return (
        <section id="contact" className="py-16 lg:section">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row mt-10">
                    {/* text */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={animationDone ? "show" : "hidden"} // Animation runs only once
                        viewport={{ once: true, amount: 0.7 }} // Animation should not repeat
                        className="flex-1"
                    >
                        <div>
                            <h4 className=" md:text-3xl uppercase text-pink-500 font-medium mb-2 tracking-wide sm:text-2xl mobile:text-2xl">Get in touch</h4>
                            <h2 className="md: text-[40px] lg:text-[48px] mt-4 leading-none sm:text-[35px] mobile:text-[29px]">Let's work <br /> together!</h2>
                            {
                                info.map((data, index) => (
                                    <Address key={index} data={data} />
                                ))
                            }
                        </div>
                    </motion.div>
                    {/* form */}
                    <motion.form
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={animationDone ? "show" : "hidden"} // Animation runs only once
                        viewport={{ once: true, amount: 0.7 }} // Animation should not repeat
                        onSubmit={(e) => {
                            e.preventDefault();
                        }} className="lg:w-[440px] border rounded-2xl flex flex-col gap-y-8 p-4 h-[500px] items-start pt-14 sm:mt-6 mobile:mt-10"
                    >
                        <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-black transition-all md:text-2xl font-light sm:text-xl mobile:text-[15px]" type="email" placeholder="Your Username" />
                        <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-black transition-all md: text-2xl font-light sm:text-xl mobile:text-[15px]" type="email" placeholder="Your email" />
                        <textarea className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-black transition-all resize-none mb-12 md: text-2xl font-light sm:text-xl mobile:text-[15px]" placeholder="Your message"></textarea>
                        <button className="btn btn-lg bg-pink-600 md: text-2xl font-light sm:text-xl mobile:text-[15px]">Send message</button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
