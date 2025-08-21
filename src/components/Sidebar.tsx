import { Link } from "react-router-dom";
import "../assets/styles/sidebar.css";
import logo from "../assets/icons/Company's logo(1).svg";
import active from "../assets/icons/active.svg";
import inactive from "../assets/icons/inactive.svg";
import calendar from "../assets/icons/calendar.svg";
import vacation from "../assets/icons/vacations.svg";
import friends from "../assets/icons/friends.svg";
import messenger from "../assets/icons/messenger.svg";
import folder from "../assets/icons/folder.svg";
import dev from "../assets/icons/illustration.svg";
import message from "../assets/icons/white.svg";
import logout from "../assets/icons/logout.svg";

const Sidebar = () => {
  return (
    <aside className="sidebar mt-[20px] ml-[20px] mb-[25px] mr-[30px] pb-[44px] bg-white rounded-[20px] items-center">
      <div className="top mt-[40px] ml-[24px]">
        <Link to={"/"}>
          <img src={logo} alt="project-logo" />
        </Link>
        <nav className="flex flex-col mt-[42px] gap-2.5">
          <div className="flex gap-2">
            <Link
              to={"/"}
              className="w-[200px] grow flex gap-5 bg-[#ebf3ff] py-[11px] pl-[11px] pr-[43px] text-[16px] font-bold text-[rgba(63,_140,_255,_1)] rounded-[10px]"
            >
              <img src={active} alt="" /> Dashboard
            </Link>
            <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div>
          </div>

          <div className="flex gap-2">
            <Link
              to={"/"}
              className="w-[200px] grow flex gap-5 py-[11px] pl-[11px] pr-[43px] text-[16px] font-bold text-[rgba(125,_133,_146,_1)] rounded-[10px]"
            >
              <img src={inactive} alt="" /> Projects
            </Link>
            {/* <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div> */}
          </div>

          <div className="flex gap-2">
            <Link
              to={"/"}
              className="w-[200px] grow flex gap-5 py-[11px] pl-[11px] pr-[58px] text-[16px] font-bold text-[rgba(125,_133,_146,_1)] rounded-[10px]"
            >
              <img src={calendar} alt="" /> Calendar
            </Link>
            {/* <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div> */}
          </div>

          <div className="flex gap-2">
            <Link
              to={"/"}
              className="w-[200px] grow flex gap-5 py-[11px] pl-[11px] pr-[58px] text-[16px] font-bold text-[rgba(125,_133,_146,_1)] rounded-[10px]"
            >
              <img src={vacation} alt="" /> Vacations
            </Link>
            {/* <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div> */}
          </div>

          <div className="flex gap-2">
            <Link
              to={"/"}
              className="w-[200px] grow flex gap-5 py-[11px] pl-[11px] pr-[58px] text-[16px] font-bold text-[rgba(125,_133,_146,_1)] rounded-[10px]"
            >
              <img src={friends} alt="" /> Employees
            </Link>
            {/* <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div> */}
          </div>

          <div className="flex gap-2">
            <Link
              to={"/"}
              className="w-[200px] grow flex gap-5 py-[11px] pl-[11px] pr-[58px] text-[16px] font-bold text-[rgba(125,_133,_146,_1)] rounded-[10px]"
            >
              <img src={messenger} alt="" /> Messenger
            </Link>
            {/* <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div> */}
          </div>

          <div className="flex gap-2">
            <Link
              to={"/"}
              className="w-[200px] grow flex gap-5 py-[11px] pl-[11px] pr-[58px] text-[16px] font-bold text-[rgba(125,_133,_146,_1)] rounded-[10px]"
            >
              <img src={folder} alt="" /> Info Portal
            </Link>
            {/* <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div> */}
          </div>
        </nav>
          </div>
          
      <div className="bottom flex flex-col items-center relative">
        <img src={dev} alt="" className="absolute" />
        <div className="bg-[#ebf3ff] rounded-[24px] px-[24px] pt-[94px] pb-[26px] mt-[46px]">
          <button className="flex bg-[#3f8cff] gap-3 text-[16px] font-bold text-[white] rounded-[24px] py-[20px] px-[15px]">
            <img src={message} alt="" /> Support
          </button>
        </div>
        <button className="mt-[50px] flex gap-5 text-[rgba(125,_133,_146,_1)] items-center text-[16px] font-semibold"><img src={logout} alt="" /> Logout</button>
      </div>
    </aside>
  );
};

export default Sidebar;
