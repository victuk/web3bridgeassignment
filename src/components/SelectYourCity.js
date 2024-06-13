import { useNavigate, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export default function SelectYourCity() {

    const navigate = useNavigate();

    return (
        <section className={`px-8 lg:px-12 xl:px-20 2xl:px-80 bg-grey py-10 lg:py-20`} id="select-your-city">
                <div className='text-center'>
                    <div className='bg-white border-green border-[1px] border-solid text-[16px] inline-block px-4 py-1 rounded-[20px] border-[1px_solid_red] text-green'>Select your city</div>
                    <div className='pt-10 lg:pt-20 flex gap-10 lg:gap-20 xl:gap-40 justify-center'>
                        <div className="flex flex-col gap-4">
                            <HashLink to="/stores-in-a-city/eket#top" className='bg-[#29B357] border-[1px] text-[20px] border-solid border-green text-white hover:text-green hover:bg-white px-6 uppercase py-1 rounded-[20px] no-underline'>Eket</HashLink>
                            <div className="text-sm text-[#29B357] font-bold">Active</div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Link to="#" className='bg-[#29B357] border-[1px] text-[20px] border-solid border-green text-white hover:text-green hover:bg-white px-6 uppercase py-1 rounded-[20px] no-underline'>Uyo</Link>
                            {/* <HashLink to="/stores-in-a-city/eket#top" className='bg-[#29B357] border-[1px] text-[20px] border-solid border-green text-white hover:text-green hover:bg-white px-6 uppercase py-1 rounded-[20px] no-underline'>Uyo</HashLink> */}
                            <div className="text-sm text-yellow font-bold">Coming Soon</div>
                        </div>
                    </div>
                </div>
            </section>
    );
}