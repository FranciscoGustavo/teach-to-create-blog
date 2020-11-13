import { Container } from '../../../styles';
import { CSSPostWrapper, CSSPost, CSSCover } from './styles';

const ReadPost = () => {
  return (
    <CSSPostWrapper>
      <Container>
        <CSSCover>
          <img src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/11/UniversalCoverings_1200_Social.jpg" />
        </CSSCover>
        <CSSPost>
          <h1>Titulo de mi post</h1>
          <div>Testo de mi post</div>
        </CSSPost>
      </Container>
    </CSSPostWrapper>
  );
}

export default ReadPost;
