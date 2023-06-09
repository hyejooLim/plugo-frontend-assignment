import Title from '../components/common/Title';
import AppLayout from '../components/layout/AppLayout';
import ProductList from '../components/product/ProductList';
import { useGetProducts } from '../hooks/query/products';

const Products = () => {
  const { data: products, isLoading } = useGetProducts();

  return (
    <AppLayout>
      <Title title='All Products' />
      <ProductList products={products} isLoading={isLoading} />
    </AppLayout>
  );
};

export default Products;
