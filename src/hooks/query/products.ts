import { useQuery } from '@tanstack/react-query';

import getProducts from '../../apis/products/getProducts';
import getNewProducts from '../../apis/products/getNewProducts';
import getProductsIncludeCategory from '../../apis/products/getProductsIncludeCategory';

const useGetProducts = () =>
  useQuery(['products'], getProducts, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

const useGetNewProducts = () =>
  useQuery(['products', 'new'], getNewProducts, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

const useGetProductsIncludeCategory = (id: number) =>
  useQuery(['products', 'category', id], () => getProductsIncludeCategory(id), {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

export { useGetProducts, useGetNewProducts, useGetProductsIncludeCategory };
