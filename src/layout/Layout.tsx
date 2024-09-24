import Navbar from "@/components/custom/Navbar/Navbar";
import { Breadcrum } from "@/components/custom/Breadcrum";
import { Outlet } from "react-router";
import Footer from "../components/custom/Footer/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="mt-24">
        {/* <Breadcrum /> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
