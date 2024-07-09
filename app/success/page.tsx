import React from 'react';
import CustomButton from '../components/CustomButton';
import successimg from '../../public/payment_success.svg';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

function page({}: Props) {
  return (
    <div className='min-h-screen bg-[#FEF1ED] p-7 max-w-[520px] mx-auto'>
        <div className='success_grid'>
            <div className='success_box relative'>
              <Image src={successimg} alt ="go back"/>
            </div>
            <CustomButton style='rec_btn bg-[#F05A28] rounded-xl'>
                Get Receipt
            </CustomButton>
            <CustomButton style='home_btn bg-[#F05A28] rounded-xl'>
                <Link href="/">
                    Go to Home
                </Link>
            </CustomButton>
        </div>
    </div>
  )
}

export default page