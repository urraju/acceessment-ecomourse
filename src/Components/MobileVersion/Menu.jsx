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
  MdHome,
  MdMan2,
  MdMessage,
  MdOutlineKeyboardArrowRight,
  MdShop,
  MdShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";
import {   FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";

const Menu = () => {
  return (
    <div className="navbar sticky top-0 z-30  bg-base-100">
      <div className="navbar-start  ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" items-center   lg:hidden">
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className=" ">
                <div className="flex text-orange-500 text-sm flex-col items-center">
                  <BiSolidCategory className="text-lg" />
                  Categories
                </div>
              </label>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-80"
          >
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />

              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  <div className="font-inter">
                    <div className="dropdown bg-white px-2   dropdown-bottom">
                      <div tabIndex={1} role="button" className=" m-1">
                        <ul className="mb-3 space-y-3">
                          <a className="  flex   gap-2 items-center">
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
                      {/* <div
                    tabIndex={1}
                    className="dropdown-content px-2 ml-1 z-30 menu p-2 shadow bg-white   w-52"
                  >
                    <ul className="text-left space-y-4 z-30 font-inter">
                      <li>kids bags</li>
                      <li>laptop bags & cases</li>
                      <li>Luggage</li>
                      <li>Travel Bags</li>
                      <li>Men’s bag</li>
                       
                      <div className="text-orange-500 flex-row-reverse font-inter flex gap-3 justify-between">  <MdOutlineKeyboardArrowRight className="text-orange-500 text-lg"/>Women’s Bag
                      </div>
                      <li>Men’s Watches</li>
                      <li>Kids Watches</li>
                      <li>women’s jewellery</li>
                      <li>men’s jewellery</li>
                      <li>sunglasses</li>
                    </ul>
                  </div> */}
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </ul>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col ml-4 items-center">
            <MdMessage className="text-lg text-gray-500" />
            <p className="text-sm">Message</p>
          </div>
          <Link
            to="/"
            className="flex flex-col text-orange-500 ml-3 items-center"
          >
            <MdHome className="text-lg " />
            <p className="text-sm">Home</p>
          </Link>
          <Link className="flex flex-col ml-3 items-center">
            <MdShoppingCart className="text-lg text-gray-500" />
            <p className="text-sm">Card</p>
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <Link className="flex flex-col ml-3 items-center">
          <FaUser className="text-lg text-gray-500" />
          <p className="text-sm">Account</p>
        </Link>
      </div>
    </div>
  );
};
export default Menu;
