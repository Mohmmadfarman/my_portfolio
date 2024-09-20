import React from "react";
import Image from "../assets/h.png";
import { ToastContainer, toast } from 'react-toastify';
import { FaGithub, FaFacebook, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";
import resume from "./Frontend.pdf";

function Banner() {
   function fun() {
      toast.success("Download successfully", {
         position: 'top-center'
      });
   }

   return (
      <section id="home" className="section relative z-10 ">
         <div className="container mx-auto px-4 lg:px-8 relative z-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-8 lg:gap-x-12 relative z-30">
               
               <div className="flex-1 text-center lg:text-left relative z-40">
                  <motion.h1
                     variants={fadeIn('down', 0.3)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.7 }}
                     className="text-[30px] sm:text-[36px] lg:text-[44px] font-bold leading-[1] mb-5">
                     MOHD <span>FARMAN</span>
                  </motion.h1>
                  <div className="mb-6 text-[28px] sm:text-[32px] lg:text-[36px] font-secondary font-semibold uppercase leading-none">
                     <motion.span
                        variants={fadeIn('down', 0)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-white mr-4">I am a</motion.span>
                     <TypeAnimation
                        sequence={['Developer', 200, 'Designer', 200, 'Programmer', 200]}
                        speed={10}
                        className="text-accent"
                        wrapper="span"
                        repeat={Infinity}
                     />
                  </div>
                  <p className="mb-8 max-w-lg mx-auto lg:mx-0 text-base sm:text-lg lg:text-xl">
                     I'm a passionate software engineer specialized in crafting efficient and scalable solutions, delivering top-notch web applications, and providing freelance services that exceed client expectations. Let's connect and create something amazing together!
                  </p>
                  <div className="flex flex-wrap max-w-max gap-x-6 items-center justify-center gap-4 mb-12 mt-12 mx-auto lg:mx-0">
                     <a href={resume} download={resume} target="_blank">
                        <motion.button onClick={fun}
                           variants={fadeIn('right', 0.3)}
                           initial="hidden"
                           whileInView={"show"}
                           viewport={{ once: false, amount: 0.7 }}
                           className="btn btn-lg text-lg sm:text-xl font-bold flex flex-row justify-center items-center gap-5 px-6 py-2">
                           Download CV
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-download">
                              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                              <path d="M7 11l5 5l5-5"></path>
                              <path d="M12 4l0 12"></path>
                           </svg>
                        </motion.button>
                     </a>

                     <motion.a
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        href="#" className="text-gradient btn-link text-2xl z-50 relative">My Portfolio</motion.a>
                  </div>

                  <motion.div
                     variants={fadeIn('down', 0.3)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.7 }}
                     className="flex flex-wrap text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 relative z-50">
                     <a href="https://github.com/Mohmmadfarman" target="_blank" rel="noopener noreferrer"><FaGithub className="text-4xl" /></a>
                     <a href="#"><FaFacebook className="text-4xl" /></a>
                     <a href="https://www.google.com" target="_black"><FaWhatsapp className="text-4xl" /></a>
                     <a href="https://linkedin.com/in/mo-farman-88399224b" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-4xl" /></a>
                  </motion.div>
               </div>

               <motion.div
                  variants={fadeIn('down', 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="relative w-400 h-400 mx-auto mt-2 flex flex-col justify-center items-center sm:mr-10"  id="box">

                  <div className="  absolute inset-0 border-5 border-white border-dotted rounded-full animate-circle w-[300px] h-[300px]"></div>

                  <motion.img
                     variants={fadeIn('down', 0.2)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: false, amount: 0.7 }}
                     src={Image}
                     alt="Avatar"
                     className="relative w-44 h-44 sm:w-[258px] sm:h-[280px] object-cover rounded-full z-10 mb-20 mr-[100px]  mx-auto my-auto" id="img" />
               </motion.div>
            </div>
         </div>
         <ToastContainer />
      </section>
   );
}

export default Banner;
