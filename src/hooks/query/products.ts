import { useQuery } from '@tanstack/react-query';
import getNewProducts from '../../apis/products/getNewProducts';

const useGetNewProducts = () =>
  useQuery(['products', 'new'], getNewProducts, {
    onSuccess: (data) => {
      console.log('newProducts', data);
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

export { useGetNewProducts };
