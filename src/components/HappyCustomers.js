import AliceCarousel from 'react-alice-carousel';

export default function HappyCustomers() {

    const items = [
        <div className="item w-full h-[200px] flex flex-col justify-center items-center text-center gap-8" data-value="1">
            <div className='font-s'>This service has made it easy for me to buy very affordable data subscriptions</div>
            <div>Salome</div>
        </div>,
        <div className="item w-full h-[200px] flex flex-col justify-center items-center text-center gap-8" data-value="1">
            <div className='font-s'>This service has made it easy for me to buy very affordable data subscriptions</div>
            <div>Salome</div>
        </div>,
        <div className="item w-full h-[200px] flex flex-col justify-center items-center text-center gap-8" data-value="1">
            <div className='font-s'>This service has made it easy for me to buy very affordable data subscriptions</div>
            <div>John</div>
        </div>,
        <div className="item w-full h-[200px] flex flex-col justify-center items-center text-center gap-8" data-value="1">
            <div className='font-s'>This service has made it easy for me to buy very affordable data subscriptions</div>
            <div>Peter</div>
        </div>,
        <div className="item w-full h-[200px] flex flex-col justify-center items-center text-center gap-8" data-value="1">
            <div className='font-s'>Simple but powerful</div>
            <div>James</div>
        </div>,
    ];

    return (
        <div className="bg-lightgreenbg px-8 py-10 lg:px-12 xl:px-20 2xl:px-80 lg:py-20">
            <div className="pb-2 md:py-4 text-center text-[#29B256] font-bold text-[30px] md:text-[40px]">Happy Customers</div>
            <div className="pb-8 md:pb-12 text-center text-[#29B256] text-[18px] md:text-[30px]">Hear from our customers:</div>
            <AliceCarousel
                autoPlay
                // autoPlayControls
                autoPlayStrategy="none"
                autoPlayInterval={4000}
                animationDuration={1000}
                animationType="slide"
                infinite
                touchTracking={false}
                disableDotsControls
                disableButtonsControls
                items={items}
            />
        </div>
    );
}