import { FC } from 'react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return <div>{product.id}</div>;
};

export default ProductCard;
