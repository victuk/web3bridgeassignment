import { TypeAnimation } from 'react-type-animation';
import Carousel from 'react-material-ui-carousel'
import { useState } from 'react';
import axios from "axios";

export default function JoinTheWaitingList() {

    const [showModal, setShowModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [submitButtonMessage, setSubmitButtonMessage] = useState("Submit");

    const [usersName, setUsersName] = useState("");
    const [usersWhatsappNumber, setUsersWhatsappNumber] = useState("");

    const addToWaitingList = async () => {
        try {

            setSubmitButtonMessage("Loading...");

            const response = await axios.post("https://trovi-express.onrender.com/v1/waitinglist/", {
                usersName, usersWhatsappNumber
            });

            
            if (response.status == 200) {
                setShowModal(true);
                setUsersName("");
                setUsersWhatsappNumber("");
            }
            
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
            setErrorModal(true);
            setUsersWhatsappNumber("");
            setTimeout(() => {
                setErrorModal(false);
                setErrorMessage("");
            }, 5000);
        } finally {
            setSubmitButtonMessage("Submit");
        }
    }

    return (
        <section className={`px-8 lg:px-12 xl:px-20 2xl:px-80 py-10 lg:py-40 bg-lightgreenbg text-white`} style={{ borderBottom: "2px solid white" }} id='waiting-list'>

            <div className='text-center mb-10 md:mb-20'>
                <div className="text-[50px] lg:text-[60px] xl:text-[70px] text-green font-medium text-center" style={{ fontWeight: "700", fontStyle: "normal" }}>Join the waitlist today!</div>
            </div>

            <div className='flex justify-center mb-10 md:mb-20'>
                <img src='/get_the_app_soon.png' className='cursor-pointer h-[40px] w-[120px] md:h-[60px] md:w-[200px] rounded-[16px]' />
            </div>

            <div style={{ boxSizing: "border-box" }} className='mx-auto w-full md: w-[80%] lg:w-[750px]'>
                <div>
                    <div className='text-[18px] text-green'>Your name:</div>
                    <input className='bg-lightgreenbg w-full border-2 border-solid border-green rounded-[8px] px-2 py-4 mb-8' type='text' style={{ outline: "none" }} value={usersName} onChange={(e) => { setUsersName(e.target.value) }} />
                </div>
                <div>
                    <div className='text-[18px] text-green'>Phone Number : <img src='/WhatsApp.png' className='h-[20px] w-[20px]' /></div>
                    <input className='bg-lightgreenbg w-full border-2 border-solid border-green rounded-[8px] px-2 py-4 mb-8' type='tel' style={{ outline: "none" }} value={usersWhatsappNumber} onChange={(e) => { setUsersWhatsappNumber(e.target.value) }} />
                </div>
            </div>

            <div className='text-center'>
                <button className='bg-green text-white border-none rounded-[8px] w-fit py-3 px-8 text-[18px] hover:cursor-pointer' onClick={addToWaitingList}>{submitButtonMessage}</button>
            </div>

            <div className={`${showModal ? "block" : "hidden"} bg-[#000000]/[0.8] fixed top-0 left-0 h-screen w-full flex justify-center items-center`}>
                <div className='bg-white flex flex-col items-center gap-4 w-[350px] md:w-[600px] p-4 md:p-6 rounded-[20px]'>

                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='self-start hover:pointer-cursor' onClick={() => { setShowModal(false) }}>
                        <path d="M17.4493 30.5992C25.0623 30.5992 31.2912 24.3703 31.2912 16.7573C31.2912 9.14425 25.0623 2.91541 17.4493 2.91541C9.83627 2.91541 3.60742 9.14425 3.60742 16.7573C3.60742 24.3703 9.83627 30.5992 17.4493 30.5992Z" stroke="#929292" stroke-width="0.891071" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.5322 20.6745L21.3667 12.84" stroke="#929292" stroke-width="0.891071" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.3667 20.6745L13.5322 12.84" stroke="#929292" stroke-width="0.891071" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <img src='/check_mark.png' className='h-[80px] w-[80px] md:h-[200px] md:w-[200px]' />
                    <div className='text-[#000000] font-bold text-[25px] text-center'>Successful!</div>
                    <div className='text-[#000000] text-[18px] text-center'>We'll reach out to you soon!</div>
                    <button className='bg-green text-white rounded-[4px] py-3 px-6 hover:cursor-pointer hover:bg-white hover:text-green border-2 border-solid border-green mb-2 md:mb-8' onClick={() => { setShowModal(false) }}>Okay Trovi</button>
                </div>
            </div>


            <div className={`${errorModal ? "block" : "hidden"} bg-[#000000]/[0.8] fixed top-0 left-0 h-screen w-full flex justify-center items-center`}>
                <div className='bg-white flex flex-col items-center gap-4 w-[350px] md:w-[600px] p-4 md:p-6 rounded-[20px]'>

                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='self-start hover:pointer-cursor' onClick={() => { setErrorModal(false) }}>
                        <path d="M17.4493 30.5992C25.0623 30.5992 31.2912 24.3703 31.2912 16.7573C31.2912 9.14425 25.0623 2.91541 17.4493 2.91541C9.83627 2.91541 3.60742 9.14425 3.60742 16.7573C3.60742 24.3703 9.83627 30.5992 17.4493 30.5992Z" stroke="#929292" stroke-width="0.891071" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.5322 20.6745L21.3667 12.84" stroke="#929292" stroke-width="0.891071" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.3667 20.6745L13.5322 12.84" stroke="#929292" stroke-width="0.891071" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    {/* <img src='/check_mark.png' className='h-[80px] w-[80px] md:h-[200px] md:w-[200px]' /> */}
                    <div className='text-[#000000] font-bold text-[25px] text-center'>Error!</div>
                    <div className='text-[#000000] text-[18px] text-center'>{errorMessage}</div>
                    <button className='bg-green text-white rounded-[4px] py-3 px-6 hover:cursor-pointer hover:bg-white hover:text-green border-2 border-solid border-green mb-2 md:mb-8' onClick={() => { setErrorModal(false) }}>Close</button>
                </div>
            </div>

        </section>
    );
}