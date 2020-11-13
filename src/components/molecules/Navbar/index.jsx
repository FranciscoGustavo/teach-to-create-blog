import Link from 'next/link';
import { CSSNavbar, CSSNavItem } from './styles';

const Navbar = () => {
  return (
    <CSSNavbar>
      <div>
        <Link href="/dashboard" className="text-white bg-gray-800 pl-2 pr-2 pt-1 pb-1 rounded block">
          <CSSNavItem active>Publicaciones</CSSNavItem>
        </Link>
        <Link href="/dashboard/new" className="text-white pl-2 pr-2 pt-1 pb-1 rounded block">
          <CSSNavItem>Nuevo</CSSNavItem>
        </Link>
      </div>
    </CSSNavbar>
  );
}

export default Navbar;