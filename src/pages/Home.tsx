import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Product } from '../types';
import AppLayout from '../components/layout/AppLayout';
import ProductCard from '../components/product/ProductCard';
import { NewArrivalsWrapper, ClickZone } from '../styles/pages/Home';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <AppLayout>
      <img src='https://blog.kakaocdn.net/dn/ckSJVV/btrbOIhNd6v/bntgZ59cR4SKQlFYHECDJK/img.jpg' width={'100%'} />
      <NewArrivalsWrapper>
        <div className='new_arrivals_text'>New Arrivals</div>
        <div className='new_arrivals'>
          {products?.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </NewArrivalsWrapper>
      <ClickZone>
        <Link to={'/products'}>
          <span>Click here to view all products</span>
        </Link>
      </ClickZone>
    </AppLayout>
  );
};

export default Home;
