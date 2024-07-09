import { Section } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CartItem from './CartItem'
import back_logo from '../../public/back_icon.svg';
import smart_watch from '../../public/smart-watch.svg';
import jacket from '../../public/jacket101.svg';
import CustomButton from './CustomButton'
import { useProducts } from '../utils/context/Context'

type Props = {}

const Cart = (props: Props) => {
    const { setShowCart } = useProducts();
    // const to_checkout = document.querySelector(".proceed_")?.addEventListener("click",)

  return (
   <section className='cart_main p-3 rounded-xl'>
        <Link href="/" className=' back_link gap-5 '> 
            <Image src={back_logo}  width={10} height={10} alt='back home' onClick={()=> setShowCart(false)}/>
            <p className='text-xl text-bold text-[#F05A28]'> Cart </p>
        </Link>
        <CartItem
             itemImg={smart_watch}
             itemPrice="$250"
             itemLabel="Smart Watch G"
             itemQuantity="5"
             itemTotal="$250"
        />
        <CartItem
            itemImg={jacket}
            itemPrice="$200"
            itemLabel="Men's Fashion"
            itemQuantity="5"
            itemTotal="$200"
        />
        <div className='items_grand_total_calculator text-sm  m-2'>
            <div className="ordered_ font-medium">
                <span>Item Ordered</span> <span>2</span>
            </div>
            <div className='sub_total_ font-medium'>
                <span>Sub Total</span> <span>$450</span>
            </div>
            <div className="delivery_ font-medium">
                <span>Delivery</span> <span>$5</span>
            </div>
            <div className='total_ font-bold'>
                <span>Total</span> <span>$455</span>
            </div>
        </div>
        <CustomButton  style='proceed_ text-white p-3'>
            <Link href="/checkout">
                Proceed to Checkout
            </Link>
        </CustomButton>
   </section>
  )
}

export default Cart