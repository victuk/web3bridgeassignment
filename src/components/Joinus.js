import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from "react-router-dom";

export default function JoinUs() {
    return (
        <section className='bg-greenbg px-8 py-10 lg:px-12 xl:px-20 2xl:px-80 lg:py-20' style={{borderBottom: "4px solid white"}}>
            <AnimationOnScroll animateIn="animate__fadeIn" className='flex flex-col text-center gap-12 text-white'>
                <div className='text-center mb-8 lg:mb-20'>
                    <div className='text-white text-[40px]'>Join Us</div>
                    <div className='text-white text-[30px] md:text-[35px] text-[#E3E3E3]'>Become a vendor</div>
                    <div className="text-[#E3E3E3] text-[20px] md:text-[25px] mt-6">
                        Whether you want to grow your online presence, increase
                        your sales or reach more customers, Trovi offers the best
                        solution for your business to thrive. Register your store
                        today and unlock the potential for success and growth!
                    </div>
                    <ScrollLink smooth="true" to={"skip-the-queue"}className="inline-block border-none rounded-[4px] bg-white text-green px-6 py-3 text-[18px] my-8">Contact Us</ScrollLink>
                    <div className='text-white text-[30px] text-[#E3E3E3]'>Ride for Trovi</div>
                    <div className="text-[#E3E3E3] text-[20px] md:text-[25px] mt-6">Join Trovi as a Rider and deliver satisfaction to anyone!</div>
                    <Link to={"/joinuspage"} className="inline-block border-none rounded-[4px] bg-white text-green px-6 py-3 text-[18px] my-8" style={{textDecoration: "none"}}>Apply Here</Link>
                </div>
            </AnimationOnScroll>


        </section>
    );
}