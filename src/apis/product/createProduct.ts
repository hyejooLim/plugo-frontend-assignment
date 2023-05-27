import clientApi from '..';

interface CreateProductProps {
  name: string;
  imageUrl: string;
  price: number;
  colorId: number;
  categoryId: number;
}

const createProduct = async ({ data }: { data: CreateProductProps }) => {
  return await clientApi.post('/product', { data });
};

export default createProduct;
