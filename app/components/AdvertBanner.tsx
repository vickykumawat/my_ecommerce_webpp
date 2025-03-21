import Image from 'next/image'
import React from 'react';
import arrow_keys from '../../public/lef_right_mark.svg';
import left_card from '../../public/left_card.svg'
import right_card from '../../public/frame_2.svg'

type Props = {}

function AdvertBanner({}: Props) {
  return (
    <section className='advert-holder min-w-full overflow-hidden'>
        <div className='ad_box min-w-[90%]'> 
          <div className='ad_title_block my_flex flex-col'>
              <p className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Today&apos;s Best Deals</p>
              <p className='font-extralight text-[12px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#3B3B3B]'>Today&apos;s Most Seen Categories </p>
          </div>
          <div  className='__card'>
            {/* <Image src="/frame_1.svg" width={200} height={120} className='w-[40%] h-[auto]' alt='image' /> 
              <Image src="/frame_2.svg" width={200} height={100} className='w-[50%] h-[auto]' alt='image'/>
              </div> */}
              <div className='relative card_child bg-advert-card-1 w-full bg-cover bg-center left_child'>
                  {/* <Image src={left_card} fill alt='image' /> */}
              </div>
              <div className='relative card_child bg-advert-card-2 w-full  bg-cover bg-center h-full right_child'>
              {/* <Image src={right_card} fill alt='image' /> */}
              </div>
              </div>
          <div className="third_card">
              <Image src={arrow_keys} alt='navigation_btns' />
          </div>
        </div>
    </section>
  )
}

export default AdvertBanner