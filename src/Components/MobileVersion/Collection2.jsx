
import frame1 from '../../assets/collection/frame1.png'
import frame2 from '../../assets/collection/frame2.png'
import frame3 from '../../assets/collection/frame3.png'
import frame4 from '../../assets/collection/frame4.png'
import frame5 from '../../assets/collection/frame5.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Collection2 = () => {
    return(
       <div className=' py-4 px-2  bg-gray-200'>
         <div className='max-w-screen-2xl mx-auto '>
             <div className='font-inter items-center justify-center grid grid-cols-5 '>
                
                    <div className='flex items-center flex-col gap-4'>
                        <img className=' p-2  rounded-full bg-white w-10 h-10' src={frame1} alt="" />
                        <h1 className='font-semibold text-sm'>Mart</h1>
                    </div>
                   
                 
               
                    <div className='flex items-center flex-col gap-4'>
                        <img className='bg-white p-2  rounded-full w-9 h-9' src={frame2} alt="" />
                        <h1 className='font-semibold text-sm'>Fashion</h1>
                    </div>
                 
                
                    <div className='flex items-center flex-col gap-4'>
                        <img className='bg-white p-2  rounded-full w-9 h-9' src={frame3} alt="" />
                        <h1 className='font-semibold text-sm'>Beauty </h1>
                    </div>
                
                
                    <div className='flex items-center flex-col gap-4'>
                        <img className='bg-white p-2  rounded-full w-9 h-9' src={frame4} alt="" />
                        <h1 className='text-sm font-semibold'>Home  </h1>
                    </div>
                     
               
                 
                    <div className='flex items-center flex-col gap-4'>
                        <img className='bg-white  p-2  rounded-full w-10 h-10' src={frame5} alt="" />
                        <h1 className='text-sm font-semibold'>Delivery</h1>
                    </div>
                     
                 
             </div>
        </div>
       </div>
    )}
export default Collection2;