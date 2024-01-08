import banner1 from "../../assets/bannerSlide/slider-image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import {} from "react-icons/fa";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
const Banner2 = () => {
  return (
    <div>
      <div>
        <Swiper
          dir="rtl"
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <div className=" ">
            <SwiperSlide className="relative">
              <img className=" w-full" src={banner1} alt="" />
              <div className="fixed right-7 gap-2 top-3 flex flex-row-reverse items-center ">
                <div className="backdrop-blur rounded-full py-2 px-2 text-white  flex gap-2 items-center bg-black/50">
                  <input
                    className="bg-transparent placeholder:text-white w-60 font-light text-left outline-none text-white"
                    placeholder="Search Product"
                    type="text"
                  />
                  <CiSearch className="font-light text-xl" />
                </div>
                <CiShoppingCart className="backdrop-blur bg-black/50 rounded-full w-9 h-9 text-white p-1" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img className=" w-full" src={banner1} alt="" />
              <div className="absolute right-7 gap-2 top-3 flex flex-row-reverse items-center ">
                <div className="backdrop-blur rounded-full py-2 px-2 text-white  flex gap-2 items-center bg-black/50">
                  <input
                    className="bg-transparent placeholder:text-white w-60 font-light text-left outline-none text-white"
                    placeholder="Search Product"
                    type="text"
                  />
                  <CiSearch className="font-light text-xl" />
                </div>
                <CiShoppingCart className="backdrop-blur bg-black/50 rounded-full w-9 h-9 text-white p-1" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img className=" w-full" src={banner1} alt="" />
              <div className="absolute right-7 gap-2 top-3 flex flex-row-reverse items-center ">
                <div className="backdrop-blur rounded-full py-2 px-2 text-white  flex gap-2 items-center bg-black/50">
                  <input
                    className="bg-transparent placeholder:text-white w-60 font-light text-left outline-none text-white"
                    placeholder="Search Product"
                    type="text"
                  />
                  <CiSearch className="font-light text-xl" />
                </div>
                <CiShoppingCart className="backdrop-blur bg-black/50 rounded-full w-9 h-9 text-white p-1" />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default Banner2;
