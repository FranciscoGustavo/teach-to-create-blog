import styled from 'styled-components';

export const CSSList = styled.div`
padding: 100px 0;

> div {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 84px;

  article:nth-child(2), article:nth-child(5), article:nth-child(8) {
    justify-self: center;
  }
  
  article:nth-child(3), article:nth-child(6), article:nth-child(9) {
    justify-self: end;
  }
}
`;