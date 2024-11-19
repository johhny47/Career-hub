import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import NavBar from "../Component/Navbar/NavBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
              <ToastContainer />
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-295px)] w-11/12 mx-auto">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;