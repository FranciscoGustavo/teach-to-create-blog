import styled from 'styled-components';

export const CSSArticle = styled.article`
width: 100%;
max-width: 290px;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
border-radius: 14px;
overflow: hidden;
`;

export const CSSInfo = styled.div`
padding: 14px;

h2 {
  margin-bottom: 14px;
  font-size: 21px;
  font-weight: bold;
}

p {
  margin-bottom: 14px;
}

a {
  display: inline-block;
  border-radius: 5px;
  padding: 7px 14px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
  background-color: ${props => props.theme.secondary};
  text-transform: uppercase;
  text-decoration: none;
  color: white;
}
`;

export const CSSImage = styled.div`
height: 150px;

img {
  width: 100%;
}
`;