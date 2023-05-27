import AppLayout from '../components/layout/AppLayout';
import ProductList from '../components/product/ProductList';
import { useGetNewProducts } from '../hooks/query/products';

const NewArrivals = () => {
  const { data: products, isLoading } = useGetNewProducts();

  return <AppLayout>{products && <ProductList products={products} isLoading={isLoading} />}</AppLayout>;
};

export default NewArrivals;
