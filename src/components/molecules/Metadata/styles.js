import styled from 'styled-components';

export const CSSMetadata = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
padding: 40px;
background-color: #E6E8EE;
overflow-y: auto;

> div {
  width: 70%;
  border-radius: 7px;
  padding: 14px;
  margin: auto;
  background-color: #FFF;
}
`;

export const CSSInputCover = styled.div`
margin-bottom: 14px;

> label {
  font-weight: 700;
  line-height: 21px;
  opacity: 0.7;
}

div img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

div {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: dashed 2px rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  padding: 28px;
  margin-top: 14px;
  overflow: hidden;

  svg {
    font-size: 42px;
    opacity: 0.5;
  }

  p {
    line-height: 21px;
    font-size: 14px;
    color: ${props => props.theme.primaryDark};
  }

  p:last-child {
    font-size: 13px;
    opacity: 0.5;
  }
}

div input {
  display: none;
}
`;

export const CSSInput = styled.div`
margin-bottom: 14px;

> p {
  font-weight: 700;
  line-height: 21px;
  opacity: 0.7;
  margin-bottom: 7px;
}

div {
  display: flex;
  border-radius: 7px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.07);
  overflow: hidden;

  span {
    display: inline-flex;
    padding: 12px;
    background-color: rgba(0, 0, 0, 0.07);
    color: rgba(0, 0, 0, 0.5);
  }

  span + input {
    width: 100%;
  }

  input, textarea {
    display: inline-flex;
    width: 100%;
    padding: 12px;
    outline: none;
    resize: none;
  }
}
`;

export const CSSButton = styled.button`
display: inline-block;
border-radius: 7px;
padding: 7px 14px;
margin-right: 14px;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
background-color: ${props => props.theme.primarylight};
color: #FFF;
cursor: pointer;
outline: none;
`;

