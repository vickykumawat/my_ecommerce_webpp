import React from 'react'

type Props = {}

function DiscountBox({}: Props) {      
  return (
    <div className='max-w-[100%]  discount_holder grid place-items-center place-content-center bg-[#FEF1ED]'>
        <div className='flex flex-col justify-center items-center discount_box rounded-xl px-5 mx-auto max-w-[300px] py-5 text-center text-white gap-5' >
          <div className="">
            <p className=' text-sm font-semibold'>Sign Up Newsletter and Promotions</p>
          </div>
              <div className='flex flex-col'>
                    <span className='text-3xl font-bold'>Get 25% Discount</span> 
                    <span className=' font-light text-3xl mt-1'>On Next Order</span>
                </div>
              <div className='w-full border bg-[#4B4B4B]  rounded-xl flex  items-center'>
                  <input className='bg-transparent  px-3 border border-[#4B4B4B] input_tag p-2 w-full' placeholder='Enter Your email'/>
                  <button className='bg-[#FF9774]  -mr-2  discount_btn  h-[30px] px-2'><p className='text-sm relative'>  suscribe</p></button>
              </div> 
          </div>
    </div>
  )
}

export default DiscountBox