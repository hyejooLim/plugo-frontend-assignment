import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

import { cartItemsState } from '../../recoil/cart';
import createCartItems from '../../apis/cartItems/createCartItems';
import getCartItems from '../../apis/cartItems/getCartItems';

const useCreateCartItems = () => {
  const queryClient = new QueryClient();

  return useMutation(createCartItems, {
    onSuccess: () => {
      queryClient.invalidateQueries(['cartItems']);
    },
  });
};

const useGetCartItems = () => {
  const setCartItems = useSetRecoilState(cartItemsState);

  return useQuery(['cartItems'], getCartItems, {
    onSuccess: (data) => {
      setCartItems(data);
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

export { useCreateCartItems, useGetCartItems };
