import { useQuery } from '@tanstack/react-query';
import getCategories from '../../apis/categories/getCategories';

const useGetCategories = () =>
  useQuery(['categories'], getCategories, {
    onSuccess: (data) => {
      console.log('categories', data);
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

export { useGetCategories };
