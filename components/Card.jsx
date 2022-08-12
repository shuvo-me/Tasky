import Image from "next/image";
import { useState } from "react";

const Card = ({ icon, title, percent }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="card p-[20px] bg-white rounded-lg dark:border dark:border-slate-700 dark:bg-slate-800 ">
      <div className="card-top flex justify-between items-center mb-[30px]">
        <h5 className=" font-bold text-slate-800 dark:text-slate-400">
          {title}
        </h5>
        <span
          className="mdi mdi-dots-vertical cursor-pointer text-slate-800 dark:text-slate-400 relative"
          onClick={() => toggleMenu()}
        >
          <ul
            className={`${
              showMenu ? "opacity-100" : "opacity-0"
            } absolute bg-slate-50 p-2  rounded-md dark:bg-slate-700 left-[-83px] top-[20px]`}
          >
            <li className="flex items-center gap-1 mb-2 hover:bg-slate-100 dark:hover:bg-slate-600 px-1 rounded-sm">
              <div className="">
                <span className="mdi mdi-file-document-edit-outline dark:text-slate-400 text-slate-700" />
              </div>
              <h5 className=" text-sm dark:text-slate-400 text-slate-700">
                Edit
              </h5>
            </li>
            <li className="flex items-center gap-1 hover:bg-slate-100 dark:hover:bg-slate-600 px-1 rounded-sm">
              <div className="">
                <span className="mdi mdi-trash-can-outline dark:text-slate-400 text-slate-700" />
              </div>
              <h5 className=" text-sm dark:text-slate-400 text-slate-700">
                Delete
              </h5>
            </li>
          </ul>
        </span>
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
