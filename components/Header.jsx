import avatar from "@/assets/avatar.jpg";
import { toggleSideNav } from "@/store/sideNav.slice.js";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import DarkModeToggleBtn from "./DarkModeToggleBtn";
const Header = () => {
  const dispatch = useDispatch();
  const { sideNavState } = useSelector((state) => state);

  return (
    <div
      className={`flex items-center justify-between px-2 py-3 bg-white dark:bg-slate-800 fixed top-0 transition-all duration-200 ${
        !sideNavState.show ? "left-250" : "left-0"
      }  right-0 z-50`}
    >
      <div className="left flex items-center gap-[100px]">
        <div
          className="menu cursor-pointer"
          onClick={() => dispatch(toggleSideNav())}
        >
          <span className="mdi mdi-menu text-[25px] dark:text-slate-300"></span>
        </div>
        <div className="search-box">
          <div className="bg-slate-50 dark:bg-slate-700 flex items-center px-2 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search Project....."
              className="outline-none border-0 bg-transparent p-2 text-slate-400 "
            />
            <span className="mdi mdi-magnify text-[20px] text-slate-400 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="right flex items-center">
        <div className="dark-mode-btn">
          <DarkModeToggleBtn />
        </div>

        <div className="links flex items-center">
          <div className="notifications relative mx-10 cursor-pointer">
            <span className="mdi mdi-bell text-[30px] dark:text-slate-300"></span>
            <span className=" bg-yellow-400 h-[20px] w-[20px] top-0 right-0 absolute text-sm flex justify-center items-center rounded-full">
              4
            </span>
          </div>
          <div className="avatar flex items-center cursor-pointer">
            <div className="avatar-text text-right mr-3">
              <h5 className="dark:text-slate-300">John Doe</h5>
              <span className=" text-sm text-slate-300 dark:text-slate-600">
                Frontend Developer
              </span>
            </div>
            <div className="avatar-img">
              <Image src={avatar} height={40} width={40} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
