import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useParams } from "react-router-dom";
import NavbarHead from "../Pages/NavbarHead";
import Navbar from "./Navbar";

const Details = () => {
  const { id } = useParams();
  const number = parseInt(id);
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  const finddata = card.find((item) => item.id === number);
 
  return (
    <div className="bg-gray-200 px-3">
      <NavbarHead />
      <Navbar />
      <div className="max-w-screen-2xl  p-5 justify-center items-center  flex gap-10 bg-white mx-auto mt-3">
        <div>
          <img className="w-96 rounded" src={finddata?.img} alt="" />
        </div>
        <div className="font-inter">
          <p className="capitalize text-xl">{finddata?.name}</p>
          <p className="mb-3">{finddata?.description}</p>
          <div className="flex gap-3   items-center">
            <p>5.9</p>
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <p className="border-l px-2 border-gray-500">
                  24 <span className="text-gray-400">Rating</span>
                </p>
                <p className="border-l px-2 border-gray-500">
                  3.3k <span className="text-gray-400">Sold</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex mt-3 gap-5">
            <p className="text-xl text-orange-500">${finddata?.price}/-</p>
            <del>${finddata?.old_price}</del>
            <p className="bg-orange-500 text-white px-2">-44% OFF</p>
          </div>
          <p className="text-gray-400 mt-3">
            Brand : <span className="text-gray-700">No brand</span>
          </p>
          <div className="flex mt-3 gap-3">
            <p>Size : </p>
            <p className="bg-gray-200 text-orange-500 flex justify-center items-center font-semibold h-8 w-8  rounded-lg">
              M
            </p>
            <p className="bg-gray-200 text-orange-500 flex justify-center items-center font-semibold h-8 w-8  rounded-lg">
              L
            </p>
            <p className="bg-gray-200 text-orange-500 flex justify-center items-center font-semibold h-8 w-8  rounded-lg">
              XL
            </p>
            <p className="text-gray-200 bg-orange-500  flex justify-center items-center font-semibold h-8 w-10  rounded-lg">
              XXL
            </p>
          </div>
          <p className="text-gray-400">
            Color : <span className="text-black">Black</span>
          </p>
          <div className="flex gap-2 mt-3">
            <p className="w-10 h-10  shadow-xl  rounded border  bg-red-600"></p>
            <p className="w-10 h-10  shadow-xl  rounded border  bg-yellow-600"></p>
            <p className="w-10 h-10  shadow-xl  rounded border  bg-blue-600"></p>
            <p className="w-10 h-10  shadow-xl  rounded border  bg-violet-700"></p>
            <p className="w-10 h-10  shadow-xl  rounded border  bg-black "></p>
          </div>
          <p className="text-gray-400 mt-3">
            Sku : <span className="text-black">hdgdjsalfsj</span>
          </p>
          <div className="flex gap-4  items-center">
            <p className="text-gray-400 mt-3">
              Quantity : <span className="text-black"></span>
            </p>
            <div className="flex gap-5 items-center mt-3">
              <p className="bg-gray-200 w-8 h-8 p-1 rounded flex  items-center text-xl justify-center">
                -
              </p>
              <p>01</p>
              <p className="bg-gray-200 w-8 h-8 p-1 rounded flex  items-center text-xl justify-center">
                +
              </p>
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <button className="text-white bg-orange-500 px-10 py-2 rounded">
              Buy Now
            </button>
            <button className="text-white bg-yellow-500 px-10 py-2 rounded">
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
