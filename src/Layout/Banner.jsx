import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import banner1 from "../assets/bannerSlide/slide banner.png";
import banner2 from "../assets/bannerSlide/slide banner.png";
import banner3 from "../assets/bannerSlide/slide banner.png";
import icon1 from "../assets/menuIcon/Group 598.png";
import icon2 from "../assets/menuIcon/Health & Beauty.png";
import icon3 from "../assets/menuIcon/Watches, Bags, Jewellery.png";
import icon4 from "../assets/menuIcon/man.png";
import icon5 from "../assets/menuIcon/Mother & Baby.png";
import icon6 from "../assets/menuIcon/Group.png";
import icon7 from "../assets/menuIcon/TV & Home Appliances.png";
import icon8 from "../assets/menuIcon/Group (1).png";
import icon9 from "../assets/menuIcon/Groceries.png";
import icon10 from "../assets/menuIcon/Home & Lifestyle.png";
import icon11 from "../assets/menuIcon/Sports & Outdoors.png";
import icon12 from "../assets/menuIcon/Computer and laptop.png";
import icon13 from "../assets/menuIcon/Pet Supplies.png";
import icon14 from "../assets/menuIcon/Group 598.png";

const Banner = () => {
  return (
    <div >
      <div>
        <Swiper
          dir="rtl"
          navigation={true}
          pagination={{
            clickable: true,
          }}
          //   breakpoints={{
          //     640: {
          //       slidesPerView: 2,
          //       spaceBetween: 20,
          //     },
          //     768: {
          //       slidesPerView: 4,
          //       spaceBetween: 40,
          //     },
          //     1024: {
          //       slidesPerView: 1,
          //       spaceBetween: 50,
          //     },
          //   }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <div className=" ">
            <SwiperSlide className="relative   bg-no-repeat bg-cover">
              <img className="h-[504px] object-cover" src={banner1} alt="" />
              <div className="font-inter">
                <div className="dropdown bg-white  px-2 absolute top-0 left-[184px] dropdown-left">
                  <div tabIndex={0} role="button" className=" m-2">
                    <ul className="mb-3 space-y-3">
                      <li className="text-left flex flex-row-reverse gap-2 items-center">
                        <img className="w-4" src={icon1} alt="" />
                        Womens’ & Girls’ Fashion
                      </li>

                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon2} alt="" />
                        Health & Beauty
                      </li>
                    </ul>

                    {/* clickable menu  */}
                    <div className="flex flex-row-reverse items-center justify-between gap-2">
                      <img className="w-5" src={icon3} alt="" />
                      <button className="text-orange-500">
                        Watches, Bags, Jewellery
                      </button>
                      <MdOutlineKeyboardArrowRight className="text-orange-500 text-lg ml-4" />
                    </div>

                    <ul className="mt-3 space-y-3">
                      <li className="text-left flex flex-row-reverse gap-2 items-center">
                        <img className="w-4" src={icon4} alt="" />
                        Men's & Boys' Fashion
                      </li>

                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon5} alt="" />
                        Electronics Devices
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon6} alt="" />
                        TV & Home Appliances
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon7} alt="" />
                        Mother & Baby
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon8} alt="" />
                        Electronic Accessories
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon9} alt="" />
                        Groceries
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon10} alt="" />
                        Home & Lifestyle
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon11} alt="" />
                        Sports & Outdoors
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon12} alt="" />
                        Automobile 
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon13} alt="" />
                        Computer and laptop
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon14} alt="" />
                        Pet Supplies
                      </li>

                    </ul>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content px-2 ml-1 z-30 menu p-2 shadow bg-white   w-52"
                  >
                    <ul className="text-left space-y-4 z-30 font-inter">
                      <li>kids bags</li>
                      <li>laptop bags & cases</li>
                      <li>Luggage</li>
                      <li>Travel Bags</li>
                      <li>Men’s bag</li>
                       
                      <div className="text-orange-500 font-inter flex gap-3 justify-between">  <MdOutlineKeyboardArrowRight className="text-orange-500 text-lg"/>Women’s Bag
                      </div>
                      <li>Men’s Watches</li>
                      <li>Kids Watches</li>
                      <li>women’s jewellery</li>
                      <li>men’s jewellery</li>
                      <li>sunglasses</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative bg-no-repeat bg-cover">
              <img className="h-[504px] object-cover" src={banner2} alt="" />
              <div className="font-inter">
                <div className="dropdown bg-white px-2 absolute top-0 left-[184px] dropdown-left">
                  <div tabIndex={0} role="button" className=" m-2">
                    <ul className="mb-3 space-y-3">
                      <li className="text-left flex flex-row-reverse gap-2 items-center">
                        <img className="w-4" src={icon1} alt="" />
                        Womens’ & Girls’ Fashion
                      </li>

                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon2} alt="" />
                        Health & Beauty
                      </li>
                    </ul>

                    {/* clickable menu  */}
                    <div className="flex flex-row-reverse items-center justify-between gap-2">
                      <img className="w-5" src={icon3} alt="" />
                      <button className="text-orange-500">
                        Watches, Bags, Jewellery
                      </button>
                      <MdOutlineKeyboardArrowRight className="text-orange-500 text-lg ml-4" />
                    </div>

                    <ul className="mt-3 space-y-3">
                      <li className="text-left flex flex-row-reverse gap-2 items-center">
                        <img className="w-4" src={icon4} alt="" />
                        Men's & Boys' Fashion
                      </li>

                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon5} alt="" />
                        Electronics Devices
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon6} alt="" />
                        TV & Home Appliances
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon7} alt="" />
                        Mother & Baby
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon8} alt="" />
                        Electronic Accessories
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon9} alt="" />
                        Groceries
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon10} alt="" />
                        Home & Lifestyle
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon11} alt="" />
                        Sports & Outdoors
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon12} alt="" />
                        Automobile 
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon13} alt="" />
                        Computer and laptop
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon14} alt="" />
                        Pet Supplies
                      </li>

                    </ul>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content px-2 ml-1 z-30 menu p-2 shadow bg-white   w-52"
                  >
                    <ul className="text-left space-y-4 z-30 font-inter">
                      <li>kids bags</li>
                      <li>laptop bags & cases</li>
                      <li>Luggage</li>
                      <li>Travel Bags</li>
                      <li>Men’s bag</li>
                       
                      <div className="text-orange-500 font-inter flex gap-3 justify-between">  <MdOutlineKeyboardArrowRight className="text-orange-500 text-lg"/>Women’s Bag
                      </div>
                      <li>Men’s Watches</li>
                      <li>Kids Watches</li>
                      <li>women’s jewellery</li>
                      <li>men’s jewellery</li>
                      <li>sunglasses</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative bg-no-repeat bg-cover">
              <img className="h-[504px] object-cover" src={banner3} alt="" />
              <div className="font-inter">
                <div className="dropdown bg-white px-2 absolute top-0 left-[184px] dropdown-left">
                  <div tabIndex={0} role="button" className=" m-2">
                    <ul className="mb-3 space-y-3">
                      <li className="text-left flex flex-row-reverse gap-2 items-center">
                        <img className="w-4" src={icon1} alt="" />
                        Womens’ & Girls’ Fashion
                      </li>

                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon2} alt="" />
                        Health & Beauty
                      </li>
                    </ul>

                    {/* clickable menu  */}
                    <div className="flex flex-row-reverse items-center justify-between gap-2">
                      <img className="w-5" src={icon3} alt="" />
                      <button className="text-orange-500">
                        Watches, Bags, Jewellery
                      </button>
                      <MdOutlineKeyboardArrowRight className="text-orange-500 text-lg ml-4" />
                    </div>

                    <ul className="mt-3 space-y-3">
                      <li className="text-left flex flex-row-reverse gap-2 items-center">
                        <img className="w-4" src={icon4} alt="" />
                        Men's & Boys' Fashion
                      </li>

                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon5} alt="" />
                        Electronics Devices
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon6} alt="" />
                        TV & Home Appliances
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon7} alt="" />
                        Mother & Baby
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon8} alt="" />
                        Electronic Accessories
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon9} alt="" />
                        Groceries
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon10} alt="" />
                        Home & Lifestyle
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon11} alt="" />
                        Sports & Outdoors
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon12} alt="" />
                        Automobile 
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon13} alt="" />
                        Computer and laptop
                      </li>
                      <li className="text-left items-center flex flex-row-reverse gap-2">
                        <img className="w-4" src={icon14} alt="" />
                        Pet Supplies
                      </li>

                    </ul>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content px-2 ml-1 z-30 menu p-2 shadow bg-white   w-52"
                  >
                    <ul className="text-left space-y-4 z-30 font-inter">
                      <li>kids bags</li>
                      <li>laptop bags & cases</li>
                      <li>Luggage</li>
                      <li>Travel Bags</li>
                      <li>Men’s bag</li>
                       
                      <div className="text-orange-500 font-inter flex gap-3 justify-between">  <MdOutlineKeyboardArrowRight className="text-orange-500 text-lg"/>Women’s Bag
                      </div>
                      <li>Men’s Watches</li>
                      <li>Kids Watches</li>
                      <li>women’s jewellery</li>
                      <li>men’s jewellery</li>
                      <li>sunglasses</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default Banner;
