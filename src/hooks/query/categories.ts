import { useQuery } from '@tanstack/react-query';
import getCategories from '../../apis/categories/getCategories';

const useGetCategories = () => useQuery(['categories'], getCategories);

export { useGetCategories };
