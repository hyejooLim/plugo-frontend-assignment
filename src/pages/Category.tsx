import { useState } from 'react';

import { Product } from '../types';
import AppLayout from '../components/layout/AppLayout';
import ProductList from '../components/product/ProductList';

const Category = () => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <AppLayout>
      <ProductList products={products} />
    </AppLayout>
  );
};

export default Category;
