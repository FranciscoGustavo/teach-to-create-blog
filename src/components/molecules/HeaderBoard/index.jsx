import { useUserDispatch } from '../../../contexts';
import { logoutAction } from '../../../actions';
import { CSSHeader, CSSMenuContainer, CSSCircleImage, CSSMenu } from './styles';

const HeaderBoard = () => {
  const dispatch = useUserDispatch();
  const handleLogout = () => {
   dispatch(logoutAction());
  }

  return (
    <CSSHeader>
      <CSSMenuContainer>
        <CSSCircleImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
        <CSSMenu>
          <button onClick={handleLogout}>Salir</button>  
        </CSSMenu>
      </CSSMenuContainer>
    </CSSHeader>
  );
};

export default HeaderBoard;
