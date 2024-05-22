//tyep for Variants
export type TVariants = {
  type: string;
  value: string;
};


//type for Inventory
export type TInventory = {
  quantity: number;
  inStock: boolean;
};


//type for Product
export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariants[];
  inventory: TInventory;
};
 
