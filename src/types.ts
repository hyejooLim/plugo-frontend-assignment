export type Category = {
  id: number;
  name: string;
  products: Product[];
  productsCount: number;
};

export type Color = {
  id: number;
  name: string;
  products: Product[];
  productsCount: number;
};

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  category: Category;
  categoryId: number;
  color: Color;
  colorId: number;
  price: number;
  createdAt?: string;
};

export type SelectedOption = {
  size: string;
  count: number;
};

export type CartItem = {
  id: number;
  name: string;
  color: Color;
  category: Category;
  imageUrl: string;
  price: number;
  size: string;
  count: number;
};
