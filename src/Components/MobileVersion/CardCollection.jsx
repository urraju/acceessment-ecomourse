import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CiHeart } from "react-icons/ci";

const CardCollection = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("/mobileData.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div>
      <div className="font-inter px-3 rounded bg-white border-b py-3 flex justify-between max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-5">
          <h1 className="text-orange-500 font-inter text-xl">FlashSale</h1>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <p className="w-7 h-7 rounded-md flex p-2 items-center justify-center bg-orange-500 text-white">
                20
              </p>
              <p className="w-7 h-7 rounded-md p-2 text-lg   flex items-center justify-center bg-orange-500 text-white">
                10
              </p>
              <p className="w-7 h-7 p-2 rounded-md flex items-center justify-center text-lg   bg-orange-500   text-white">
                30
              </p>
            </div>
          </div>
        </div>
        <Link className="flex items-center  text-orange-500 text-md font-inter ">
          See More <MdOutlineKeyboardArrowRight className="" />
        </Link>
      </div>

      <div>
        <>
          <Swiper
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="flex">
              {card.map((item) => (
                <SwiperSlide key={item.id} className="mb-16">
                  <div className="flex relative font-inter">
                    <div className=" px-1 ">
                      <img src={item.img} alt="" />
                      <div className="bg-orange-500 text-white w-max border-dotted border-l-2 border-r-2 px-3 mb-2 ">
                        <h1>22% off</h1>
                      </div>
                      <CiHeart className="absolute top-3 left-36 w-8 h-8 bg-white border text-orange-400 rounded-full p-1" />
                      <p className="text-sm">{item.description}</p>
                      <div className="flex items-center gap-4">
                        <p className="text-orange-500 text-lg">${item.price}</p>
                        <del className="text-sm">${item.old_price}</del>
                      </div>
                    </div>
                    <div className=" grid grid-cols-2 mt-4  flex-nowrap gap-1 w-3/4 px-1">
                      <div className="flex flex-col items-center border">
                        <img src={item.gift_img} alt="" />
                        <p className="text-sm">Jerseys</p>
                      </div>
                      <div className="flex flex-col items-center border">
                        <img src={item.gift_img} alt="" />
                        <p className="text-sm">Jerseys</p>
                      </div>
                      <div className="flex flex-col items-center border">
                        <img src={item.gift_img} alt="" />
                        <p className="text-sm">Jerseys</p>
                      </div>
                      <div className="flex flex-col items-center border">
                        <img src={item.gift_img} alt="" />
                        <p className="text-sm">Jerseys</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </>
      </div>
    </div>
  );
};
export default CardCollection;
