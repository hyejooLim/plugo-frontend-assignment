import clientApi from '..';

const deleteCartItem = async (id: number) => {
  return await clientApi.delete(`/cart-item/${id}`);
};

export default deleteCartItem;
