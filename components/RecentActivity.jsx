import Image from "next/image";
import React from "react";
import avatar from "@/assets/avatar.jpg";
import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img2.png";
import img3 from "@/assets/images/img3.png";
import img4 from "@/assets/images/img4.png";
import img5 from "@/assets/images/img5.png";

const RecentActivity = () => {
  return (
    <div className="card p-[20px] bg-white rounded-lg">
      <div className="card-top flex justify-between items-center mb-[30px]">
        <h5 className=" font-bold">Recent Activity</h5>
        <span className="mdi mdi-dots-vertical cursor-pointer"></span>
      </div>
      <div className="mid border border-slate-100 rounded-lg p-3 flex justify-between items-center">
        <div className="user flex items-center">
          <Image src={avatar} height={30} width={30} alt="user" />
          <h4 className=" ml-2 text-sm">Dua Lipa</h4>
        </div>
        <div>
          <button className=" bg-[#FFF8E8] px-[10px] py-[8px] text-sm text-slate-800 rounded-md">
            View All
          </button>
        </div>
      </div>
      <div className="body mt-5">
        <div className="images grid grid-cols-3 gap-2 ">
          <div className="img-1">
            <Image src={img1} height={131} width={200} alt="img" />
          </div>
          <div className="img-1">
            <Image src={img2} height={131} width={200} alt="img" />
          </div>
          <div className="img-1">
            <Image src={img3} height={131} width={200} alt="img" />
          </div>
          <div className="img-1">
            <Image src={img4} height={131} width={200} alt="img" />
          </div>
          <div className="img-1">
            <Image src={img5} height={131} width={200} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
