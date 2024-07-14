    "use client"
    import Image from 'next/image'
    import Link from 'next/link'
    import React, { useState } from 'react';
    import smart_watch from '../../public/smart-watch.svg';
    // import { cartItemProps } from '../utils/interface/Interface';
    import remove_add from '../../public/add_remove.svg';
import { CartItemProps } from '../utils/interface/Interface';
import { useCart } from '../utils/context/CartContext';



    function CartItem({
        id,
        name,
        price,
        quantity,
        photos,
        onRemove,
        onIncrease,
        onDecrease

    }: CartItemProps) {
        
        
        const { dispatch } = useCart();

            const handleIncrease = () => {
                if (quantity < 10) {
                    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id } });
                  }
            };

            const handleDecrease = () => {
                if(quantity >= 0){
                    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id } });
                }
                
            };


    return (
        <div className='cart_item_box '>
        
            <div className='item_img relative w-1/2 2xl:w-3/4 h-full'> 
                <Image src={`https://api.timbu.cloud/images/${photos[0].url}`} width={150} height={150} alt='smart watch' /> 
            </div>
            <div className='item_label right_stack font-bold text-sm 2xl:text-2xl capitalize tracking-wide'>
                {name}
            </div>
            <span className='dlt_icon text-[#F05A28]' onClick={onRemove}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </span>
            <div className='item_price right_stack'> 
                Amount: ${price}
            </div>
            <div className='item_quantity right_stack'> 
                Quanity: {quantity} 
            <div className='qty_holder px-2 py-1'>
                    <span className='text-[white]' onClick={handleIncrease}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </span>
                    <span  className='text-[white]' onClick={handleDecrease}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </span>
            </div>
            </div>

            <div className='item_count_boxes right_stack font-bold text-lg'>
            
            Total: ${(quantity * price).toFixed(2)}
            </div>
        
            
        
        </div>
    )
    }

    export default CartItem