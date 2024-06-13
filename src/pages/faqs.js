import AllFAQs from "../components/allFAQs";
import BorderLayout from "../layouts/BorderLayout";
import Layout from "../layouts/Layout";


export default function Faqs() {

    const troviFAQs = [
        {
            question: "What is Trovi?",
            answer: `Trovi is a technology company that enables' consumers order groceries from their favorite stores
            in their city. Trovi ensures that their orders are delivered to them safely and on time.`
        },
        {
            question: "What locations do we currently deliver to?",
            answer: `We are currently live in Uyo city. Expanding soon.`
        },
        {
            question: "What is the company's mission?",
            answer: `Trovi is on a mission to create and promote the best grocery shopping
            experience for Africans. With a smile, we provide both shopping and delivery of ordered groceries
            in less than an hour. We assist our partners grow in the best and most sustainable way possible.`
        },
        {
            question: "What is the company's vision?",
            answer: `To create a reliable platform for our customers in Africa to purchase whatever
            groceries they desire from their favorite stores, at the best prices and to have their groceries
            delivered to their location on time.`
        }
    ];

    const troviFAQsTwo = [
        {
            question: "What is a shopping and delivery fee?",
            answer: `The shopping and delivery is a task fee that is required when a customer makes payment for their
            order. This fee is currently a fixed fee for customers purchasing groceries from home within Eket
            city place an order from.`
        },
        {
            question: "Why do we charge a shopping and delivery fee?",
            answer: `To give you a seamless shopping and delivery experience, Trovi works with well trained shoppers
            who pickup your ordered groceries from a grocery store you place an order from. Shoppers deliver
            your groceries to you safely and on time. Shopping fees are charged to pay the shoppers for this
            tasks they handle.`
        }
    ];

    const troviFAQsThree = [
        {
            question: "Is there an app for buyers to order with?",
            answer: `Trovi's app for buyers will enable consumers to place orders from their favorite grocery stores and
            have their orders delivered to their doorstep in minutes. This app will be released soon.`
        },
        {
            question: "Is there an app for logistic partners to deliver with?",
            answer: `Trovi's platform for logistic providers and couriers' will enable qualified people partner with Trovi to
            shop and deliver satisfaction to anyone. This app will be made available soon.`
        },
        {
            question: "Is there an app for grocery stores and businesses?",
            answer: `Trovi offers a platform for qualified businesses to sell their products online, increase sales and reach more customers.`
        }
    ];

    

    return (
        <Layout>

            <BorderLayout className={`mx-8 lg:mx-10 xl:mx-20 p-4 md:p-8 my-10 lg:my-20 xl:my-40`}>
                <div className="font-bold text-green text-center md:text-left py-8 md:py-12 lg:py-20 text-[25px]">
                    Frequently Asked Questions
                </div>

                <BorderLayout className="p-4 mb-10 lg:mb-20">
                    <AllFAQs header="Trovi" troviFAQs={troviFAQs} />
                    <hr />
                    <AllFAQs header="Service & delivery fees" troviFAQs={troviFAQsTwo} />
                    <hr />
                    <AllFAQs header="3 apps, one goal" troviFAQs={troviFAQsThree} />
                </BorderLayout>
            </BorderLayout>
            {/* <SelectYourCity /> */}
            {/* <GetTheApp /> */}

        </Layout>
    );
}