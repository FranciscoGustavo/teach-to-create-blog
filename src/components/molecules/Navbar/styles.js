import styled from 'styled-components';

export const CSSNavbar = styled.nav`
grid-column: 1 / 2;
grid-row: 1 / 3;
padding: 14px;
background-color: ${props => props.theme.primarylight};
`; 

export const CSSNavItem = styled.div`
display: block;
border-radius: 7px;
padding: 7px;
background-color: ${props => props.active ? props.theme.primaryDark : props.theme.primarylight};
text-decoration: none;
color: #FFF;
cursor: pointer;
`;