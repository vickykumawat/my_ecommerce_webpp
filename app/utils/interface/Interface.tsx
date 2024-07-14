import { StaticImport } from "next/dist/shared/lib/get-img-props";
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
    
    id: string;
    name: string;
    description: string | null;
    unique_id: string;
    url_slug: string;
    is_available: boolean;
    is_service: boolean;
    previous_url_slugs: string | null;
    unavailable: boolean;
    unavailable_start: string | null;
    unavailable_end: string | null;
    parent_product_id: string | null;
    parent: string | null;
    organization_id: string;
    product_image: any[];
    categories: any[];
    date_created: string;
    last_updated: string;
    user_id: string;
    photos: Photo[];
    current_price: CurrentPrice[];
    is_deleted: boolean;
    available_quantity: number;
    selling_price: number | null;
    discounted_price: number | null;
    buying_price: number | null;
    extra_infos: any;
  }
  
  export interface Photo {
    model_name: string;
    model_id: string;
    organization_id: string;
    filename: string;
    url: string;
    is_featured: boolean;
    save_as_jpg: boolean;
    is_public: boolean;
    file_rename: boolean;
    position: number;
  }
  
  export interface CurrentPrice {
    NGN: [number, number | null, any[]];
  }

  export interface productContextProps{
    showCart: boolean ;
    setShowCart :React.Dispatch<React.SetStateAction<boolean>> ;
  }

export interface cartItem extends ProductProps {
  quantity: number; 
  price: number;
}

export interface CartState {
  cart: cartItem[];
}

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: cartItem }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string } }
  | { type: 'INCREMENT_QUANTITY'; payload: { id: string } }
  | { type: 'DECREMENT_QUANTITY'; payload: { id: string } };

export interface CartContextType {
  cart: cartItem[];
  dispatch: React.Dispatch<CartAction>;
}
export interface CardProps {
  product: cartItem
}



export interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  photos: Photo[];
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

export interface DetailedItemViewProps {
  product: cartItem;
  onShut: () => void; 
}