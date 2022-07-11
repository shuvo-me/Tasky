import Logo from "@/assets/TASKY.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import tabs from "@/assets/data/tabs";

const SideNav = () => {
  const router = useRouter();
  return (
    <div className="fixed top-0 bottom-0  bg-[#FFFFFF] max-w-[345px]  py-[10px] px-[15px]">
      <div className="sidenav-logo mb-[37px]">
        <Image height={54} width={132} src={Logo} alt="Logo"/>
      </div>
      <div className="sidenav-links">
        <ul>
          {tabs.map(tab=>(
            <li key={Math.random()}>
            <Link href="/">
              <div className={" flex items-center cursor-pointer text-slate-900 py-[8px] px-[22px] pl-[0px] rounded mb-5"}>
                <span className={`${tab.icon} mr-4 text-[18px]`}></span>
                <span className="text-[18px]">{tab.name}</span>
              </div>
            </Link>
          </li>
          ))}
           <li className=" border border-slate-300 rounded px-[15px] py-[5px] relative">
          <label htmlFor="workplace" className=" text-[12px] text-slate-400 font-normal mb-[4px]">WorkPlace</label>
           <select name="workplace" id="workplace" className="w-full outline-none border-none bg-transparent text-sm">
            <option value="">Matrix Domain</option>
            <option value="">Matrix Domain 2</option>
            <option value="">Matrix Domain 3</option>
            <option value="">Matrix Domain 4</option>
          </select>
        </li>
        </ul>

       
      </div>
    </div>
  );
};

export default SideNav;
