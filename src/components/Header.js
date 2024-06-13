import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

export default function Header() {

    const [menu, showMenu] = useState(false);

    const loc = useLocation();



    const toggleMenu = () => {
        showMenu(!menu);
    }

    return (
        <header className="flex justify-between h-[60px] items-center px-8 lg:px-12 xl:px-20 2xl:px-80 font-bold pt-8" id="top">
            <Link to={"/"}>
                <img src="/WhatsSub_logo.png" className={`h-[25px] lg:h-[50px]`} />
            </Link>
            {/* <ul className={`lg:flex flex-col ${menu ? "flex bg-white w-full left-0 text-center p-2 bottom-[-162px]" : "hidden"} lg:flex-row list-none lg:bottom-0 gap-2 lg:gap-14 text-green text-[14px] lg:text-[20px] absolute lg:relative lg:p-0`}> */}
            <ul className={`lg:flex flex-col lg:flex-row list-none lg:bottom-0 gap-2 lg:gap-14 text-green text-[14px] lg:text-[20px] lg:relative lg:p-0`}>
                {/* <li><ScrollLink to={"top"} smooth="true" style={{ textDecoration: "none" }} className="text-green">About Us <div className={`${loc.pathname == "/about" ? "block" : "hidden"} w-[40px] h-[4px] mr-auto ml-auto bg-green rounded`}></div></ScrollLink></li> */}
                <li><Link to={"/faqs"} smooth="true" style={{ textDecoration: "none" }} className="text-green">FAQ's <div className={`${loc.pathname == "/faqs" ? "block" : "hidden"} w-[40px] h-[4px] mr-auto ml-auto bg-green rounded`}></div></Link></li>
                {/* <li><ScrollLink to={"skip-the-queue"} smooth="true" style={{ textDecoration: "none" }} className="text-green">Contact Us <div className={`${loc.pathname == "/contact" ? "block" : "hidden"} w-[40px] h-[4px] mr-auto ml-auto bg-green rounded`}></div></ScrollLink></li> */}
            </ul>
            {/* <div className="block lg:hidden" onClick={toggleMenu}>
                <MenuIcon className="text-green" />
            </div> */}
            {/* <div className={`lg:flex justify-center ${menu ? "flex bottom-[-54px] pt-[20px] w-full bg-white left-0 absolute" : "hidden"}`}>
                <ScrollLink
                    smooth={true}
                    duration={1000}
                    to={"select-your-city"}
                    style={{ textDecoration: "none" }}
                    className="bg-green text-white rounded-[25px] border-none px-6 py-2 font-bold text-[14px] lg:text-[18px] cursor-pointer">
                    Shop
                </ScrollLink>
            </div> */}
        </header>
    );
}