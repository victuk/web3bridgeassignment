import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function GetTheApp() {
    return(
        <section className='flex flex-col gap-4 lg:gap-6 md:flex-row md:justify-between items-center px-8 py-10 lg:px-12 xl:px-20 lg:py-20 2xl:px-80'>
                <AnimationOnScroll animateIn='animate__fadeInLeft'>
                    <div className='text-[25px] lg:text-[35px] font-semibold pb-2 lg:pb-6 text-green'>Get the Trovi app!</div>
                    <div className='text-[18px] lg:text-[30px] text-green'>
                    Trovi's app for shopping will <span className='font-bold'>soon</span> be available on the Playstore & Appstore for buyers. Stay tuned!
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInRight'>
                    <img src='/Mockup-2.png' className='h-[250px] lg:h-[300px] xl:h-[650px]'/>
                </AnimationOnScroll>
            </section>
    );
}