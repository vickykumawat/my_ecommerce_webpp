import { StaticImageData } from "next/image";

export type ButtonType = {
    style: string,
    children?: React.ReactNode,
    btnCategory?:string,
    handleClick?:() => void
}
export type searchIconProps = {
    styling: string,
}
export interface ProductProps {
    id:  number;
    label: string;
    imageUrl?: string; 
    price: string;
  }
  
  export interface SubCategoryProps {
    [key: string]: ProductProps[]; 
  }
  
  export interface CategoryProps {
    id: number;
    category: string;
    products: ProductProps[] | SubCategoryProps; 
  }
  export interface EachCategoryProps{
  
    gadgetsAndAppliances: CategoryProps;
    mensFashion: CategoryProps;
    fruits: CategoryProps;
    
  }

  export interface productContextProps{
    categories: CategoryProps[];
    getCategory: (category: string) => CategoryProps | undefined
  }

  export interface CardItemsProps {
    product_label?:string
    heading_styles?: string;
    title_styles: string;
    screen_styles: string;
    stock_info_styles?:string,
    stock_info_desc?: string,
    stock_info_btn?: string,
    buttons_styles:string,
    imageUrl:StaticImageData;
      product_title: string;
      product_price: string;
      header_card?: boolean;
}