import Link from 'next/link';
import { CSSTr, CSSAuthor, CSSCategory, CSSTitle, CSSStatus } from './styles';

const CardRowPost = ({ title, slug, isPublic }) => {
  return (
    <CSSTr>
      <td>
        <CSSAuthor>
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""/>
          <div>
            <p>Francisco Gustavo</p>
            <p>jane.cooper@example.com</p>
          </div>
        </CSSAuthor>
      </td>
      <td>
        <CSSTitle>{title}</CSSTitle>
        <CSSCategory>Optimization</CSSCategory>
      </td>
      <td>
        <CSSStatus isPublic={isPublic}>
          {isPublic ? 'Publicado' : 'Borrador' }
        </CSSStatus>
      </td>
      <td>
        <Link href={`/dashboard/edit/${slug}`}>
          <a>Edit</a>
        </Link>
      </td>
    </CSSTr>
  );
}

export default CardRowPost;
