import styled from 'styled-components';

export const CSSContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CSSWraper = styled.div`
  position: relative;
  width: 100%;
  max-width: 335px;
`;

export const CSSCloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fa3e3e;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;
  outline: none;
`;
