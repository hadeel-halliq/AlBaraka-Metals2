import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop/>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
