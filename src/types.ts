export type Category = {
  id: number;
  name: string;
  productsCount: number;
};

export type Color = {
  id: number;
  name: string;
  productsCount: number;
};

export type Product = {
  id?: number;
  name: string;
  imageUrl: string;
  category?: Category;
  categoryId: number;
  color?: Color;
  colorId: number;
  price: number;
  createdAt?: string;
};