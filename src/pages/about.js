import GetTheApp from "../components/GetTheApp";
import SelectYourCity from "../components/SelectYourCity";
import BorderLayout from "../layouts/BorderLayout";
import Layout from "../layouts/Layout";

export default function About() {

    const missionVission = [
        {
            header: "Our Mission",
            body: `Trovi is on a mission to create and promote the best grocery shopping experience for Africans. With a smile, we'll provide both shopping and delivery of ordered groceries in less than an hour. We assist our partners grow in the best and most sustainable way possible.`
        },
        {
            header: "Our Vision",
            body: `To create a reliable platform for our customers in Africa to purchase whatever groceries they desire from their favorite stores, at the best prices and to have their groceries delivered to their location on time.`
        },
    ];

    const ourTeam = [
        {
            picURL: "/trovi_team/mercy.jpeg",
            name: "Anuoluwapo Famakinwa",
            role: "Engineering"
        },
        {
            picURL: "/trovi_team/nathan.jpeg",
            name: "Nathan Akin",
            role: "Engineering"
        },
        {
            picURL: "/trovi_team/sunny.jpeg",
            name: "Sunny Emerson",
            role: "Business & Growth"
        },
        {
            picURL: "/trovi_team/dominic.jpeg",
            name: "Dominic Akpan",
            role: "Growth & Marketing"
        },
        {
            picURL: "/trovi_team/goodnews.jpeg",
            name: "Goodnews James",
            role: "Business & Operations"
        },
        {
            picURL: "/trovi_team/victor.jpeg",
            name: "Victor Ukok",
            role: "Engineering"
        },
        {
            picURL: "/trovi_team/kingsley.jpeg",
            name: "Kingsley Ugwuta",
            role: "Engineering"
        },
        {
            picURL: "/trovi_team/daniel.jpeg",
            name: "Daniel Effiong",
            role: "Engineering"
        },
        {
            picURL: "/trovi_team/terry.jpeg",
            name: "Terry Isife",
            role: "Design"
        }
    ]

    return(
        <Layout>

            <BorderLayout className={`mx-8 lg:mx-10 xl:mx-20 p-4 md:p-8 my-10 lg:my-20 xl:my-40`}>
                <div className="mt-10 lg:mt-16 text-green font-bold pb-4 text-[25px]">About Us</div>
                <img src="/pic_with_workers.png" className="w-full"  />

                <section className="py-6 md:py-10">
                {missionVission.map((vm) => {
                    return (
                        <div className="w-full lg:w-1/2 pt-4 md:pt-8">
                            <div className="font-bold my-4 font-bold text-green">{vm.header}</div>
                            <div className="text-green">{vm.body}</div>
                        </div>
                    );
                })}
                </section>

                <section className="shadow-lg px-4 py-4 rounded-[20px] flex flex-col lg:flex-row items-center gap-6 lg:gap-10 xl:gap-40 my-8 lg:my-14 xl:my-20">
                    <img src="/trovi_team/sunny.jpeg" className="w-full h-[340px] md:w-[280px] md:h-[280px] rounded-[40px]" />
                    <div className="font-semibold text-green text-[25px] lg:text-[30px] text-left xl:pr-40">
                    Trovi connects customers with their favorite stores for convenient shopping. We're reshaping the future of shopping, delivering a fresh experience. <span className="font-light text-green mt-4 md:mt-0 block md:inline-block text-[16px] md:text-[20px]">Sunny Emerson (CEO & Co-Founder)</span>
                    </div>
                </section>

                <section>
                    <div className="pb-10 pt-14 md:py-14 lg:py-20 text-center font-bold text-green text-[36px] md:text-[40px]">Our Team</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-10 lg:gap-12 xl:gap-20 pb-20">
                        {ourTeam.map((teamMember, i) => {
                            return (
                                <div className="text-center" key={i}>
                                    <div style={{ backgroundImage: `url('${teamMember.picURL}')` }} className="h-[200px] md:h-[180px] w-[200px] md:w-full lg:w-[200px] xl:w-full bg-cover rounded-[60px] bg-[50%_40%] mx-auto mb-2"></div>
                                    {/* <img src={`${teamMember.picURL}`} className="h-[200px] md:h-[150px] bg-cover rounded-[20px]" /> */}
                                    <div className="text-green text-md font-bold">{teamMember.name}</div>
                                    <div className="font-light text-green text-[18px]">{teamMember.role}</div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </BorderLayout>

            <SelectYourCity />

            <GetTheApp />

        </Layout>
    );
}