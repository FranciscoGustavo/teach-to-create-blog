import styled from 'styled-components';

export const CSSPostWrapper = styled.div`
padding: 100px 0;

> div {
  border-radius: 7px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
  overflow: hidden;
}
`;

export const CSSCover = styled.div`
height: 200px;
overflow: hidden;

img {
  width: 100%;
}
`;

export const CSSPost = styled.div`
padding: 28px;

h1 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 14px;
  margin-bottom: 14px;
  font-size: 35px;
  font-weight: bold;
  color: #000;
}
`;