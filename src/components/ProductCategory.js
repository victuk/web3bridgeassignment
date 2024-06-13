import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function ProductCategory() {


    const responsive = {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
        1440: { items: 3 },
        2560: { items: 4 },
    };


    const troviCategories = [
        {
            category: "Fruits & Vegetables",
            pic: "/playstore.png",
            circle: "/playstore.png",
            circleTwo: "/playstore.png",
            circleThree: "/playstore.png"
        },
        {
            category: "Diary & Eggs",
            pic: "/playstore.png",
            circle: "/playstore.png",
            circleTwo: "/playstore.png",
            circleThree: "/playstore.png"
        },
        {
            category: "Baked & Pastry",
            pic: "/playstore.png",
            circle: "/playstore.png",
            circleTwo: "/playstore.png",
            circleThree: "/playstore.png"
        },
        {
            category: "Frozen foods",
            pic: "/playstore.png",
            circle: "/playstore.png",
            circleTwo: "/playstore.png",
            circleThree: "/playstore.png"
        },
        {
            category: "Beverages",
            pic: "/playstore.png",
            circle: "/playstore.png",
            circleTwo: "/playstore.png",
            circleThree: "/playstore.png"
        },
        {
            category: "Alcohol",
            pic: "/playstore.png",
            circle: "/playstore.png",
            circleTwo: "/playstore.png",
            circleThree: "/playstore.png"
        },
    ];

    return (
        <section className='px-8 py-10 lg:px-12 xl:px-20 lg:py-20 2xl:px-80'>
            <div className='text-center pb-8 lg:pb-20'>
                <div className='px-4 py-1 rounded-[20px] border-[1px] border-green border-solid inline-block'>Product Categories on Trovi</div>
            </div>
            {/* <div className='grid grid-cols-3 gap-20'>
                    {troviCategories.map((category) => {
                        return (
                                <div className='border-[1px] border-green border-solid rounded-[20px] overflow-hidden pt-10'>
                                <img src={category.pic} className="w-full h-[220px]" />
                                <div className='pb-6 pt-8 px-4 font-semibold text-green'>{category.category}</div>
                            </div>
                        );
                    })}
                </div> */}
            <AliceCarousel
                // mouseTracking
                // touchTracking
                autoPlay
                infinite
                autoPlayInterval={1000}
                animationDuration={1000}
                animationType="slide"
                responsive={responsive}
                disableDotsControls
                disableButtonsControls
                items={troviCategories.map((category, index) => {
                    return (
                        <div className={`border-[1px] border-green border-solid rounded-[20px] overflow-hidden ${index == 0 ? "" : "pt-10"} mx-4 xl:mx-6 relative mx-4`} key={index}>
                            <img src={category.pic} className={`w-full relative z-[200] ${index == 0 ? "h-[calc(180px_+_2.5rem)] lg:h-[calc(160px_+_2.5rem)] xl:h-[calc(220px_+_2.5rem)] 2xl:h-[calc(280px_+_2.5rem)]" : "h-[180px] lg:h-[160px] xl:h-[220px] 2xl:h-[280px]"}`} />
                            <div className={`pb-6 pt-8 px-4 font-semibold text-green`}>{category.category}</div>
                            <img src={category.circle} className="w-40 h-40 top-[-10px] right-[-10px] absolute z-[100] absolute" />
                            <img src={category.circleTwo} className="w-10 h-10 top-[-5px] left-[-10px] absolute z-[100] absolute" />
                            <img src={category.circleThree} className="w-10 h-10 bottom-[-10px] left-[-10px] absolute z-[100] absolute" />
                        </div>
                    );
                })} />
        </section>
    );
}