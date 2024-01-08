import icon1 from "../../assets/menuIcon/Group 598.png";
import icon2 from "../../assets/menuIcon/Health & Beauty.png";
import icon3 from "../../assets/menuIcon/Watches, Bags, Jewellery.png";
import icon4 from "../../assets/menuIcon/man.png";
import icon5 from "../../assets/menuIcon/Mother & Baby.png";
import icon6 from "../../assets/menuIcon/Group.png";
import icon7 from "../../assets/menuIcon/TV & Home Appliances.png";
import icon8 from "../../assets/menuIcon/Group (1).png";
import icon9 from "../../assets/menuIcon/Groceries.png";
import icon10 from "../../assets/menuIcon/Home & Lifestyle.png";
import icon11 from "../../assets/menuIcon/Sports & Outdoors.png";
import icon12 from "../../assets/menuIcon/Computer and laptop.png";
import icon13 from "../../assets/menuIcon/Pet Supplies.png";
import icon14 from "../../assets/menuIcon/Group 597.png";
import {
  MdOutlineKeyboardArrowRight,} from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi2";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { CiUser } from "react-icons/ci";

const Menu = () => {
  return (
    <div className="navbar sticky top-0 z-30  bg-base-100">
      <div className="navbar-start  ">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className=" items-center   lg:hidden">
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className=" flex justify-center items-center ">
                <div className="flex gap-[32px]  ">
                  <div className="flex text-orange-500 hover:text-orange-500 text-sm flex-col items-center">
                    <BiSolidCategory className="text-2xl " />
                   
                    <p className="text-sm hover:text-orange-500 font-semibold text-gray-500"> Categories</p>
                  </div>
                  <Link className="flex flex-col  items-center">
                    <AiOutlineMessage className="text-2xl hover:text-orange-500 text-gray-500" />
                    <p className="text-sm font-semibold hover:text-orange-500 text-gray-500">Message</p>
                  </Link>
                  <Link
                    to="/"
                    className="flex flex-col text-orange-500  items-center"
                  >
                    <HiOutlineHome className="text-2xl   " />
                    <p className="text-sm font-semibold hover:text-orange-500 text-gray-500">Home</p>
                  </Link>
                  <Link className="flex flex-col hover:text-orange-500  items-center">
                    <CiShoppingCart className="text-2xl hover:text-orange-500 text-gray-500" />
                    <p className="text-sm font-semibold hover:text-orange-500 text-gray-500">Card</p>
                  </Link>

                  <Link className="flex flex-col hover:text-orange-500   items-center">
                    <CiUser className="text-2xl text-gray-500 hover:text-orange-500" />
                    <p className="text-sm font-semibold hover:text-orange-500 text-gray-500">Account</p>
                  </Link>
                </div>
              </label>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 -ml-2 z-[1]   w-full"
          >
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />

              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4  w-full min-h-full backdrop-blur bg-black/30  text-gray-200">
                  <div className="font-inter">
                    <div className="dropdown px-2   dropdown-bottom">
                      <div tabIndex={1} role="button" className=" m-1">
                        <ul className="mb-3 space-y-3">
                          <a className="  flex gap-2 items-center">
                            <img className="w-4" src={icon1} alt="" />
                            Womens’ & Girls’ Fashion
                          </a>

                          <a className="  items-center flex   gap-2">
                            <img className="w-4" src={icon2} alt="" />
                            Health & Beauty
                          </a>
                        </ul>

                        {/* clickable menu  */}
                        <div className="flex  justify-between gap-2">
                          <img className="w-5" src={icon3} alt="" />
                          <Link className="text-orange-500">
                            Watches, Bags, Jewellery
                          </Link>
                          <MdOutlineKeyboardArrowRight className="text-orange-500 text-lg ml-4" />
                        </div>

                        <ul className="mt-3 text-left space-y-3">
                          <a className="  flex  gap-2 items-center">
                            <img className="w-4" src={icon4} alt="" />
                            Men's & Boys' Fashion
                          </a>

                          <a className="text-left items-center flex   gap-2">
                            <img className="w-4" src={icon5} alt="" />
                            Electronics Devices
                          </a>
                          <a className="text-left items-center flex   gap-2">
                            <img className="w-5" src={icon6} alt="" />
                            TV & Home Appliances
                          </a>
                          <a className="text-left items-center flex   gap-2">
                            <img className="w-4" src={icon7} alt="" />
                            Mother & Baby
                          </a>
                          <a className="text-left items-center flex   gap-2">
                            <img className="w-4" src={icon8} alt="" />
                            Electronic Accessories
                          </a>
                          <a className="text-left items-center flex   gap-2">
                            <img className="w-4" src={icon9} alt="" />
                            Groceries
                          </a>
                          <a className="text-left items-center flex   gap-2">
                            <img className="w-4" src={icon10} alt="" />
                            Home & Lifestyle
                          </a>
                          <a className="text-left items-center flex   gap-2">
                            <img className="w-4" src={icon11} alt="" />
                            Sports & Outdoors
                          </a>
                          <a className="text-left items-center flex   gap-2">
                            <img className="w-4" src={icon12} alt="" />
                            Automobile
                          </a>
                          <a className="text-left items-center flex   gap-2">
                            <img className="w-4" src={icon13} alt="" />
                            Computer and laptop
                          </a>
                          <a className="text-left items-center flex   gap-2">
                            <img className="w-4" src={icon14} alt="" />
                            Pet Supplies
                          </a>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </ul>
        </div>
        <div className="flex gap-5"></div>
      </div>
    </div>
  );
};
export default Menu;
