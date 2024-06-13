import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function HowItWorks() {
    return (
        <section className='bg-greenbg px-8 py-10 lg:px-12 xl:px-20 2xl:px-80 lg:py-20' id="how-it-works">
            <div className='text-center mb-8 lg:mb-20'>
                <div className='text-white text-[40px] font-bold'>How it works</div>
            </div>
            <AnimationOnScroll animateIn="animate__fadeIn" className='flex flex-col text-center gap-12 text-white'>
                <div>
                    <div className="mb-2 text-[20px] md:text-[25px]">1. Download and Signup</div>
                    <div className="text-[16px] md:text-[18px]">
                        Download the Trovi app from Google playstore and
                        and create aan account with your email and password.
                    </div>
                </div>

                <div>
                    <div className="mb-2 text-[20px] md:text-[25px]">2. Select your Location</div>
                    <div className="text-[16px] md:text-[18px]">
                        Choose your state and city to find your Trovi stores
                        store to shop from.
                    </div>
                </div>

                <div>
                    <div className="mb-2 text-[20px] md:text-[25px]">3. Place your Order</div>
                    <div className="text-[16px] md:text-[18px]">
                        Add products from your favourite store's cart and make payment.
                    </div>
                </div>

                <div>
                    <div className="mb-2 text-[20px] md:text-[25px]">4. Delivered to you</div>
                    <div className="text-[16px] md:text-[18px]">
                        A Trovi shopper will shop the products you Ordered and deliver them to you on time and with care.
                    </div>
                </div>
            </AnimationOnScroll>

            {/* <AnimationOnScroll animateIn="animate__zoomIn" className='text-center'>
                        <ScrollLink
                            smooth={true}
                            duration={1000}
                            to={"select-your-city"}
                            className='uppercase px-4 py-2 border-solid border-green hover:border-2 font-semibold rounded-[20px] bg-green text-white hover:bg-white hover:text-green text-[16px]'
                            style={{ textDecoration: "none" }}
                            >
                            Place an order
                        </ScrollLink>
                    </AnimationOnScroll> */}


        </section>
    );
}