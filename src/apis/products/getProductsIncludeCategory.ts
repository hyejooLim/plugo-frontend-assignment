import clientApi from '..';
import { Product } from '../../types';

const getProductsIncludeCategory = async (id: number): Promise<Product[]> => {
  const response = await clientApi.get<Product[]>(`/products/category/${id}`);
  return response;
};

export default getProductsIncludeCategory;
