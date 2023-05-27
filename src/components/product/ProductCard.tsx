import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import { Product } from '../../types';
import { ProductCardWrapper } from '../../styles/product/ProductCard';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <ProductCardWrapper>
      <Link to={{ pathname: `/product/${product.id}` }}>
        <Card hoverable cover={<img alt={product.name} src={product.imageUrl} height={260} />}>
          <Card.Meta
            title={`${product.name} - ${product.color.name}`}
            description={`Price ${product.price.toLocaleString()}`}
          />
        </Card>
      </Link>
    </ProductCardWrapper>
  );
};

export default ProductCard;
