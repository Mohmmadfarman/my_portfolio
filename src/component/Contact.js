import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaPhoneAlt,FaEnvelope,FaMapMarkedAlt } from "react-icons/fa";
import Address from "./Address";

const info=[
    {
        icon:<FaPhoneAlt/>,
        title:'Phone',
        desc:'(+40) 321 654 786'
    },
    {
        icon:<FaEnvelope/>,
        title:'Email',
        desc:'mohmmadfarman225@gmail.com'
    },
    {
        icon:<FaMapMarkedAlt/>,
        title:'Address',
        desc:`Station road near LIC officet Tilhar Pin Code:242307`
    },
]



function Contact(){
    return(
        <section id="contact" className="py-16 lg:section">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row mt-10">
                    {/* text */}
                    <motion.div
                    
                    variants={fadeIn('right', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                     className="flex-1"> 
                        <div>
                            <h4 className="text-3xl uppercase text-pink-500 font-medium mb-2 tracking-wide">Get in touch</h4>
                            <h2 className="text-[40px]  lg:text-[48px] mt-4 leading-none">Let's work <br/> together!</h2>
                            {
                                info.map((data)=>{
                                    console.log(data);
                                    return(
                                        <Address data={data}/>
                                    )
                                    
                                })
                            }
                            
                           
                        </div>
                    </motion.div>
                    {/* form */}
                    <motion.form
                    variants={fadeIn('left', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                     onSubmit={(e)=>{
                        e.preventDefault()
                    }} className=" lg:w-[440px] border rounded-2xl flex flex-col gap-y-8  p-4 h-[500px] items-start pt-14 sm:mt-6 mobile:mt-10" >
                        <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-black transition-all text-2xl font-light" type="mail" placeholder="Your email" />
                        {/*  */}
                        <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-black transition-all text-2xl font-light" type="mail" placeholder="Your email" />
                        {/*  */}
                        <textarea className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-black transition-all resize-none mb-12 text-2xl font-light" placeholder="Your message"></textarea>

                        <button className="btn btn-lg bg-pink-600 text-2xl font-light">Send message</button>

                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default Contact;