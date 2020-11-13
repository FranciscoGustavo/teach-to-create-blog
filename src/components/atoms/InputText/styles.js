import styled from 'styled-components';

export const CSSLabel = styled.label`
font-weight: bold;
`;

export const CSSInput = styled.input`
display: block;
width: 100%;
padding: 7px;
outline: none;
border-bottom: solid 2px ${props => props.theme.primarylight};
`; 