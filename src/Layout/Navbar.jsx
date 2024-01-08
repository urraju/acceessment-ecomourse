import logo from "../assets/logo/Alzaf Logo Size 300x300 pixel 1.png";
import logo2 from "../assets/navbarIcon/Vector (2).png";
import search from "../assets/navbarIcon/Search 2.png";
import group from "../assets/navbarIcon/Group.png";
import shopping from "../assets/navbarIcon/Vector (1).png";
import love from "../assets/navbarIcon/Vector.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-3 px-2 md:px-0 flex justify-between gap-5">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="bg-[#EFF0F5] w-1/2 h-11 relative px-3 rounded-full flex justify-between">
          <input
            className="bg-transparent outline-none "
            type="text"
            name=""
            id=""
            placeholder="Search Product"
          />
          <img
            className="bg-orange-500 px-3 right-0 absolute py-3 rounded-r-full"
            src={search}
            alt=""
          />
        </div>
        <div className="flex gap-5">
          <img
            className="bg-[#EFF0F5] p-3 h-10 w-10 rounded-lg hover:bg-orange-500 duration-150"
            src={group}
            alt=""
          />
          <img
            className="bg-[#EFF0F5] p-3 h-10 w-10 rounded-lg hover:bg-orange-500 duration-150"
            src={shopping}
            alt=""
          />
          <img
            className="bg-[#EFF0F5] p-3 h-10 w-10 rounded-lg hover:bg-orange-500 duration-150"
            src={love}
            alt=""
          />
          <div className=" md:hidden lg:block bg-orange-400 w-max rounded-lg hover:bg-orange-500 duration-150 ">
            <div className="flex">
              <img className="w-10 h-max" src={logo2} alt="" />
              <p className="py-2 rounded-2xl px-2 flex font-inter md:text-sm font-bold text-white lg:tracking-widest lg:text-lg">
                Cloud Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
