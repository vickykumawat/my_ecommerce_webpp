import React, { useRef, useState } from 'react'
import {  CardProps, ProductProps } from '../utils/interface/Interface'
import Image from 'next/image';
import CustomButton from './CustomButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import arrow_up from "../../public/arrow_up.svg"
import arrow_down  from "../../public/arrow_down.svg"
import { useCart } from '../utils/context/CartContext';
import DetailedView from './DetailedView';


const Card:React.FC<CardProps> = ({product}) => {


  const [quantity, setStoreCount] = useState<number>(1);
  const  [showMessage, setShowMessage] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState(false);
  const { dispatch } = useCart();
  

  const handleOpenDetail = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  const handleCart = () => {
    setShowMessage(true);
    dispatch({ type: 'ADD_TO_CART', payload: {...product, quantity}  }); 
    setTimeout(() => {
      setShowMessage(false);
    }, 1200);
  };

  const handleIncreaseCount = () =>{
    setStoreCount((prev) => prev >= 1 && prev < 10 ? prev + 1 : prev);
  }
  const handleDecreaseCount = () =>{
    setStoreCount((prev) => prev > 1 ? prev - 1 : prev);
  }

  return ( 
    <div className='card_items_box  bg-[#FEF1ED] mt-1'>
     
     <div className='card_item bg-[#FEF1ED] border-b-2 md:border-none border-[#F05A28] '>

        <div className='product_title'>
          <p className='font-medium xl:font-bold text-2xl capitalize tracking wide'> {product.name }</p>
          <p className='font-bold text-xs xl:text-lg'>{`$${product.current_price[0].NGN[0]}`}</p>
        </div>

        <div data-speed= "0.5" className='product_screen  max-w-full m-3'>
              {product.photos && product.photos.length > 0 ? (
                <Image 
                  src={`https://api.timbu.cloud/images/${product.photos[0].url}`} 
                  width={100} 
                  height={100} 
                  className='w-2/4 lg:w-9/12 xl:w-2/4 2xl:w-1/4 relative screen_img'  
                  alt="product-image" 
                  onClick={handleOpenDetail}
                />
              ) : (
                <p>No image available</p>
              )}
        </div>

        {showMessage && (
          <div className='msg_cont'> <p id="message" className='text-sm text-black'> Added to Cart! </p></div>
        )}

        <div className='product_buttons font-bold'>
          <div className="flex items-center border border-[#F05A28] px-2 py-1 rounded-[7px]">
            <span> <p className='text-lg text-[#F05A28] mr-1'> {quantity}</p> </span>
            <span className="flex flex-col  gap-2 p-1">
                <Image src={arrow_down} width={10} height={10} onClick={handleDecreaseCount} alt="decreasing arrow"/>
                <Image src={arrow_up} width={10} height={10}  onClick={handleIncreaseCount}  alt="increasing arrow"/>
            </span>
          </div>
          <CustomButton handleClick={handleCart} style={`min-w-[20%] btn_color px-5 py-2 rounded-[8px] cart`}>
              Add to Cart
          </CustomButton>
          <CustomButton style={`min-w-[20%] text-[#F05A28] px-5 py-2 rounded-[8px]`} handleClick={ handleOpenDetail }> 
             View Details
          </CustomButton>
        </div>

        {showDetail && (
          <div className="detailed-view-overlay">
            <DetailedView product={product} onShut={handleCloseDetail}/>
          </div>
        )}
     </div>

    </div>
  )
}

export default Card;