import { useParams } from 'react-router-dom';

import AppLayout from '../components/layout/AppLayout';
import ProductList from '../components/product/ProductList';
import { useGetProductsIncludeCategory } from '../hooks/query/products';

const Category = () => {
  const { id } = useParams();
  const { data: products, isLoading } = useGetProductsIncludeCategory(Number(id));

  return <AppLayout>{products && <ProductList products={products} isLoading={isLoading} />}</AppLayout>;
};

export default Category;
