import clientApi from '..';
import { Product } from '../../types';

const getNewProducts = async (): Promise<Product[]> => {
  const response = await clientApi.get<Product[]>('/products/new');
  return response;
};

export default getNewProducts;
