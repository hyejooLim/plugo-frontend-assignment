import { useQuery } from '@tanstack/react-query';
import getColors from '../../apis/colors/getColors';

const useGetColors = () =>
  useQuery(['colors'], getColors, {
    onSuccess: (data) => {
      console.log('colors', data);
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

export { useGetColors };
