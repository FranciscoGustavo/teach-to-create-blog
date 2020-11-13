import { HeaderBoard, Navbar } from '../../molecules';
import { CSSDashboard, CSSMain } from './styles';

const LayoutDashboard = ({ children }) => {
  return (
    <CSSDashboard>
      <Navbar />
      <HeaderBoard />
      <CSSMain>
        {children}
      </CSSMain>
    </CSSDashboard>
  );
}

export default LayoutDashboard;
