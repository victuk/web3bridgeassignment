import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Footer() {
    return (
        <footer className='bg-greenbg px-8 py-10 md:p-20 lg:p-24'>
            <div className='text-center'>
                {/* <img src ={"/Trovi Png-02.png"} className="h-[40px] md:h-[60px] lg:h-[80px] mb-6 md:mb-10 lg:mb-20" /> */}
                <div className='flex justify-center gap-10 md:gap-60'>
                    <div>
                        {/* <div className='text-start md:text-center text-white font-bold text-md lg:text-[25px] mb-4 md:mb-10'>Quick Links</div> */}
                        <div className='list-none text-white flex flex-col gap-8 lg:text-[20px]'>
                            <div><ScrollLink smooth="true" to={"how-it-works"} style={{ textDecoration: "none", pointer: "cursor" }} className="text-white">How it works</ScrollLink></div>
                            <div><ScrollLink smooth="true" to={"top"} style={{ textDecoration: "none", pointer: "cursor" }} className="text-white">About us</ScrollLink></div>
                            <div><Link to={"/joinuspage"} style={{ textDecoration: "none", pointer: "cursor" }} className="text-white">Join us</Link></div>
                            <div><a href={"https://wa.me/message/DKVO2KZ3RRAOK1"} style={{ textDecoration: "none", pointer: "cursor" }} className="text-white" target="_blank" rel="noreferrer">Contact us</a></div>
                            <div><Link to={"/privacy-and-cookies-policy"} style={{ textDecoration: "none", pointer: "cursor" }} className="text-white">Privacy and cookies policy</Link></div>
                            <div><Link to={"/terms-of-use-and-contracting"} style={{ textDecoration: "none", pointer: "cursor" }} className="text-white">Terms of use</Link></div>
                            {/* <div><HashLink to={"/faqs#top"} style={{ textDecoration: "none" }} className="text-white">FAQ's</HashLink></div> */}
                            {/* <div><HashLink to={"/privacy-and-cookies-policy#top"} style={{ textDecoration: "none" }} className="text-white">Privacy & Cookies Privacy</HashLink></div> */}
                            {/* <div><HashLink to={"/terms-of-use-and-contracting#top"} style={{ textDecoration: "none" }} className="text-white">Terms of use</HashLink></div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-10 lg:pt-14 lg:text-[20px] text-white text-center">Copyright &copy; Trovi {new Date().getFullYear()}</div>
        </footer>
    );
}