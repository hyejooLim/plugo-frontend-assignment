import { ChangeEvent, FC } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import * as S from '../../styles/common/Counter';

interface CounterProps {
  target?: string | number;
  count: number;
  isAllowInputChange: boolean;
  onChangeTargetCount?: (e: ChangeEvent<HTMLInputElement>) => void;
  onPlusTarget: (target: string) => void;
  onMinusTarget: (target: string) => void;
}

const Counter: FC<CounterProps> = ({
  target,
  count,
  isAllowInputChange,
  onPlusTarget,
  onMinusTarget,
  onChangeTargetCount,
}) => {
  const handlePlusButtonClick = (e: any) => {
    onPlusTarget(e.target.dataset.target);
  };

  const handleMinusButtonClick = (e: any) => {
    onMinusTarget(e.target.dataset.target);
  };

  return (
    <S.CounterWrapper>
      <S.CounterInput
        min={0}
        value={count}
        onChange={onChangeTargetCount}
        data-target={target}
        disabled={!isAllowInputChange}
      />
      <S.CounterButtonWrapper>
        <button data-target={target} onClick={handlePlusButtonClick}>
          <IoIosArrowUp data-target={target} />
        </button>
        <button data-target={target} onClick={handleMinusButtonClick} disabled={count === 1}>
          <IoIosArrowDown data-target={target} />
        </button>
      </S.CounterButtonWrapper>
    </S.CounterWrapper>
  );
};

export default Counter;
