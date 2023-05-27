import { FC } from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  padding: 60px 100px 30px;
  font-size: 32px;
  font-family: 'Nanum Godic';
`;

interface TitleProps {
  title: string;
  subTitle?: string;
}

const Title: FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <TitleWrapper>
      <div>
        <span>{title}</span>
        {subTitle && <span> - {subTitle}</span>}
      </div>
    </TitleWrapper>
  );
};

export default Title;
