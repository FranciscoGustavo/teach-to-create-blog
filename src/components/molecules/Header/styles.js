import styled from 'styled-components';

export const CSSHeader = styled.header`
height: 60px;
background: linear-gradient(90deg, ${props => props.theme.primaryDark}, ${props => props.theme.primarylight});

div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

`;

export const CSSNav = styled.nav`
a {
  display: inline-block;
  border-radius: 5px;
  margin-left: 21px;
  padding: 7px 14px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
  background-color: rgba(0, 0, 0, 0.14);
  text-transform: uppercase;
  text-decoration: none;
  color: white;
}
`;