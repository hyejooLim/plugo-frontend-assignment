import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';

import createProduct from '../../apis/product/createProduct';
import getProduct from '../../apis/product/getProduct';

const useCreateProduct = () => {
  const queryClient = new QueryClient();

  return useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });
};

const useGetProduct = (id: number) => useQuery(['product', id], () => getProduct(id));

export { useCreateProduct, useGetProduct };
