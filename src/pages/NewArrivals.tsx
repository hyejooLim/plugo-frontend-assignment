import Title from '../components/common/Title';
import AppLayout from '../components/layout/AppLayout';
import ProductList from '../components/product/ProductList';
import { useGetNewProducts } from '../hooks/query/products';

const NewArrivals = () => {
  const { data: products, isLoading } = useGetNewProducts();

  return (
    <AppLayout>
      <Title title='New Arrivals' />
      <ProductList products={products} isLoading={isLoading} />
    </AppLayout>
  );
};

export default NewArrivals;
