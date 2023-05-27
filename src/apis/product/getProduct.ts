import clientApi from '..';
import { Product } from '../../types';

const getProduct = async (id: number): Promise<Product> => {
  const response = await clientApi.get<Product>(`/product/${id}`);
  return response;
};

export default getProduct;
