import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function HeroSection() {
    return (
        <div id='home-section'>
            <section className="flex flex-col lg:flex-row justify-center items-center md:items-start lg:items-center text-white gap-4 lg:gap-20 px-8 lg:px-12 xl:px-20 2xl:px-80 py-10 lg:py-24 h-screen">
                <div className='flex flex-col gap-8'>
                    <div className="text-[35px] lg:text-[30px] xl:text-[50px] font-black text-left lg:text-left font-bold text-center">
                        Airtime and cheap data directly under your fingertips
                    </div>
                    <div className='text-left'>
                        With this service, you can buy airtime and data simply with few clicks from your WhatsApp app directly.
                    </div>
                    <button className='w-fit px-6 py-2 bg-green text-white border-none font-bold rounded-sm'>Get Started</button>
                    {/* <div className='flex justify-center'>
                        <img src='/playstore.png' />
                    </div> */}
                </div>
                <img src="/phone_sample.png" />
            </section>
        </div>

    );
}