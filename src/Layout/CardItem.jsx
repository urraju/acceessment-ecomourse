import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
const CardItem = ({data}) => {
    const {name,description,price, img,old_price} = data
    return(
        <div className="px-2">
              
                <div >
                    <div className="relative font-inter h-[350px] border rounded  px-3">
                        <img className="mx-auto rounded" src={img} alt="" />
                        <CiHeart className="absolute top-3 right-5 w-8 h-8 bg-gray-400 text-white rounded-full p-1"/>
                       <div className="absolute bottom-3">

                        <p className="bg-orange-500 text-white w-max px-3 border-dotted border-l-2 border-r-2 absolute -top-16 ">20% off</p>

                       <p className="text-lg capitalize font-semibold mb-1">{name}</p>
                        <p>{description}</p>
                        <div className="flex justify-between  mt-2 items-center">
                            <p className="text-orange-500 font-semibold">${price}</p>
                            <del>${old_price}</del>
                            <MdOutlineKeyboardArrowRight className="text-lg text-orange-500"/>
                        </div>
                       </div>
                    </div>
                
              </div>
        </div>
    )}
export default CardItem;