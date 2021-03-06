import Image from "next/image";
import React from "react";
import avatar from "@/assets/avatar.jpg";

const Members = () => {
  return (
    <div className="card p-[20px] bg-white rounded-lg">
      <div className="card-top flex justify-between items-center mb-[30px]">
        <h5 className=" font-bold">Members</h5>
        <span className="mdi mdi-dots-vertical cursor-pointer"></span>
      </div>
      <div className="mid">
        <table className=" w-full text-left">
          <thead className="block mb-3">
            <tr className=" flex justify-between">
              <th colSpan={1}>
                <span className=" text-gray-400 text-sm font-normal">
                  Member Info
                </span>
              </th>
              <th colSpan={2}>
                <span className=" text-gray-400 text-sm font-normal">
                  Today
                </span>
              </th>
              <th colSpan={3}>
                <span className=" text-gray-400 text-sm font-normal">
                  This Week
                </span>
              </th>
            </tr>
          </thead>
          <tbody className=" mt-1">
            {[...Array(3)].map((_) => (
              <tr
                className="border px-3 py-1 border-slate-100 rounded-lg flex justify-between items-center w-full my-4 first:mt-0"
                key={Math.random()}
              >
                <td>
                  <div className="user flex items-center">
                    <Image src={avatar} height={35} width={35} alt="user" />
                    <div className=" ml-4">
                      <h4 className=" text-md font-bold">Dua Lipa</h4>
                      <p className=" text-sm font-medium text-slate-800">
                        Food Dashboard Design
                      </p>
                      <span className=" text-xs font-normal text-slate-600">
                        Creating UI and Research
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className=" bg-[#FFF8E8] text-sm font-medium px-4 rounded-lg py-2">
                    00:40:00
                  </span>
                </td>
                <td>
                  <span className=" bg-[#FFF8E8] text-sm font-medium px-4 rounded-lg py-2">
                    08:40:00
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
