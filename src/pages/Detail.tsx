import { useParams } from 'react-router-dom';

import AppLayout from '../components/layout/AppLayout';
import ProductDetail from '../components/product/ProductDetail';
import { useGetProduct } from '../hooks/query/product';

const Detail = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProduct(Number(id));

  return (
    <AppLayout>
      <ProductDetail product={product} isLoading={isLoading} />
    </AppLayout>
  );
};

export default Detail;
