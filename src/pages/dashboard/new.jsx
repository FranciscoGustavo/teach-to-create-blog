import cookies from 'next-cookies';
import { PostEditor } from '../../components/organims';
import { LayoutDashboard } from '../../components/templates';

export async function getServerSideProps(context) {
  const { user } = cookies(context);
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
  }
  return {
    props: {},
  }
}

const DashboardNew = () => {
  const dataForm = [
    { name: 'id', value: undefined },
    { name: 'title', value: '' },
    { name: 'cover', value: '' },
    { name: 'body', value: '' },
    { name: 'description', value: '' },
    { name: 'keywords', value: '' },
    { name: 'slug', value: '' },
  ];

  return (
    <LayoutDashboard>
      <PostEditor data={dataForm} />
		</LayoutDashboard>
  );
}

export default DashboardNew;