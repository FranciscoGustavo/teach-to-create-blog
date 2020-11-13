import styled from 'styled-components';

export const CSSEditor = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
height: 100%;
`;

export const CSSMarkdown = styled.div`
display: grid;
grid-template-rows: auto 1fr;
width: 50%;
height: 100%;

textarea {
  display: block;
  width: 100%;
  height: 100%;
  padding: 28px;
  resize: none;
  outline: none;
  line-height: 21px;
}
`;

export const CSSHeader = styled.div`
padding: 28px 28px 14px 28px;

button {
  display: inline-block;
  border-radius: 7px;
  padding: 7px 14px;
  margin-right: 14px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
  background-color: ${props => props.theme.primarylight};
  color: #FFF;
  cursor: pointer;
  outline: none;
}

button:disabled {
  opacity: 0.5;
  cursor: default;
}
`;

export const CSSHtml = styled.div`
width: 50%;
height: 100%;
background-color: rgba(75,90,138,0.14);

div {
  height: 100%;
  padding: 28px;
  overflow-y: auto;
}
`;