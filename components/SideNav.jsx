import Logo from "@/assets/TASKY.svg";
import {
  TemplateIcon
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const SideNav = () => {
  const router = useRouter();

  console.log(router)
  return (
    <div className="fixed top-0 left-0 min-h-screen bg-[#FFFFFF] max-w-[345px]  p-[40px]">
      <div className="sidenav-logo mb-[37px]">
        <Image height={54} width={132} src={Logo} />
      </div>
      <div className="sidenav-links">
        <ul>
          <li>
            <Link href="/">
              <div className={" flex items-center cursor-pointer bg-slate-900 text-slate-50 py-[8px] px-[22px] rounded"}>
                <TemplateIcon className="h-5 mr-[15px]"/>
                <span className="text-[18px]">Dashboard</span>
              </div>
            </Link>
          </li>
          {/* <li>
            <Link href="/">
              <div>
                <ChartPieIcon />
                <span>Analytic</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div>
                <ClockIcon />
                <span>Timesheets</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div>
                <ClipboardIcon />
                <span>Todo</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <div>
                <ClipboardCheckIcon />
                <span>Report</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <div>
                <CogIcon />
                <span>Settings</span>
              </div>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
