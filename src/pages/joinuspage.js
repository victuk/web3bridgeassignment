import { useLocation, useParams, useRoutes } from "react-router-dom";
import GetTheApp from "../components/GetTheApp";
import SelectYourCity from "../components/SelectYourCity";
import BorderLayout from "../layouts/BorderLayout";
import Layout from "../layouts/Layout";
import JoinUs from "../components/Joinus";
import HeroSection from "../components/HeroSection";
import SkipTheQueueTwo from "../components/SkipTheQueueTwo";
import JoinTheWaitingList from "../components/JoinTheWaitlist";
import { useEffect } from "react";

export default function JoinUsPage() {

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    return (
        <Layout dontShowFooter={true}>
            {/* <HeroSection /> */}
            <JoinTheWaitingList />
            {/* <JoinUs /> */}
            <SkipTheQueueTwo />
        </Layout>
    );
}