import Image from "next/image"
import avatar from "@/assets/avatar.jpg"
const Header = () => {
  return (
    <div className="flex items-center justify-between px-2 py-3 bg-white fixed top-0 left-[250px] right-0">
       <div className="left">
          <div className="menu cursor-pointer">
            <span className="mdi mdi-menu text-[20px]"></span>
          </div>
       </div>
       <div className="right flex items-center">
          <div className="search-box">
             <div className="bg-slate-50 flex items-center px-2 rounded overflow-hidden">
               <input type="text" placeholder="Search Project....." className="outline-none border-0 bg-transparent p-2 text-slate-400"/>
               <span className="mdi mdi-magnify text-[20px] text-slate-400 cursor-pointer"/>
             </div>
          </div>
          <div className="links flex items-center">
              <div className="notifications relative mx-10 cursor-pointer cursor-pointer">
                <span className="mdi mdi-bell text-[30px]"></span>
                <span className=" bg-yellow-400 h-[20px] w-[20px] top-0 right-0 absolute text-sm flex justify-center items-center rounded-full">4</span>
              </div>
              <div className="avatar flex items-center cursor-pointer">
                 <div className="avatar-text text-right mr-3">
                    <h5>John Doe</h5>
                    <span className=" text-sm text-slate-300">Frontend Developer</span>
                 </div>
                 <div className="avatar-img">
                   <Image src={avatar} height={40} width={40} alt="avatar"/>
                 </div>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Header