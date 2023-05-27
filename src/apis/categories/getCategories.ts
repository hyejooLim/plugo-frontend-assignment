import clientApi from '..';
import { Category } from '../../types';

const getCategories = async (): Promise<Category[]> => {
  const response = await clientApi.get<Category[]>('/categories');
  return response;
};

export default getCategories;
