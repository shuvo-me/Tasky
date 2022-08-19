import avatar from "@/assets/avatar.jpg";
import notifications from "@/assets/data/notifications";
import userInfo from "@/assets/data/userInfo";
import { toggleSideNav } from "@/store/sideNav.slice.js";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DarkModeToggleBtn from "./DarkModeToggleBtn";
const Header = () => {
  const dispatch = useDispatch();
  const { sideNavState } = useSelector((state) => state);
  const [showNotification, setShowNotification] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const userMenuRef = useRef(null);
  const notificationMenuRef = useRef(false);
  const openNotificationMenu = (e) => {
    setShowNotification(!showNotification);
  };

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  const handleOutSideClick = (e) => {
    !userMenuRef.current.contains(e.target) && setShowUserInfo(false);
    !notificationMenuRef.current.contains(e.target) &&
      setShowNotification(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleOutSideClick);
  }, []);
  return (
    <div
      className={`flex items-center justify-between px-2 left-0 py-3 bg-white dark:bg-slate-800 fixed top-0 transition-all duration-200 ${
        !sideNavState.show ? "lg:left-[240px]" : "left-0"
      }  right-0 z-20`}
    >
      <div className="left flex items-center gap-[100px]">
        <div
          className="menu cursor-pointer"
          onClick={() => dispatch(toggleSideNav())}
        >
          <span className="mdi mdi-menu text-[25px] dark:text-slate-300"></span>
        </div>
        <div className="search-box xs:hidden md:block">
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
      <div className="flex items-center">
        <div className="dark-mode-btn">
          <DarkModeToggleBtn />
        </div>

        <div className="links flex items-center">
          <div
            className="notifications relative mx-10 cursor-pointer"
            onClick={openNotificationMenu}
            ref={notificationMenuRef}
          >
            <span className="mdi mdi-bell text-[30px] dark:text-slate-300" />
            <span className=" bg-yellow-400 h-[20px] w-[20px] top-0 right-0 absolute text-sm flex justify-center items-center rounded-full">
              4
            </span>
            <ul
              className={` absolute top-[100%] transform   ${
                showNotification
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0 h-0 overflow-hidden"
              } transition-all ease-linear duration-300 left-[-350px] bg-slate-50 p-2 min-w-[320px] rounded-md dark:bg-slate-700`}
            >
              {notifications.map((item) => (
                <li
                  key={Math.random()}
                  className="my-5 first:mt-0 last:mb-0 hover:bg-slate-100 dark:hover:bg-slate-600 p-3 rounded-md transition-all duration-200 ease-linear"
                >
                  <div className=" flex items-start">
                    <a
                      href="#"
                      className="bg-yellow-200 p-2 rounded-full h-[30px] w-[30px] flex items-center"
                    >
                      <span className={`${item.icon} text-sm text-slate-700`} />
                    </a>

                    <div className="px-2">
                      <h5 className=" text-sm text-slate-800 dark:text-slate-300">
                        {item.title}
                      </h5>
                      <div>
                        <span className=" text-xs text-slate-600 dark:text-slate-400">
                          {item.time}
                        </span>
                        <p className=" text-xs truncate overflow-hidden text-slate-800 dark:text-slate-300">
                          {item.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="avatar flex items-center cursor-pointer relative"
            onClick={toggleUserInfo}
            ref={userMenuRef}
          >
            <div v className="avatar-text text-right mr-3 xs:hidden md:visible">
              <h5 className="dark:text-slate-300">John Doe</h5>
              <span className=" text-sm text-slate-300 dark:text-slate-600">
                Frontend Developer
              </span>
            </div>
            <div className="avatar-img">
              <Image src={avatar} height={40} width={40} alt="avatar" />
            </div>
            <ul
              className={`transform duration-200 ease-linear transition-all${
                showUserInfo
                  ? "translate-y-0 opacity-100"
                  : " translate-y-10 opacity-0 h-0 overflow-hidden "
              } absolute left-[-160px] top-[60px] min-w-[200px] bg-slate-50 p-2  rounded-md dark:bg-slate-700`}
            >
              {userInfo.map((item) => (
                <li
                  className="my-2 p-2 rounded-sm first:mt-0 last:mb-0 flex items-center hover:bg-slate-100 dark:hover:bg-slate-600"
                  key={Math.random()}
                >
                  <div className="mr-[10px] h-[25px] w-[25px] flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-600">
                    <span
                      className={`${item.icon} text-md dark:text-slate-300 text-slate-600`}
                    />
                  </div>
                  <h5 className="text-sm text-slate-800 dark:text-slate-300">
                    {item.text}
                  </h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
