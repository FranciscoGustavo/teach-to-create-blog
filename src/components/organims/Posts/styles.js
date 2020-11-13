import styled from 'styled-components';

export const CSSPosts = styled.div`
width: 100%;
height: 100%;
padding: 42px;
background-color: rgba(75, 90, 138, 0.14);
overflow-y: auto;
`;

export const CSSTableContainer = styled.div`
width: 100%;
border-radius: 7px;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
overflow: hidden;
`;

export const CSSTable = styled.table`
width: 100%;
border-collapse: collapse;
`;

export const CSSTableHead = styled.thead`
tr th {
  padding: 12px 24px;
  background-color: rgba(75, 90, 138, 0.07);
  text-align: left;
  text-transform: uppercase;
  line-height: 14px;
}
`;

export const CSSTableBody = styled.tbody`
background-color: #FFF;

img {
  width: 40px;
  height: 40px;
}
`;