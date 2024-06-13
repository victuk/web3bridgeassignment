import { useLocation, useParams, useRoutes } from "react-router-dom";
import GetTheApp from "../components/GetTheApp";
import SelectYourCity from "../components/SelectYourCity";
import BorderLayout from "../layouts/BorderLayout";
import Layout from "../layouts/Layout";

export default function StroesInACity() {

    const {city} = useParams();

    const stores = [
        {
            picURL: "/playstore.png",
            storeName: "Wisdom Ventures Supermarket",
            location: "No 16 Uqua Road, Eket City",
            city: "eket",
            phoneNumber: "09166188658",
            whatsappLink: "https://wa.link/nmsfe6"
        }
    ];

    const filteredStore = stores.filter((store => store.city == city));

    const toCaps = (val) => {
        return val[0].toLocaleUpperCase() + val.slice(1);
    }

    return (
        <Layout>

            <BorderLayout className={`mx-8 lg:mx-40 p-6 lg:p-20 my-10 lg:my-40 2xl:m-80`}>
                <div className="mt-8 md:mt-14 mb-2 md:mb-8 font-bold text-[20px] md:text-[25px] text-green text-center md:text-left">
                    Trovi Stores in {toCaps(city)} city
                </div>
                <div className="mb-6 md:mb-12 lg:mb-20 text-green p-4 md:p-10 shadow-2xl rounded-[20px]">
                    {filteredStore.map((store) => {
                        return (
                            <div>
                                <img src={`${store.picURL}`} className="w-full rounded-[20px]" />
                                <div className="font-bold pt-10 pb-2 text-[20px] md:text-[26px] lg:text-[30px]">{store.storeName}</div>
                                <div className="text-[16px] md:text-[20px]">{store.location}</div>
                                <div className="flex justify-center pt-10 md:pt-16 lg:pt-20 pb-6 md:pb-10">
                                    <a href={store.whatsappLink} className="flex items-center bg-green text-white py-1 px-4 md:px-6 lg:px-10 border-green border-[1px] border-solid hover:bg-white hover:text-green rounded-[25px] text-[16px] font-bold no-underline transition-all duration-500" target={`_blank`} rel="noopener noreferrer nofollow">Start shopping <img src="/WhatsApp.png" className="h-[30px] ml-4" /></a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </BorderLayout>
            <SelectYourCity />
            <GetTheApp />
        </Layout>
    );
}