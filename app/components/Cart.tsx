
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
import { useCart } from '../utils/context/CartContext'
import { cartItem } from '../utils/interface/Interface'
// import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/navigation'



const Cart = () => {
    const { setShowCart } = useProducts();
    // const router = useRouter();

  const handleCheckout = () => {
    setShowCart(false);
    // router.push('/checkout'); 
    // const ite

  };
  const { cart, dispatch } = useCart();

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } as cartItem}); 
  };

  const incrementQuantity = (id: string) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id } as cartItem });
  };

  const decrementQuantity = (id: string) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id } as cartItem });
  };
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const subTotal = cart.reduce((total, item) => {
    const itemPrice = item.current_price?.[0]?.NGN?.[0] ?? 0; 
    if (!isNaN(itemPrice) && item.quantity > 0) {
        return total + itemPrice * item.quantity;
    }
    return total;
}, 0);
  const deliveryFee = 5;
  const total = subTotal + deliveryFee;

  return (
   <section className='cart_main p-3 rounded-xl'>
        <Link href="/" className='back_link gap-5' onClick={handleCheckout}> 
            <Image src={back_logo}  width={10} height={10} alt='back home' />
            <p className='text-xl text-bold text-[#F05A28]'> Cart </p>
        </Link>
       {cart.map(item => (
            <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.current_price?.[0]?.NGN?.[0] ?? 0}
                quantity={item.quantity}
                photos={item.photos}
                onRemove={() => removeFromCart(item.id)}
                onIncrease={() => incrementQuantity(item.id)}
                onDecrease={() => decrementQuantity(item.id)}
            />
       ))}
       
        <div className='items_grand_total_calculator text-sm  m-2'>
            <div className="ordered_ font-medium">
                <span>Item Ordered</span> <span>{totalItems}</span>
            </div>
            <div className='sub_total_ font-medium'>
                <span>Sub Total</span> <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="delivery_ font-medium">
                <span>Delivery</span> <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className='total_ font-bold'>
                <span>Total</span> <span>${total.toFixed(2)}</span>
            </div>
        </div>
        <CustomButton  style='proceed_ text-white p-3'>
            <Link href="/checkout"   >
                Proceed to Checkout
            </Link>
        </CustomButton>
   </section>
  )
}

export default Cart