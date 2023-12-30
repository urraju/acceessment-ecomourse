import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const CardSection = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setCard(data))
    },[])
    console.log(card);
    return(
        <div className="bg-gray-200  py-10">
             <div className="">
                <div className="font-inter px-3 rounded bg-white border-b py-3 flex justify-between max-w-screen-2xl mx-auto">
                   <div className="flex items-center gap-20">
                   <h1 className="text-orange-500 font-inter text-2xl">FlashSale</h1>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <h1 className="text-gray-500 font-inter text-lg">Ending in</h1>
                            <p className="w-9 h-9 rounded-md flex items-center justify-center bg-orange-500 text-white">14</p>:
                            <p className="w-9 h-9 rounded-md p-1 text-lg   flex items-center justify-center bg-orange-500 text-white">28</p>:
                            <p className="w-9 h-9 rounded-md flex items-center justify-center text-lg   bg-orange-500 text-white">25</p> 
                        </div>
                        
                    </div>
                   </div>
                    <Link className="flex items-center gap-2 text-orange-500 text-lg font-inter ">
                        See More <MdOutlineKeyboardArrowRight className="text-2xl"/>
                        </Link>
                </div>


             </div>
            <div className="grid grid-cols-6 max-w-screen-2xl bg-white rounded p-3 mx-auto">
             {
                card.map(item => <CardItem key={item.id} data={item}/>)
             }
        </div>
        </div>
    )}
export default CardSection;