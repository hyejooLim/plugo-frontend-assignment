import { FC } from 'react';

import { Product } from '../../types';
import Loader from '../common/Loader';
import ProductCard from './ProductCard';
import { ProductListWrapper } from '../../styles/product/ProductList';

interface ProductListProps {
  products?: Product[];
  isLoading: boolean;
}

const ProductList: FC<ProductListProps> = ({ products, isLoading }) => {
  return (
    <ProductListWrapper>
      {isLoading ? (
        <Loader color='#333' size={40} isLoading={isLoading} />
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
