import { CardRowPost } from '../../molecules';
import { CSSPosts, CSSTableContainer, CSSTable, CSSTableHead, CSSTableBody } from './styles';

const Posts = ({ data }) => {
  return (
    <CSSPosts>
      <CSSTableContainer>
          <CSSTable>
            <CSSTableHead>
              <tr>
                <th>Autor</th>
                <th>Titulo</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </CSSTableHead>
            <CSSTableBody>
              {
                data.map(({ title, slug, isPublic }) => (
                  <CardRowPost
                    key={slug}
                    title={title}
                    slug={slug}
                    isPublic={isPublic}
                  />
                ))
              }
            </CSSTableBody>
          </CSSTable>
      </CSSTableContainer>
    </CSSPosts>
  );
}

export default Posts;