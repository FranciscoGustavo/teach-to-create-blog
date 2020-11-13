import { AiFillCloseCircle } from 'react-icons/ai';
import { CSSAlert, CSSTitle, CSSMessage, CSSCloseButton } from './styles';

const Alert = ({ title, message, onClose, status }) => {
  console.log(status);
  return (
    <CSSAlert status={status}>
      <CSSCloseButton onClick={onClose}>
        <AiFillCloseCircle />
      </CSSCloseButton>
      <CSSTitle>{title}</CSSTitle>
      <CSSMessage>{message}</CSSMessage>
    </CSSAlert>
  );
}

export default Alert;