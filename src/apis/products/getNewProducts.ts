import clientApi from '..';
import { Product } from '../../types';

const getNewProducts = async (): Promise<Product[]> => {
  const response = await clientApi.get<Product[]>('/new-products');
  return response;
};

export default getNewProducts;
