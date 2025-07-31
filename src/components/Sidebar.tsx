import React from "react";
import logoImage from "../assets/Companyslogo.svg";
import "../assets/styles/sidebar.css";
import { RxDashboard } from "react-icons/rx";
import { LuLayers } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import { BsAirplane } from "react-icons/bs";
import { PiUsersLight } from "react-icons/pi";
import { BiMessageRounded } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa6";
import support from "../assets/support.svg";
import { IoExitOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="w-[200px] h-full">
      <div className="mt-[40px] px-4">
        <img width={50} height={50} src={logoImage} alt="" />
      </div>
      <div className="flex flex-col gap-[21px] px-4 mt-[53px] ">
        <div className="icon flex items-center gap-1">
          <RxDashboard />
          <h2>Dashboard</h2>
        </div>
        <div className="icon flex items-center gap-1">
          <LuLayers />
          <h2>Projects</h2>
        </div>
        <div className="icon flex items-center gap-1">
          <FaRegCalendar />
          <h2>Calendar</h2>
        </div>
        <div className="icon flex items-center gap-1">
          <BsAirplane />
          <h2>Vacations</h2>
        </div>
        <div className="icon flex items-center gap-1">
          <PiUsersLight />
          <h2>Employees</h2>
        </div>
        <div className="icon flex items-center gap-1">
          <BiMessageRounded />
          <h2>Messenger</h2>
        </div>
        <div className="icon flex items-center gap-1">
          <FaRegFolderOpen />
          <h2>Info Portal</h2>
        </div>
      </div>

      <div className="flex items-center px-5 mt-[180px] relative w-[168px] h-[200px]">
        <img src={support} alt="" className="w-[168px]" />
        <button className="btn  absolute flex items-center bg-[#3f8cff] bottom-0 text-[16px] text-white rounded-[14px] py-[10px] px-[13px] gap-1  ">
          <BiMessageRounded />
          Support
        </button>
      </div>

      <div className="flex items-center gap-1 px-4 mt-[51px]">
        <IoExitOutline className="login-icon text-[30px]" />
        <h2>Logout</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
