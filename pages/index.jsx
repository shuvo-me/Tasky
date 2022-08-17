import items from "@/assets/data/card-items";
import Card from "@/components/Card";
import Members from "@/components/Members";
import Projects from "@/components/Projects";
import RecentActivity from "@/components/RecentActivity";
import Timer from "@/components/Timer";
import Todos from "@/components/Todos";
import Head from "next/head";
export default function Home() {
  return (
    // [...Array(4)].map((u, i) => i)
    <>
      <Head>
        <title>Tasky</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="task.svg" />
      </Head>
      <div>
        <div className="row-1 flex xs: justify-between items-center">
          <div className="time">
            <h2 className=" text-[30px] font-bold text-slate-700 dark:text-slate-300">
              Today
            </h2>
            <span className=" text-[15px] text-slate-700 dark:text-slate-300">
              Mon 22, 2021 | 10:00 AM
            </span>
          </div>
          <Timer />
        </div>
        <div className="row-2 mt-10">
          <div className="cards grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
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
        <div className="row-3 mt-10 grid lg:grid-cols-2 sm:grid-cols-1 gap-4 grid-flow-dense">
          <div className="cards">
            <RecentActivity />
          </div>
          <div className="cards">
            <Projects />
          </div>
        </div>
        <div className="row-4 mt-5 grid  sm:grid-cols-1 lg:grid-cols-2 gap-4">
          <Members />
          <Todos />
        </div>
      </div>
    </>
  );
}
