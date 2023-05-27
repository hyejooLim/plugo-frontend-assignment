import { FC } from 'react';

import { Product } from '../../types';
import ProductCard from './ProductCard';
import { ProductListWrapper } from '../../styles/product/ProductList';

interface ProductListProps {
  products: Product[];
  isLoading: boolean;
}

const ProductList: FC<ProductListProps> = ({ products, isLoading }) => {
  return (
    <ProductListWrapper>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='row'>
          {products?.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      )}
    </ProductListWrapper>
  );
};

export default ProductList;
