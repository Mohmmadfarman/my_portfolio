import React from "react";
import { BiHomeAlt,BiUser} from 'react-icons/bi'
import {BsClipboard2Data,BsBriefcase,BsChatSquare} from 'react-icons/bs'
import {Link}  from 'react-scroll'


function Nav(){
    return(
       <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
        <div className="container mx-auto">
            <div className="w-full bg-[#814a4a62] h-[90px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center md:h-[90px] sm:h-[80px] sm:w-[90%] mobile:h-[78px] mobile:w-[96%]">
                <Link to="home"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                 className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <BiHomeAlt id="f"/>
                </Link> 
                <Link to="about" 
                 activeClass="active"
                 smooth={true}
                 spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <BiUser id="f"/>
                </Link>
                <Link to="services" 
                 activeClass="active"
                 smooth={true}
                 spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <BsClipboard2Data id="f"/>
                </Link>
                <Link to="work"
                 activeClass="active"
                 smooth={true}
                 spy={true}
                 className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <BsBriefcase id="f"/>
                </Link>
                <Link to="contact"
                 activeClass="active"
                 smooth={true}
                 spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <BsChatSquare id="f"/>
                </Link>

            </div>
        </div>
       </nav>
    );
}

export default Nav;