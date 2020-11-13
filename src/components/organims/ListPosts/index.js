import { CardPost } from '../../molecules'; 
import { Container } from '../../../styles';
import { CSSList } from './styles';

const ListPosts = ({ data }) => {
  return (
    <CSSList>
      <Container>
        {
          data.map(({ title }) => <CardPost title={title} />)
        }
      </Container>
    </CSSList>
  );
}

export default ListPosts;
