import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="flex bg-[rgba(244,_249,_253,_1)]">
        <Sidebar />
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
