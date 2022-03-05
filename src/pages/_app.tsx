import { useMemo } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

//SEO
import { DefaultSeo } from 'next-seo';
import { SEO } from '../../next-seo-config';

//Hooks
import { useMediaQuery } from '../hooks/useMediaQuery';

//Components
import { HeaderResponsive } from '../components/HeaderResponsive';
import { Header } from '../components/Header';

//Global styles
import { GlobalStyle } from '../styles/global';

//Themes
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/themes';
import { useTheme } from '../hooks/useThemes';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useTheme();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const router = useRouter();

  const hiddenHeaderIn = useMemo(() => ['/fale-conosco'], []);

  return (
    <>
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <DefaultSeo {...SEO} />
        <GlobalStyle />
        {!hiddenHeaderIn.includes(router.pathname) &&
          (isDesktop ? (
            <Header handleToogleTheme={toggleTheme} />
          ) : (
            <HeaderResponsive handleToogleTheme={toggleTheme} />
          ))}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
