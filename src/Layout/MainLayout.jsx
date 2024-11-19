import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import NavBar from "../Component/Navbar/NavBar";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-295px)] w-11/12 mx-auto">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;