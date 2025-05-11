import { Outlet } from "react-router";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

function Layout() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
