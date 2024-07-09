import React, { useRef, useState } from 'react'
import { CardItemsProps } from '../utils/interface/Interface'
import Image from 'next/image';
import CustomButton from './CustomButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const Card:React.FC<CardItemsProps> = ({
  product_label,
  product_title,
  product_price,
  heading_styles,
  title_styles,
  screen_styles,
  stock_info_styles,
  buttons_styles,
  imageUrl,
}) => {
  const  [showMessage, setShowMessage] = useState<boolean>(false);
  const handleCart = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1200);
  };

  return (
    <div className='card_items_box  bg-[#FEF1ED] mb-3'>
     
     <div   className='card_item bg-[#FEF1ED] border-b-2 md:border-none border-[#F05A28] '>
        {product_label  ? (
            <div className={` product_heading ${heading_styles}`}>
              <div className='flex header_box  text-center '>
                <p className='text-lg md:text-4xl font-bold product_header p-1'>{product_label}</p>
                <span className='hidden md:flex items-center category_box font-normal text-sm md:text-lg xl:text-xl border border-[#F05A28] px-2'>
                  <p className=''>Select Category</p>
                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[20px] px-1">
                            <path  d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-[#F05A28]/[50%] max-w-[80px] shadow-xl -mt-1 z-10 fixed right-0 left-0'>
                            <DropdownMenuItem className="text-white text-sm">
                              Gadget and Appliances
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem className="text-white text-sm">
                                Men&apos;s Fashion
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>

                            <DropdownMenuItem className="text-white text-sm">
                              Fruits
                            </DropdownMenuItem >
                            <DropdownMenuSeparator/>
                        </DropdownMenuContent>
                  </DropdownMenu>
                </span> 
              </div>
            </div>
        ): (<> </>)}
         
        <div className={`product_title ${title_styles}`}>
          <p className='font-medium'> {product_title}</p>
          <p className='font-bold text-sm'>{product_price}</p>
        </div>
        <div data-speed= "0.5" className={`product_screen ${screen_styles} max-w-full`}>
          <Image src={imageUrl} className='w-2/4 relative screen_img' alt="product-image"  />
        </div>
         {showMessage && (
           <div className='msg_cont'> <p id="message" className='text-sm text-black'> Added to Cart! </p></div>
          )}
        <div className={`product_buttons ${buttons_styles}`}>
          <CustomButton style={`min-w-[10%] p-2 rounded-xl`}>
              1
          </CustomButton>
          <CustomButton handleClick={handleCart} style={`min-w-[20%] btn_color p-2 rounded-xl cart`}>
              Add to Cart
          </CustomButton>
          <CustomButton style={`min-w-[20%] text-[#F05A28] p-2 rounded-xl`}> 
              Add to Wishlist
          </CustomButton>
        </div>
     </div>
    </div>
  )
}

export default Card;