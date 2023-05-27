import clientApi from '..';
import { Product } from '../../types';

const getProducts = async (): Promise<Product[]> => {
  const response = await clientApi.get<Product[]>('/products');
  return response;
};

export default getProducts;
