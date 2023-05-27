import { FC, useCallback, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import BasicModal from '../common/BasicModal';
import { useGetColors } from '../../hooks/query/colors';
import { useGetCategories } from '../../hooks/query/categories';
import { useCreateProduct } from '../../hooks/query/product';
import useInput from '../../hooks/common/useInput';
import * as S from '../../styles/manage/CreateProductModal';

interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateProductModal: FC<CreateProductModalProps> = ({ isOpen, onClose }) => {
  const [name, onChangeName, setName] = useInput('');
  const [imageUrl, onChangeImageUrl, setImageUrl] = useInput('');
  const [price, onChangePrice, setPrice] = useInput(0);

  const [colorId, setColorId] = useState(1);
  const [categoryId, setCategoryId] = useState(1);

  const { data: colors } = useGetColors();
  const { data: categories } = useGetCategories();
  const createProduct = useCreateProduct();

  const colorOptions = colors?.map((color) => ({
    value: color.name,
    label: color.name,
  }));

  const categoryOptions = categories?.map((category) => ({
    value: category.name,
    label: category.name,
  }));

  useEffect(() => {
    if (createProduct.isSuccess) {
      successCreateProduct();
    }
  }, [createProduct.isSuccess]);

  const successCreateProduct = () => {
    toast.success('상품이 등록되었습니다.', {
      autoClose: 2000,
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
    });

    handleModalClose();
  };

  const initModalInput = () => {
    setName('');
    setImageUrl('');
    setPrice(0);
  };

  const handleModalClose = () => {
    onClose();
    initModalInput();
  };

  const handleColorChange = (value: string) => {
    const id = colors?.find((color) => color.name === value).id;
    setColorId(id);
  };

  const handleCategoryChange = (value: string) => {
    const id = categories?.find((category) => category.name === value).id;
    setCategoryId(id);
  };

  const handleProductCreate = useCallback(() => {
    const newProduct = {
      name,
      imageUrl,
      price: Number(price),
      colorId,
      categoryId,
    };

    createProduct.mutate({ data: newProduct });
  }, [name, imageUrl, price, colorId, categoryId]);

  return (
    <>
      <BasicModal title='Create Product' isOpen={isOpen} onClose={handleModalClose}>
        <S.StyledForm onFinish={handleProductCreate}>
          <div className='input_form'>
            <label>Name</label>
            <br />
            <S.StyledInput value={name} onChange={onChangeName} type='text' required />
          </div>
          <div className='input_form'>
            <label>ImageUrl</label>
            <br />
            <S.StyledInput value={imageUrl} onChange={onChangeImageUrl} type='text' required />
          </div>
          <div className='input_form'>
            <label>Color</label>
            <br />
            <S.StyledSelect defaultValue='red' options={colorOptions} onChange={handleColorChange} />
          </div>
          <div className='input_form'>
            <label>Category</label>
            <br />
            <S.StyledSelect defaultValue='top' options={categoryOptions} onChange={handleCategoryChange} />
          </div>
          <div className='input_form price'>
            <label>Price</label>
            <br />
            <S.StyledInput value={price} onChange={onChangePrice} type='number' min={0} required />
          </div>
          <S.CreateButton htmlType='submit'>CREATE</S.CreateButton>
        </S.StyledForm>
      </BasicModal>
      <ToastContainer />
    </>
  );
};

export default CreateProductModal;
