import { useMemo, useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
//SEO
import { DefaultSeo } from 'next-seo';
import { SEO } from '../../next-seo-config';

//Hooks
import { useMediaQuery } from '../hooks/useMediaQuery';

//Components
import { HeaderResponsive } from '../components/HeaderResponsive';
import { Header } from '../components/Header';
import Analytics from '../components/Analytics';

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

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
        <Analytics />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
