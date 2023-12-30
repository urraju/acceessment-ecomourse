import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const CardCollection = () => {
    return(
        <div>
              <div className="font-inter px-3 rounded bg-white border-b py-3 flex justify-between max-w-screen-2xl mx-auto">
                   <div className="flex items-center gap-5">
                   <h1 className="text-orange-500 font-inter text-xl">FlashSale</h1>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            
                            <p className="w-7 h-7 rounded-md flex p-2 items-center justify-center bg-orange-500 text-white">20</p>
                            <p className="w-7 h-7 rounded-md p-2 text-lg   flex items-center justify-center bg-orange-500 text-white">10</p>
                            <p className="w-7 h-7 p-2 rounded-md flex items-center justify-center text-lg   bg-orange-500   text-white">30</p> 
                        </div>
                        
                    </div>
                   </div>
                    <Link className="flex items-center  text-orange-500 text-md font-inter ">
                        See More <MdOutlineKeyboardArrowRight className=""/>
                        </Link>
                </div>
        </div>
    )}
export default CardCollection;