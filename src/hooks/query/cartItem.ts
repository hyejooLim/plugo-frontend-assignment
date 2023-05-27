import { QueryClient, useMutation } from '@tanstack/react-query';
import deleteCartItem from '../../apis/cartItem/deleteCartItem';

const useDeleteCartItem = () => {
  const queryClient = new QueryClient();

  return useMutation(deleteCartItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['cartItems']);
    },
  });
};

export { useDeleteCartItem };
