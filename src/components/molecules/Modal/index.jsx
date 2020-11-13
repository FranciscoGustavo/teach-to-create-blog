import ReactDom from 'react-dom';

const Modal = ({ isModalOpen, children }) => {
  if (!isModalOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      {children}
    </>,
    document.getElementById('modal')
  );
};

export default Modal;
