import { Outlet, Link } from "react-router-dom";
import { Header } from "./header";

const Layout = () => {
  return (
    <>
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </>
  )
};

export {Layout};