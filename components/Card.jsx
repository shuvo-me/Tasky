import Image from "next/image";

import OptionDropDown from "./OptionDropDown";

const Card = ({ icon, title, percent }) => {
  return (
    <div className="card p-[20px] bg-white rounded-lg dark:border dark:border-slate-700 dark:bg-slate-800 ">
      <div className="card-top flex justify-between items-center mb-[30px]">
        <h5 className=" font-bold text-slate-800 dark:text-slate-400">
          {title}
        </h5>
        <OptionDropDown />
      </div>
      <div className="card-body flex justify-between items-center">
        <h4 className=" font-bold text-[30px] text-slate-800 dark:text-slate-400">
          {percent}
        </h4>
        <div className=" bg-[#FFF8E8] dark:border dark:border-slate-700 dark:bg-slate-800 h-[70px] w-[70px] flex justify-center items-center rounded-lg">
          <Image src={icon} height={30} width={30} alt={"arrow"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
