import { Outlet } from "react-router";
import { Footer } from "../componenets/Footer";
import { Header } from "../componenets/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
