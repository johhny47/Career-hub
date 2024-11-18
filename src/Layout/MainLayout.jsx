import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-295px)]">

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;