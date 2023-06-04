import { ChangeEvent, FC } from 'react';
import { useRecoilState } from 'recoil';
import { IoMdClose } from 'react-icons/io';

import Counter from '../common/Counter';
import { selectedItemsState } from '../../recoil/cart';
import { SelectedOption as SelectedOptionType } from '../../types';
import { SelectedOptionWrapper } from '../../styles/common/SelectedOption';

interface SelectedOptionProps {
  option: SelectedOptionType;
}

const SelectedOption: FC<SelectedOptionProps> = ({ option }) => {
  const [selectedOptions, setSelectedOptions] = useRecoilState(selectedItemsState);

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

  return (
    <SelectedOptionWrapper>
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
    </SelectedOptionWrapper>
  );
};

export default SelectedOption;
