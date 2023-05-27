import { useQuery } from '@tanstack/react-query';

import getProducts from '../../apis/products/getProducts';
import getNewProducts from '../../apis/products/getNewProducts';
import getProductsIncludeCategory from '../../apis/products/getProductsIncludeCategory';

const useGetProducts = () =>
  useQuery(['products'], getProducts, {
    onSuccess: (data) => {
      console.log('products', data);
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

const useGetNewProducts = () =>
  useQuery(['products', 'new'], getNewProducts, {
    onSuccess: (data) => {
      console.log('newProducts', data);
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

const useGetProductsIncludeCategory = (id: number) =>
  useQuery(['products', 'category', id], () => getProductsIncludeCategory(id), {
    onSuccess: (data) => {
      console.log('productsIncludeCategory', data);
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

export { useGetProducts, useGetNewProducts, useGetProductsIncludeCategory };
