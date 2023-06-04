import { FC, ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { IoMdClose } from 'react-icons/io';
import { BsCartCheckFill } from 'react-icons/bs';

import Loader from '../common/Loader';
import Counter from '../common/Counter';
import SizeSelectionZone from '../common/SizeSelectionZone';
import { Product, SelectedOption } from '../../types';
import { useCreateCartItems } from '../../hooks/query/cartItems';
import * as S from '../../styles/product/ProductDetail';

interface ProductDetailProps {
  product: Product;
  isLoading: boolean;
}

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const ProductDetail: FC<ProductDetailProps> = ({ product, isLoading }) => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { mutate: createCartItems, isSuccess: isSuccessCreateCartItems } = useCreateCartItems();

  useEffect(() => {
    if (isSuccessCreateCartItems) {
      loadSuccessModal();
    }
  }, [isSuccessCreateCartItems]);

  const loadSuccessModal = useCallback(() => {
    Modal.confirm({
      icon: <BsCartCheckFill />,
      content: '선택하신 상품이 장바구니에 추가 되었습니다.',
      cancelText: '쇼핑 계속하기',
      okText: '장바구니로 이동',
      onCancel: () => {
        setSelectedOptions([]);
      },
      onOk: () => {
        setSelectedOptions([]);
        navigate('/cart');
      },
    });
  }, []);

  const handleOptionPlus = (target: string) => {
    const newSelectedOptions = selectedOptions.map((option) =>
      option.size === target ? { ...option, count: option.count + 1 } : option
    );
    setSelectedOptions(newSelectedOptions);
  };

  const handleOptionMinus = (target: string) => {
    const newSelectedOptions = selectedOptions.map((option) =>
      option.size === target && option.count > 1 ? { ...option, count: option.count - 1 } : option
    );
    setSelectedOptions(newSelectedOptions);
  };

  const handleChangeOptionCount = (e: ChangeEvent<HTMLInputElement>) => {
    const { dataset, value } = e.target;

    const newSelectedOptions = selectedOptions.map((option) =>
      option.size === dataset.target ? { ...option, count: Number(value) } : option
    );
    setSelectedOptions(newSelectedOptions);
  };

  const onRemoveSelectedOption = (e: any) => {
    const newSelectedOptions = selectedOptions.filter((option) => option.size !== e.target.dataset.size);
    setSelectedOptions(newSelectedOptions);
  };

  const handleAddToCart = () => {
    if (selectedOptions.length === 0) {
      alert('상품을 선택해주세요.');
      return;
    }

    const { name, color, category, imageUrl, price } = product;

    const newCartItems = selectedOptions.map((option) => ({
      name,
      imageUrl,
      colorId: color.id,
      categoryId: category?.id,
      price,
      size: option.size,
      count: option.count,
    }));

    createCartItems({ data: newCartItems });
  };

  const getTotalPrice = useCallback(() => {
    const totalCount = selectedOptions.reduce((acc, option) => acc + option.count, 0);

    return product?.price * totalCount;
  }, [selectedOptions]);

  useEffect(() => {
    if (selectedOptions.length > 0) {
      setTotalPrice(getTotalPrice());
    }
  }, [selectedOptions]);

  return (
    <S.ProductDetailWrapper>
      {isLoading ? (
        <Loader color='#333' size={40} isLoading={isLoading} />
      ) : (
        <S.ProductDetailContainer>
          <div className='product_image'>
            <img src={product?.imageUrl} width={482} />
          </div>
          <S.ProductInfo>
            <div className='product_name'>
              {product?.name} - {product?.color.name}
            </div>
            <div className='product_price'>{product?.price.toLocaleString()}원</div>
            <SizeSelectionZone
              sizes={sizes}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {selectedOptions.map((option) => (
                <S.SelectedOptionBox>
                  <div className='size'>
                    <span>{option.size}</span>
                  </div>
                  <Counter
                    target={option.size}
                    count={option.count}
                    isAllowInputChange={true}
                    onChangeTargetCount={handleChangeOptionCount}
                    onPlusTarget={handleOptionPlus}
                    onMinusTarget={handleOptionMinus}
                  />
                  <IoMdClose className='close_icon' data-size={option.size} onClick={onRemoveSelectedOption} />
                </S.SelectedOptionBox>
              ))}
              <div className='total_price'>Total {totalPrice.toLocaleString()}원</div>
            </div>
            <S.ButtonWrapper>
              <button className='add_to_cart_button' onClick={handleAddToCart}>
                ADD TO CART
              </button>
            </S.ButtonWrapper>
          </S.ProductInfo>
        </S.ProductDetailContainer>
      )}
    </S.ProductDetailWrapper>
  );
};

export default ProductDetail;
