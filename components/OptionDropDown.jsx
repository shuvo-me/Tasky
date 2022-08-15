import { useState } from "react";

const OptionDropDown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
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
          <h5 className=" text-sm dark:text-slate-400 text-slate-700">Edit</h5>
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
  );
};

export default OptionDropDown;
