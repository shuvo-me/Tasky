import Head from "next/head";
import Image from "next/image";
import icon from "@/assets/play.svg";
import Card from "@/components/Card";
import folder from "@/assets/folder.svg";
import time from "@/assets/time.svg";
import arrow from "@/assets/arrow.svg";
import RecentActivity from "@/components/RecentActivity";
let items = [
  {
    title: "Weekly Activity",
    icon: arrow,
    percent: "90%",
  },
  {
    title: "Worked This Week",
    icon: time,
    percent: "10hrs",
  },
  {
    title: "Project Worked",
    icon: folder,
    percent: "07",
  },
];
export default function Home() {
  return (
    // [...Array(4)].map((u, i) => i)
    <>
      <Head>
        <title>Tasky</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="task.svg" />
      </Head>
      <div className="container px-5 pt-6">
        <div className="row-1 flex justify-between items-center">
          <div className="time">
            <h2 className=" text-[30px] font-bold">Today</h2>
            <span className=" text-[15px]">Mon 22, 2021 | 10:00 AM</span>
          </div>
          <div className="timer bg-white flex items-center py-[30px] px-[20px] rounded-[20px]">
            <h5>Start Time Tracker</h5>
            <div className="btn bg-yellow-300 flex justify-center items-center h-[40px] w-[40px] rounded-md ml-8 cursor-pointer">
              <Image src={icon} alt={"icon"} height={20} width={20} />
            </div>
          </div>
        </div>
        <div className="row-2 mt-10">
          <div className="cards grid grid-cols-3 gap-4">
            {items.map((item) => (
              <Card
                icon={item.icon}
                title={item.title}
                percent={item.percent}
                key={Math.random()}
              />
            ))}
          </div>
        </div>
        <div className="row-3 mt-10 grid grid-cols-2 gap-4">
          <div className="cards">
            <RecentActivity />
          </div>
          <div className="cards">
            <RecentActivity />
          </div>
        </div>
      </div>
    </>
  );
}
