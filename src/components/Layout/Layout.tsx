import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import { Footer } from "../Footer/Footer"


const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '0 14%' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;