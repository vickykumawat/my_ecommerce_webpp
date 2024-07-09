import React from 'react';
import brand_logo from "../../public/logo.svg";
import Image from 'next/image';
import social_link from '../../public/social_icons.svg'

type Props = {}

const Footer = (props: Props) => {
  return (
    <section className='max-w-[100%] footer_holder bg-[#FFFFFF]'>
        <div className='footer_box'>

            <div className='footer_header'>
                <div className=' my_flex px-3 p-3'>
                    <div><Image src={brand_logo} alt='cart-icon'  className='w-[20px] md:w-[30px] xl:w-[40px]'/></div>
                    <p className='text-black md:text-xl xl:text-2xl'>UrbanNest</p>
                </div>
            </div>

            <div className='footer_info_box mb-3'>
                <div className='visit_link links'>
                    <div className='items_holder text-sm  p-2'>
                        <p className='footer_sub_headers font-bold text-[#000000]'>Visit Links</p>
                        <a href="/" className='text-sm font-normal text-[#898989]'>shop</a>
                        <a href="/" className='text-sm font-normal text-[#898989]'>Privacy</a>
                        <a href="/" className='text-sm font-normal text-[#898989]'> Terms & Condition</a>
                    </div>
                </div>
                <div className='company links'>
                    <div className='items_holder text-sm  p-2'>
                        <p className='footer_sub_headers  font-bold text-[#000000]'>Company</p>
                        <a href="/" className='text-sm font-normal text-[#898989]'>Home</a>
                        <a href="/" className='text-sm font-normal text-[#898989]'>About Us</a>
                        <a href="/" className='text-sm font-normal text-[#898989]'>Contact Us</a>
                    </div>
                </div>
                <div className='contact links'>
                <div className='items_holder text-sm  p-2'>
                        <p className='footer_sub_headers  font-bold text-[#000000]'>Contact</p>
                        <a href="/" className='text-sm font-normal text-[#898989]'>+11 (0) 363 7484 98</a>
                        <a href="/" className='text-sm font-normal text-[#898989]'>contact@urbannest.com</a>
                    </div>
                </div>
                <div className='address links'>
                    <div className='items_holder text-sm  p-2'>
                        <p className='footer_sub_headers  font-bold text-[#000000]'>Address</p>
                        <a href="/" className='text-sm font-normal text-[#898989]'>Lawel Kori 765</a>
                        <a href="/" className='text-sm font-normal text-[#898989]'>Kudi street</a>
                        <a href="/" className='text-sm font-normal text-[#898989]'>Greenville</a>
                    </div>
                </div>
            </div>
            <div className='root_holder mt-3 border-b border-t border-[#F05A28] p-2'>
                <div className='root_box flex flex-col justify-center items-center gap-3 '>
                    <div className='p-2'><Image src={social_link} className='w-[200px]' alt='social media links'/></div>
                    <div><p className='text-[#898989]'>&copy; 2024 Urban Next All Rights Reserved</p> </div>
                </div>
            </div>
            <div className='blank_'>

            </div>
        </div>
    </section>
  )
}

export default Footer