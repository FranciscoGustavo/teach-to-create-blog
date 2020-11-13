import cookies from 'next-cookies';
import { Loading } from '../../components/atoms';
import { Posts } from '../../components/organims';
import { LayoutDashboard } from '../../components/templates';
import { useRequest } from '../../hooks';
import { UsersService } from '../../services';

export async function getServerSideProps(context) {
  const { user } = cookies(context);
  if (!user || user === 'null') {
    context.res.writeHead(302, { Location: '/login' }).end();
  }
  return {
    props: {},
  }
}

const Dashboard = () => {
  const [error, loading, data] = useRequest(UsersService.getMyPosts());

  return (
    <LayoutDashboard>
      { loading ? <Loading /> : null }
      { !error && !loading ?  <Posts data={data.posts}/> : null }
      { error ? <h1>{error.message}</h1> : null }
    </LayoutDashboard>
  );
}
 export default Dashboard;
