import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function DiscoverPerfectPlan() {
    return (
        <div id='home-section'>
            <section className="flex flex-col justify-start items-start md:items-start lg:items-start text-white gap-4 lg:gap-20 px-8 lg:px-12 xl:px-20 2xl:px-80 py-10 lg:py-24 h-screen">
                <div className='flex flex-col gap-8 font-bold text-[40px]'>Discover Affordable Data Plans</div>
                <div className='flex flex-col gap-8'>We offer the most efficient ways for you to purchase your MB. Why spend more, when you can spend less?</div>
                <div className='flex gap-20'>
                    <div>
                        <div className='text-[30px]'>200</div>
                        <div className='text-sm'>Happy Users</div>
                    </div>
                    <div>
                        <div className='text-[30px]'>200</div>
                        <div className='text-sm'>Daily Sales</div>
                    </div>
                    <div>
                        <div className='text-[30px]'>36</div>
                        <div className='text-sm'>State Coverage</div>
                    </div>
                </div>
            </section>
        </div>

    );
}