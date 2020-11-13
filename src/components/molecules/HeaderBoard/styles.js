import styled from 'styled-components';

export const CSSHeader = styled.header`
grid-column: 2 / 3;
grid-row: 1 / 2;
display: flex;
justify-content: flex-end;
align-items: center;
padding: 0 40px;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
`; 

export const CSSMenuContainer = styled.div`
position: relative;

&:hover > div:last-child {
  width: 225px;
  height: 31px;
}
`;

export const CSSMenu = styled.div`
position: absolute;
top: 100%;
right: 0%;
width: 0px;
height: 0px;
border-radius: 7px;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
background-color: #FFF;
overflow: hidden;
transition: all 0.2s ease-in-out;

button {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 31px;
  padding: 7px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}
`;


export const CSSCircleImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
cursor: pointer;
`;