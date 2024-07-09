import React from 'react'

type Props = {}

function DiscountBox({}: Props) {      
  return (
    <div className='max-w-[100%]  discount_holder grid place-items-center place-content-center bg-[#FEF1ED]'>
       <div className='flex flex-col rounded-lg gap-5 justify-center items-center max-w-[90%] discount_box text-center p-3 text-white'>
            <div><p className='mt-3 text-sm font-semibold'>Sign Up Newsletter and Promotions</p></div>
            <div className=' flex flex-col'>
                 <span className='text-3xl font-bold'>Get 25% Discount</span> 
                 <span className=' font-normal text-2xl mt-2'>On Next Order</span></div>
            <div className=' max-w-[90%] border bg-[#4B4B4B] m-5 flex gap-3 p-1 rounded-xl relative'>
                <input className='bg-transparent max-w-[70%] px-3 border border-[#4B4B4B] rounded-md' placeholder='Enter Your email'/>
                <button className='bg-[#FF9774] max-w-[100%] px-2 text-xl  text-center discount_btn '>suscribe</button>
            </div> 
       </div>
    </div>
  )
}

export default DiscountBox