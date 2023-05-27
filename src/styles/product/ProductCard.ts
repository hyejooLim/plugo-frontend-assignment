import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  padding: 12px;
  flex-basis: 25%;
  flex-grow: 0;
  max-width: 25%;

  @media (max-width: 1080px) {
    flex-basis: 33%;
    flex-grow: 0;
    max-width: 33%;
  }

  @media (max-width: 786px) {
    flex-basis: 50%;
    flex-grow: 0;
    max-width: 50%;
  }
`;
