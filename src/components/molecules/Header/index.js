import Link from 'next/link';
import { Container } from '../../../styles';
import { CSSHeader, CSSNav } from './styles';

const Header = () => {
  return (
    <CSSHeader>
      <Container>
        <p>FrcGustavo</p>
        <CSSNav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="blog">
            <a>Blog</a>
          </Link>
        </CSSNav>
      </Container>
    </CSSHeader>
  );
}

export default Header;
