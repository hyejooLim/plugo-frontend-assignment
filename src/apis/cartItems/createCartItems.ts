import clientApi from '..';

interface CreateCartItemsProps {
  name: string;
  imageUrl: string;
  colorId: number;
  categoryId: number;
  price: number;
  size: string;
  count: number;
}

const createCartItems = async ({ data }: { data: CreateCartItemsProps[] }) => {
  return await clientApi.post('/cart-items', { data });
};

export default createCartItems;
