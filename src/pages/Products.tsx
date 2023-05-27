import { useState } from 'react';

import AppLayout from '../components/layout/AppLayout';
import ProductList from '../components/product/ProductList';
import { Product } from '../types';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <AppLayout>
      <ProductList products={products} />
    </AppLayout>
  );
};

export default Products;
