import { useQuery } from '@tanstack/react-query';

import getProducts from '../../apis/products/getProducts';
import getNewProducts from '../../apis/products/getNewProducts';
import getProductsIncludeCategory from '../../apis/products/getProductsIncludeCategory';

const useGetProducts = () => useQuery(['products'], getProducts);

const useGetNewProducts = () => useQuery(['products', 'new'], getNewProducts);

const useGetProductsIncludeCategory = (id: number) =>
  useQuery(['products', 'category', id], () => getProductsIncludeCategory(id));

export { useGetProducts, useGetNewProducts, useGetProductsIncludeCategory };
