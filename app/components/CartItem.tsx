import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import smart_watch from '../../public/smart-watch.svg';
import { cartItemProps } from '../utils/interface/Interface';
import remove_add from '../../public/add_remove.svg';



function CartItem({
    itemImg,
    itemPrice,
    itemLabel,
    itemQuantity,
    itemTotal

}: cartItemProps) {
  return (
    <div className='cart_item_box '>
       
        <div className='item_img relative'> 
            <Image src={itemImg} fill  alt='smart watch' /> 
        </div>
        <div className='item_label right_stack font-bold text-lg'>
            {itemLabel}
         </div>
        <div className='item_price right_stack'> 
            Amount: {itemPrice}
        </div>
        <div className='item_quantity right_stack'> 
            Quanity: {itemQuantity} 
            <Image src={remove_add} alt='add-remove'/>
        </div>

        <div className='item_count_boxes right_stack font-bold text-lg'>
          
           Total: {itemTotal}
        </div>
       
        
       
    </div>
  )
}

export default CartItem