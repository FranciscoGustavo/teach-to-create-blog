import styled from 'styled-components';

export const CSSDashboard = styled.div`
display: grid;
grid-template-columns: 230px 1fr;
grid-template-rows: 60px 1fr;
width: 100vw;
height: 100vh;
overflow: hidden;
`; 

export const CSSMain = styled.main`
grid-column: 2 / 3;
grid-row: 2 / 3;
width: 100%;
height: 100%;
overflow: hidden;
`;