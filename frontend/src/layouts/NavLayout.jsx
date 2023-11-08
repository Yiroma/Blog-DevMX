import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

export default function NavLayout() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Outlet />
      <Footer />
    </>
  );
}
