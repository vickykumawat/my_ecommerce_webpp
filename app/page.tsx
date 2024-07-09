"use client"
import Hero from "./components/Hero";
import { useProducts } from "./utils/context/Context";
import Card from "./components/Card";
import DiscountBox from "./components/DiscountBox";
import Footer from "./components/Footer";
import jacket from "../public/jacket101.svg";
import smart_watch from "../public/smart-watch.svg";
import strawberries from "../public/strawberries.svg";
import laptopo from "../public/HpLaptop.jpg"
import AdvertBanner from "./components/AdvertBanner";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger);



export default function Home() {
  const { getCategory } = useProducts();
  const gadgetsAndAppliances = getCategory("gadgetsAndAppliances");
  const mensFashion = getCategory("mensFashion");
  const fruits = getCategory("Fruits");
  
  const  container = useRef<HTMLDivElement | null>(null);

  useGSAP(()=>{
     if(typeof window !== "undefined"){
       const boxes = gsap.utils.toArray(".product_screen")
      //  console.log(boxes);
       requestAnimationFrame(()=>{

        const screens = document.querySelectorAll(".product_screen");
        screens.forEach(item => {
            gsap.timeline({
              scrollTrigger:{
                trigger: item,
                pin: false,
                scrub: true,
                start: "center center",
                end: "bottom center",
    
              }
            }).to(item,{
              x: -6, delay: 2, ease: 'bounce.out',stagger: 0.1 
            }).to(item,{
             x: 6,delay: 2, ease: 'bounce.in'
            })
        });
          
 
 
       })
     }
  },{scope: container})


  return (
    <div ref={container} className="min-w-full main_grid scroll-smooth overflow-hidden">
      
      <Hero/>
      <Card 
      product_label="Highlight"
      product_title="Smart watch G"
      product_price="$50"
      heading_styles={`text-lg font-bold `}
      title_styles={``}
      screen_styles={``}
      stock_info_styles={``}
      buttons_styles={`font-bold`}
      imageUrl={smart_watch}

      />
      <AdvertBanner/>
      <Card
      product_title="Men&apos;s Jacket"
      product_price="$200"
       heading_styles={`text-lg font-bold`}
       title_styles={``}
       screen_styles={``}
       stock_info_styles={``}
       buttons_styles={`font-bold`}
       imageUrl={jacket}
      />
      <Card
      product_title="Strawberries"
      product_price="$3"
       heading_styles={`text-lg font-bold`}
       title_styles={``}
       screen_styles={``}
       stock_info_styles={``}
       buttons_styles={`font-bold`}
       imageUrl={strawberries}
      />
      <Card
      product_title="Gadgets and Appliances"
      product_price="$200"
       heading_styles={`text-lg font-bold`}
       title_styles={``}
       screen_styles={``}
       stock_info_styles={``}
       buttons_styles={`font-bold`}
       imageUrl={smart_watch}
      />
      <DiscountBox/>
      <Footer/>
      
     
      
    </div>
  );
}
