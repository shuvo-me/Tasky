import Image from "next/image";
import React from "react";

const Card = ({ icon, title, percent }) => {
  return (
    <div className="card p-[20px] bg-white rounded-lg">
      <div className="card-top flex justify-between items-center mb-[30px]">
        <h5 className=" font-bold">{title}</h5>
        <span className="mdi mdi-dots-vertical cursor-pointer"></span>
      </div>
      <div className="card-body flex justify-between items-center">
        <h4 className=" font-bold text-[30px]">{percent}</h4>
        <div className=" bg-[#FFF8E8] h-[70px] w-[70px] flex justify-center items-center rounded-lg">
          <Image src={icon} height={30} width={30} alt={"arrow"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
