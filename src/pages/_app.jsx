import App from 'next/app';
import cookies from 'next-cookies';
import { ThemeProvider } from 'styled-components';
import { UserProvider } from '../contexts';
import { GlobalStyles, theme } from '../styles';

const MyApp = ({ Component, pageProps, user }) => {
  return (
    <UserProvider initialValue={user}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}

MyApp.getInitialProps = async function(context) {
  const { user } = cookies(context.ctx);
  const props = await App.getInitialProps(context);
  return { ...props, user };
}

export default MyApp;
