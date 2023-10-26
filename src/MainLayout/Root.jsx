import { Outlet } from "react-router-dom";
import Navbar from "../Components/Sheared/Navbar/Navbar";
import Footer from "../Components/Sheared/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
