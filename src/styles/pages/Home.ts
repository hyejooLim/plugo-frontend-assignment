import styled from 'styled-components';

export const NewArrivalsWrapper = styled.div`
  width: 100%;
  margin-top: 100px;

  & .new_arrivals_text {
    height: 60px;
    text-align: center;
    font-size: 36px;
    font-family: 'Nanum Godic';
    margin-bottom: 52px;
  }

  & .new_arrivals {
    display: flex;
    justify-content: space-around;
    margin: 30px 40px;
  }
`;

export const ClickZone = styled.div`
  height: 180px;
  background-color: #78b5ff;
  text-align: center;
  font-size: 40px;
  line-height: 180px;
  margin: 140px 0;
  cursor: pointer;

  &:hover {
    background-color: #92c1fa;
  }

  & span {
    color: #fff;
  }
`;
