import '../styles/globals.css';
import '../styles/responsive.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../store/config';

const theme = {
  primary: '#18214D',
  secondary: '#F3663F',
  accent: '#ffffff',
  corner: '8px',
  transparent: 'transparent',
  gray: '#DFE4EA',
  lightGray: '#EFF2F6',
  dark: '#18214D',
  shadow: '0px 3px 10px #00000012',
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
