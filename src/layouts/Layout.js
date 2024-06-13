import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({children, dontShowFooter}) {
    return (
        <div className="text-[20px] bg-black" style={{fontFamily: "'Lato', sans-serif"}}>
            <Header />
                {children}
                {dontShowFooter ? "" : <Footer /> }
            
        </div>
    );
}