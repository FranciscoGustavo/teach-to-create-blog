import Link from 'next/link';
import { CSSArticle, CSSImage, CSSInfo } from './styles';

const CardPost = ({ title }) => {
  return (
    <CSSArticle>
      <CSSImage>
        <img src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/11/UniversalCoverings_1200_Social.jpg" alt=""/>
      </CSSImage>
      <CSSInfo>
        <h2>{title}</h2>
        <p>La instalacion de de node.js es muy facil. Sin enbargo a los principiates se les complica pero qui esta la solución</p>
        <Link href="/como-instalar-node-js-sin-moririr-en-el-intento">
          <a>Leer más</a>
        </Link>
      </CSSInfo>
    </CSSArticle>
  );
}

export default CardPost;