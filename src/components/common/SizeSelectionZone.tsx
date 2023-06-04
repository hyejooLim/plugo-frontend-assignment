import { FC } from 'react';
import { useRecoilState } from 'recoil';

import { SelectedOption } from '../../types';
import { selectedOptionsState } from '../../recoil/productDetail';
import { SizeSelectedZoneWrapper } from '../../styles/common/SizeSelectedZone';

interface SizeSelectionZoneProps {
  sizes: string[];
}

const SizeSelectionZone: FC<SizeSelectionZoneProps> = ({ sizes }) => {
  const [selectedOptions, setSelectedOptions] = useRecoilState(selectedOptionsState);

  const handleSizeButtonClick = (e: any) => {
    const { size } = e.target.dataset;

    const optionIdx = selectedOptions.findIndex((option) => option.size === size);
    let newSelectedOptions: SelectedOption[] = [];

    if (optionIdx >= 0) {
      newSelectedOptions = selectedOptions.map((option, idx) =>
        idx === optionIdx ? { ...option, count: option.count + 1 } : option
      );
    } else {
      newSelectedOptions = [
        ...selectedOptions,
        {
          size,
          count: 1,
        },
      ];
    }

    setSelectedOptions(newSelectedOptions);
  };

  return (
    <SizeSelectedZoneWrapper>
      <p>Size</p>
      <ul>
        {sizes.map((size, idx) => (
          <button key={idx} className='size_button' data-size={size} onClick={handleSizeButtonClick}>
            {size}
          </button>
        ))}
      </ul>
    </SizeSelectedZoneWrapper>
  );
};

export default SizeSelectionZone;
