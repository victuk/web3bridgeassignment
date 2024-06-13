import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function SkipTheQueueTwo() {

    const linkRef = useRef(null);

    return (
        <section className='bg-greenbg px-8 py-10 lg:px-12 xl:px-20 2xl:px-80 lg:py-20'>
            <AnimationOnScroll animateIn="animate__fadeIn" className='flex flex-col text-center gap-12 text-white'>
            <div className=' flex flex-col text-center mb-8 lg:mb-20 gap-4'>
                    <div className='text-white text-[30px] md:text-[40px]'>Skip the queue, use Trovi.</div>
                    <div className='text-white text-[25px] md:text-[30px]'>Get the app soon!</div>
                    <div className='flex justify-center my-8'>
                        <img src='/get_the_app_soon.png' className="h-[40px] w-[120px] md:h-[60px] md:w-[200px] rounded-[16px]" />
                    </div>
                    <div className="flex gap-8 items-center justify-center">
                    <a href="https://wa.me/message/DKVO2KZ3RRAOK1" target="_blank" ref={linkRef}><img src="/whatsapp.png" className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100086372382444&mibextid=ZbWKwL " target="_blank" ref={linkRef}><img src="/facebook.png" className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]" /></a>
                        <a href="https://www.instagram.com/trovi_africa?igsh=anF6enFmMmdibzY5" target="_blank" ref={linkRef}><img src="/instagram.png" className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]" /></a>
                        <a href="https://x.com/troviafrica?t=vwzecFMu7pQU2bdwViPV4Q&s=09" target="_blank" ref={linkRef}><img src="/twitter.png" className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]" /></a>
                    </div>
                    <div className='flex justify-center flex-col pt-10 lg:pt-14 gap-4'>
                    <div><Link to={"/privacy-and-cookies-policy"} style={{ textDecoration: "none", pointer: "cursor" }} className="text-white">Privacy and cookies policy</Link></div>
                            <div><Link to={"/terms-of-use-and-contracting"} style={{ textDecoration: "none", pointer: "cursor" }} className="text-white">Terms of use</Link></div>
                            <div><a href={"https://wa.me/message/DKVO2KZ3RRAOK1"} style={{ textDecoration: "none", pointer: "cursor" }} className="text-white" target="_blank" rel="noreferrer">Contact us</a></div>
                    </div>
                </div>
            </AnimationOnScroll>

            <div className="flex justify-center text-sm lg:text-[20px] text-white text-center">Copyright &copy; Trovi {new Date().getFullYear()}</div>

        </section>
    );
}