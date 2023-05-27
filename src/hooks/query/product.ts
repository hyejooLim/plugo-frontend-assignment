import { QueryClient, useMutation } from '@tanstack/react-query';

import createProduct from '../../apis/product/createProduct';

const useCreateProduct = () => {
  const queryClient = new QueryClient();

  return useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });
};

export { useCreateProduct };
