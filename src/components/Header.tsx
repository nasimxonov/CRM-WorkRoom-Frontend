import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
const Header = () => {
  return (
    <div className="header mt-3 flex items-center justify-between w-full px-4">
      <div className="flex items-center gap-1 w-[512px] h-[48px] py-2 px-2">
        <IoSearch className="size-4" />
        <input
          type="text"
          className="border-0 outline-0 w-full"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center gap-5">
        <LuBell className="size-4" />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qelUF9GcbOcMAl2BClvW_rIwsSK3I-eKoQ&s"
          alt=""
          className="w-[35px] h-[35px] rounded-[100%]"
        />
        <h2 className="text-[20px] font-bold">Evan Yates</h2>
        <select name="" id="">
          <FaAngleDown />
        </select>
      </div>
    </div>
  );
};

export default Header;
