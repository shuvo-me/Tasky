import icon from "@/assets/folder.svg";
import Image from "next/image";

const items = [
  {
    name: "Project One",
    time: "00:40:00",
    prg: "40%",
  },
  {
    name: "Project Two",
    time: "00:40:00",
    prg: "60%",
  },
  {
    name: "Project Three",
    time: "00:40:00",
    prg: "30%",
  },
  {
    name: "Project Four",
    time: "00:40:00",
    prg: "67%",
  },
];
const Projects = () => {
  return (
    <div className="card p-[20px] bg-white rounded-lg dark:border dark:border-slate-700 dark:bg-slate-800">
      <div className="card-top flex justify-between items-center mb-[30px]">
        <h5 className=" font-bold dark:text-slate-400 text-slate-800">
          Projects
        </h5>
        <span className="mdi mdi-dots-vertical cursor-pointer dark:text-slate-300 text-slate-700"></span>
      </div>
      <div className="body mt-5">
        {items.map((item) => (
          <div
            className="row px-3 rounded-md border border-slate-100 dark:border-slate-700 py-3 flex  items-center my-4"
            key={Math.random()}
          >
            <div className="row-left flex items-center gap-4">
              <Image src={icon} height={20} width={20} alt="icon" />
              <h5 className=" font-bold text-sm dark:text-slate-300 text-slate-700">
                {item.name}
              </h5>
            </div>
            <div className="row-right flex-1 flex items-center pl-[120px]">
              <span className=" text-sm font-medium bg-[#FFF8E8] px-4 py-2 rounded-lg dark:bg-slate-800 dark:border dark:border-slate-700 dark:text-slate-400">
                {item.time}
              </span>
              <div className="w-full bg-gray-200 h-[3px] rounded-full dark:bg-gray-700 ml-5">
                <div
                  className="bg-[#FABB18] text-xs font-medium h-[3px] text-blue-100 text-center p-0 leading-none rounded-full"
                  style={{ width: item.prg }}
                />
              </div>
            </div>
          </div>
        ))}
        <div className=" text-right">
          <button className="btn dark:bg-yellow-500 dark:text-slate-800">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
