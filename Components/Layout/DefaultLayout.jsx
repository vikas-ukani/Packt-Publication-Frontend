import Footer from "Components/Common/Footer";
import Header from "Components/Common/Header";

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;