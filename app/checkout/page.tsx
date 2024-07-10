import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import back_logo from '../../public/back_icon.svg';
import history from '../../public/history.svg';
import payment from '../../public/paym_method.svg';
import cards from '../../public/card_det.svg';
import CustomButton from '../components/CustomButton';
import { useProducts } from '../utils/context/Context';



type Props = {}

const Checkout = (props: Props) => {

  // const { setShowCart } = useProducts();



  return (
    <div className='min-h-screen bg-[#FEF1ED] p-5'>
       <div className='checkout_nav max-w-[730px] mx-auto'>
          <div className='order_summary'>
            <Link href="/"  className='back_line'>
              <Image src={back_logo} alt ="go back"/>
              <p className='text-lg text-bold text-[#F05A28]'> Order Summary </p>
            </Link>
          </div>
          <div className='history_box relative'>
              <Image src={history}  fill alt ="go back"/>
          </div>
          <div className='payment_method relative'>
          <Image src={payment}  fill alt ="go back"/>
            
          </div>
          <div className='card_one relative'>
          <Image src={cards}  fill alt ="go back"/>

          </div>
        
        
          <CustomButton  style='payment_btn text-white p-4 '>
              <Link href="/success" >
                Make Payment
              </Link>
          </CustomButton>
          
        </div>
    </div>
  )
}

export default Checkout;