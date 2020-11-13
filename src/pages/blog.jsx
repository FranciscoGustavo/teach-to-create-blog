import { useEffect, useState } from 'react';
import { ListPosts } from '../components/organims';
import { LayoutBlog } from '../components/templates';
import { PostsService } from '../services';

const Blog = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true); 
  const [data, setData] = useState([]); 

  useEffect(() => {
    PostsService.getAll()
    .then(({ posts }) => {
      console.log(posts)
      setData(posts)
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      setError(true);
    });
  }, []);

  return (
    <LayoutBlog>
      { loading ? <h1>Cargando</h1> : null }
      { !error && !loading ? <ListPosts data={data} /> : null }
      { error ? <h1>Error</h1> : null }
      
    </LayoutBlog>
  );
}

export default Blog;