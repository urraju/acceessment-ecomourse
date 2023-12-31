import frame1 from '../assets/collection/frame1.png'
import frame2 from '../assets/collection/frame2.png'
import frame3 from '../assets/collection/frame3.png'
import frame4 from '../assets/collection/frame4.png'
import frame5 from '../assets/collection/frame5.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Collection = () => {
    return(
       <div className=' py-4 px-2 md:px-0 mt-10 bg-gray-200'>
         <div className='max-w-screen-xl mx-auto '>
             <div className='font-inter grid grid-cols-5  gap-4'>
                <div className='flex items-center hover:shadow-lg duration-200 hover:text-orange-500   justify-between px-2 rounded-full py-2 bg-white'>
                    <div className='flex items-center gap-4'>
                        <img className='bg-orange-100 p-1  rounded-full w-9 h-9' src={frame1} alt="" />
                        <h1 className='font-semibold'>Mart</h1>
                    </div>
                    <MdOutlineKeyboardArrowRight className='text-2xl  '/>
                </div>
                <div className='flex items-center justify-between px-2 rounded-full py-2 bg-white hover:shadow-lg duration-200 hover:text-orange-500'>
                    <div className='flex items-center gap-4'>
                        <img className='bg-orange-100 p-1  rounded-full w-9 h-9' src={frame2} alt="" />
                        <h1 className='font-semibold'>Fashion</h1>
                    </div>
                    <MdOutlineKeyboardArrowRight className='text-2xl'/>
                </div>
                <div className='flex items-center justify-between px-2 rounded-full py-2 bg-white hover:shadow-lg duration-200 hover:text-orange-500'>
                    <div className='flex items-center gap-4'>
                        <img className='bg-orange-100 p-1  rounded-full w-9 h-9' src={frame3} alt="" />
                        <h1 className='font-semibold'>Beauty & Glamour</h1>
                    </div>
                    <MdOutlineKeyboardArrowRight className='text-2xl'/>
                </div>
                <div className='flex items-center justify-between px-2 rounded-full py-2 bg-white hover:shadow-lg duration-200 hover:text-orange-500'>
                    <div className='flex items-center gap-4'>
                        <img className='bg-orange-100 p-1  rounded-full w-9 h-9' src={frame4} alt="" />
                        <h1 className='font-semibold'>Home Makeover</h1>
                    </div>
                    <MdOutlineKeyboardArrowRight className='text-2xl'/>
                </div>
                <div className='flex items-center justify-between px-2 rounded-full py-2 bg-white hover:shadow-lg duration-200 hover:text-orange-500'>
                    <div className='flex items-center gap-4'>
                        <img className='bg-orange-100 p-1  rounded-full w-9 h-9' src={frame5} alt="" />
                        <h1 className='font-semibold'>Free Delivery</h1>
                    </div>
                    <MdOutlineKeyboardArrowRight className='text-2xl'/>
                </div>
             </div>
        </div>
       </div>
    )}
export default Collection;