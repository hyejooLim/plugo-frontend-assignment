import { useParams, useLocation } from 'react-router-dom';

import Title from '../components/common/Title';
import AppLayout from '../components/layout/AppLayout';
import ProductList from '../components/product/ProductList';
import { useGetProductsIncludeCategory } from '../hooks/query/products';

const Category = () => {
  const { id } = useParams();
  const { state: category } = useLocation();
  const { data: products, isLoading } = useGetProductsIncludeCategory(Number(id));

  return (
    <AppLayout>
      <Title title='Category' subTitle={category.name} />
      <ProductList products={products} isLoading={isLoading} />
    </AppLayout>
  );
};

export default Category;
