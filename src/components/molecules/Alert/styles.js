import styled from 'styled-components';

const handleStatus = (props) => {
  console.log('ALERT', props.status === 'success');
  switch (props.status) {
    case 'success':
      return '#42B72A';
    case 'fail':
      return '#FA3E3E';
    default: 
      return props.theme.primaryDark;
  }
}

export const CSSAlert = styled.div`
position: absolute;
top: 70px;
right: 30px;
width: 250px;
border-radius: 7px;
padding: 14px;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
background-color: ${handleStatus}; // 42B72A FA3E3E
color: ${props => props.status === undefined ? '#FFF' : props.theme.primaryDark};
transition: all 0.2s ease-in-out;

svg {
  color: ${props => props.status === undefined ? '#FFF' : props.theme.primaryDark};
  transition: all 0.2s ease-in-out;
}
`;

export const CSSTitle = styled.p`
font-size: 16px;
font-weight: bold;
`;

export const CSSMessage = styled.p`

`;

export const CSSCloseButton = styled.button`
position: absolute;
top: 14px;
right: 14px;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
cursor: pointer;
outline: none;

svg {
  font-size: 18px;
}
`;

