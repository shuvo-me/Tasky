import tabs from "@/assets/data/tabs";
import { toggleSideNav } from "@/store/sideNav.slice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const SideNav = () => {
  const { sideNavState } = useSelector((state) => state);
  const dispatch = useDispatch();
  const route = useRouter();
  return (
    <nav
      className={`fixed top-0 z-30 bottom-0   bg-[#FFFFFF] max-w-[345px] min-w-[240px]  py-[10px] px-[20px] dark:bg-slate-800 ${
        sideNavState.show && "hide-sidebar"
      }`}
    >
      <div className="absolute top-[10%] right-0 lg:hidden">
        <button onClick={() => dispatch(toggleSideNav())}>
          <span className="mdi mdi-arrow-left-drop-circle text-[30px] text-slate-700  dark:text-yellow-400"></span>
        </button>
      </div>
      <div className="sidenav-logo mb-[37px]">
        <h4 className=" uppercase text-slate-800 font-bold text-[35px] py-4 text-center dark:text-slate-300">
          task<span className=" text-yellow-400 m-0">y</span>
        </h4>
      </div>
      <div className="sidenav-links">
        <ul>
          {tabs.map((tab) => (
            <li key={Math.random()}>
              <Link href={tab.link}>
                <div
                  className={`flex ${
                    tab.link == route.pathname ? "active-link" : ""
                  } items-center  cursor-pointer text-slate-600 dark:text-slate-300 py-[8px] px-4   rounded mb-5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 ease-linear`}
                >
                  <span className={`${tab.icon} mr-4 text-[18px]`}></span>
                  <span className="text-[18px]">{tab.name}</span>
                </div>
              </Link>
            </li>
          ))}
          {/* <li className=" border border-slate-300 rounded px-[15px] py-[5px] relative">
            <label
              htmlFor="workplace"
              className=" text-[12px] text-slate-400 font-normal mb-[4px]"
            >
              WorkPlace
            </label>
            <select
              name="workplace"
              id="workplace"
              className="w-full outline-none border-none bg-transparent text-sm text-slate-600 dark:text-slate-300"
            >
              <option value="">Matrix Domain</option>
              <option value="">Matrix Domain 2</option>
              <option value="">Matrix Domain 3</option>
              <option value="">Matrix Domain 4</option>
            </select>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

SideNav.displayName = "SideNav";

export default SideNav;
