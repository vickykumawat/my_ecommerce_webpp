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
import { useEffect, useRef, useState } from "react";
import Cart from "./components/Cart";
import { CartProvider } from "./utils/context/CartContext";
import axios from "axios";
import { cartItem, CartItemProps, ProductProps } from "./utils/interface/Interface";
import SwitchButtons from "./components/SwitchButtons";

gsap.registerPlugin(useGSAP,ScrollTrigger);




// const fetchProducts = async (page: number) => {
//   const response = await axios.get('https://api.timbu.cloud/products', {
    
//       params: {
//           organization_id: '1a62fa9710c64be48fb3cf5ef1bc13a2',
//           reverse_sort: false,
//           page: page,
//           size: 5,
//           Appid: 'F1O68P9PQESTOTU',
//           Apikey: '46200433c0514fe6aafb41a24eaec2cd20240713202144420438',
//       },
//   });
//   return response.data;
// };


const fetchProducts = async (page: number) => {
  try {
    const response = await axios.get(`/api/products`, {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products from API:', error);
    throw error;
  }
};





export default function Home() {
 
  const { showCart, setShowCart } = useProducts();
  const  container = useRef<HTMLDivElement | null>(null);
  
  
    const [products, setProducts] = useState<cartItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const data = await fetchProducts(page);
                console.log(data.items);
                
                setProducts(data.items);
                setIsEmpty(data.total === 0);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

       getProducts();   
    }, [page]);



  useGSAP(()=>{
     if(typeof window !== "undefined"){
      //  const boxes = gsap.utils.toArray(".product_screen")
      //  console.log(boxes);
       requestAnimationFrame(()=>{

        const screens = document.querySelectorAll(".screen_img");
        screens.forEach(item => {
            gsap.timeline({
              scrollTrigger:{
                trigger: item,
                pin: false,
                scrub: true,
                start: "top center",
                end: "+=80px",
    
              }
            }).to(item,{
              x: -6,scale: 1, delay: 2, ease: 'bounce.out',stagger: 0.1 
            }).to(item,{
             x: 6,delay: 2, ease: 'bounce.in'
            })
        });
          
 
 
       })
     }
  },{scope: container});
    
  return (
    
    <div ref={container} className="min-w-full main_grid scroll-smooth overflow-hidden">
      <CartProvider>
         <Hero/>
          {isLoading && <div>Loading...</div>}
          {isError && <div>Error fetching products. Please try again later.</div>}
          {!isLoading && !isError && isEmpty && <div>No products available. Please refresh your browser.</div>}
          {!isLoading && !isError && !isEmpty && products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
          
            <SwitchButtons setPage={setPage} page={page}/>
            <Footer/>

            {showCart && (
              <div id="cart_box" className="cart_bag">
              <Cart/>
              </div>
            )}
       </CartProvider>
     
      
    </div>
  );
}
