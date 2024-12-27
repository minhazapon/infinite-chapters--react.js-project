import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";



const Root = () => {
    return (
        <div className=" ml-20 mr-20 ">

            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;