import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Product } from '../types';
import AppLayout from '../components/layout/AppLayout';
import ProductDetail from '../components/product/ProductDetail';

const dummyData = {
  id: 1,
  name: 'top1',
  category: {
    id: 1,
    name: 'top',
    products: [],
    productsCount: 10,
  },
  categoryId: 1,
  color: { id: 4, name: 'YELLOW', products: [], productsCount: 6 },
  colorId: 4,
  imageUrl: 'https://img.pikbest.com/png-images/qianku/children-s-day-clothes_2240459.png!f305cw',
  price: 100000,
};

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>(dummyData);

  return (
    <AppLayout>
      <ProductDetail product={product} />
    </AppLayout>
  );
};

export default Detail;
