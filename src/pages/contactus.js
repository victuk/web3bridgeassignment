import GetTheApp from "../components/GetTheApp";
import Header from "../components/Header";
import SelectYourCity from "../components/SelectYourCity";
import BorderLayout from "../layouts/BorderLayout";
import Layout from "../layouts/Layout";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import alertify from "alertifyjs";

export default function ContactUs() {

    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const sendEmail = () => {
        if(!userEmail || !userMessage) return alertify.warning("No empty fields allowed!");
        setLoading(true);
        emailjs.send('service_pxc3xh5', 'template_lbm492a', {
            from_email: userEmail,
            message: userMessage
        }, 'vcufckm1c_We6iDaW')
            .then((result) => {
                alertify.success("Message sent Successfully!");
                setTimeout(() => {
                    setUserEmail("");
                    setUserMessage("");
                }, 2000);
            }, (error) => {
                alertify.error("Message not sent Successfully!");
            }).finally(() => {
                setLoading(false);
            });
        };

    return(
        <Layout>

            <BorderLayout className={`mx-8 lg:mx-10 xl:mx-20 p-4 md:p-8 my-10 lg:my-20 xl:my-40`}>
                <div className="flex flex-col gap-8 lg:gap-14 py-8 lg:py-14 font-bold">
                    <div className="text-green text-[25px]">Contact Us</div>
                    <div className="text-green text-[20px]">How can we help?</div>
                </div>

                <div className="border-solid border-[1px] border-green p-8 lg:p-10 lg:p-20 lg:pr-40 rounded-[20px] flex flex-col gap-4 md:gap-6 lg:gap-10">
                    <div>
                        <input placeholder="Your email address" value={userEmail} onChange={(e) => {setUserEmail(e.target.value)}} className="w-full p-4 border-green border-[1px] border-solid rounded-[20px] focus:outline-none text-[16px]" />
                    </div>

                    <div>
                        <textarea placeholder="Insert you phone number and type your message" value={userMessage} onChange={(e) => {setUserMessage(e.target.value)}} rows={10} className="w-full p-4 border-green border-[1px] border-solid rounded-[20px] focus:outline-none text-[16px]" />
                    </div>
                    <button className="bg-green px-6 p-2 border-none text-white rounded-[20px] w-fit font-bold text-[20px]" onClick={() => {sendEmail()}}>{loading ? "Sending... Please wait!" : "Submit"}</button>
                </div>
                
            </BorderLayout>
            <SelectYourCity />
            <GetTheApp />
        </Layout>
    );
}