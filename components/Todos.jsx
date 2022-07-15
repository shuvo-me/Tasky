import Image from "next/image";
import React from "react";
import folderIcon from "@/assets/folder.svg";
const Todos = () => {
  return (
    <div className="card p-[20px] bg-white rounded-lg">
      <div className="card-top flex justify-between items-center mb-[30px]">
        <h5 className=" font-bold">To Dos</h5>
        <span className="mdi mdi-dots-vertical cursor-pointer"></span>
      </div>
      <div className="mid">
        <table className=" w-full text-left">
          <thead className="block mb-3">
            <tr className=" flex justify-between">
              <th colSpan={1}>
                <span className=" text-gray-400 text-sm font-normal">
                  To Dos
                </span>
              </th>
              <th colSpan={2}>
                <span className=" text-gray-400 text-sm font-normal">Time</span>
              </th>
            </tr>
          </thead>
          <tbody className=" mt-1">
            {[...Array(3)].map((_) => (
              <tr
                className="border px-3 py-3 border-slate-100 rounded-lg flex justify-between items-center w-full my-4 first:mt-0"
                key={Math.random()}
              >
                <td>
                  <div className="user flex items-center">
                    <Image src={folderIcon} height={20} width={20} alt="icon" />
                    <div className=" ml-4">
                      <h4 className=" text-sm font-bold">Creating Wireframe</h4>
                    </div>
                  </div>
                </td>
                <td className=" flex items-center flex-1 ml-[40px]">
                  <span className=" bg-[#FFF8E8] text-sm font-medium px-4 rounded-lg py-2">
                    00:40:00
                  </span>
                  <div className="w-full bg-gray-200 h-[3px] rounded-full dark:bg-gray-700 ml-5">
                    <div
                      className="bg-[#FABB18] text-xs font-medium h-[3px] text-blue-100 text-center p-0 leading-none rounded-full"
                      style={{ width: "80%" }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" text-right">
          <button className="btn">View All</button>
        </div>
      </div>
    </div>
  );
};

export default Todos;
