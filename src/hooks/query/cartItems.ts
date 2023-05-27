import { QueryClient, useMutation } from '@tanstack/react-query';
import createCartItems from '../../apis/cartItems/createCartItems';

const useCreateCartItems = () => {
  const queryClient = new QueryClient();

  return useMutation(createCartItems, {
    onSuccess: () => {
      queryClient.invalidateQueries(['cartItems']);
    },
  });
};

export { useCreateCartItems };
