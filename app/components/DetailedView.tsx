import React, { useState } from 'react'
import { DetailedItemViewProps } from '../utils/interface/Interface'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { useCart } from '../utils/context/CartContext'
import Link from 'next/link'
import { useProducts } from '../utils/context/Context'


const DetailedView = ({product, onShut}: DetailedItemViewProps) => {

    const [message, setMessage] = useState<boolean>(false);
    const { dispatch } = useCart();
    const {setShowCart} = useProducts()

    const handleAddToCart = () => {
        
            dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
            setMessage(true);
            setTimeout(() => {
                setMessage(false);
              }, 1200);
        
      };

  return (
    <div className="detailed-view bg-[#FEF1ED]">

        <span className='text-[white] close_btn' onClick={ onShut}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
            </svg>
        </span>
        <div className='item_images'>

            {product.photos.map((photo) => (
            <div key={photo.model_id} className="item-image relative border border-[#FEF1ED] drop-shadow-lg w-[200px] h-[200px]">
                <Image src={`https://api.timbu.cloud/images/${photo.url}`} fill alt="Product Image" />
            </div>
            ))}
        </div>

        <div className="item-description text-center">
            <h2 className='text-xl capitalize tracking-wider font-bold'>{product.name}</h2>
            <p className='text-xs px-5 py-2'>{product.description}</p>
            <p className="text-lg">Price: ${product.current_price[0].NGN[0]}</p>
            {message && (
                 <p className='text-sm text-black'>Added to cart!</p> 
            )}
           <div className="flex items-center gap-6">
                <CustomButton style='w-1/2 p-2 rounded-[6px] bg-[#F05A28] text-[white] drop-shadow-lg' handleClick={handleAddToCart}>
                    ADD TO CART
                </CustomButton>
                <CustomButton style="w-1/2 p-2 rounded-[6px] bg-[#F05A28] text-[white] drop-shadow-lg" handleClick={onShut}>
                <Link href="/" onClick={() => setShowCart(true)}>
                    VIEW CART
                </Link>  
                   
                </CustomButton>
           </div>
      </div>
        
    </div>
  )
}


export default DetailedView