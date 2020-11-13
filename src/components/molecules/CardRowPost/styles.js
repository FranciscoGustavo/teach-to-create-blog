import styled from 'styled-components';

export const CSSTr = styled.tr`
border-top: solid 1px rgba(0, 0, 0, 0.14);
border-bottom: solid 1px rgba(0, 0, 0, 0.14);
td {
  padding: 12px 24px;
  white-space: nowrap;
}
`;

export const CSSAuthor = styled.div`
display: flex;

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

div {
  margin-left: 14px;
  p {
    line-height: 21px;
  } 
  p:first-child {
    font-weight: bold;
  }

  p:last-child {
    opacity: 0.5;
  }
}
`;

export const CSSTitle = styled.p`
line-height: 21px;

`;
export const CSSCategory = styled.p`
line-height: 21px;
opacity: 0.5;
`;

export const CSSStatus = styled.span`
display: inline-flex;
padding: 0 12px;
border-radius: 7px;
background-color: ${props => props.isPublic ? 'rgba(0, 255, 0, 0.14)' : 'rgba(255, 0, 0, 0.14)'};
color: rgba(0, 0, 0, 0.8);
font-size: 12px;
line-height: 21px;
`;