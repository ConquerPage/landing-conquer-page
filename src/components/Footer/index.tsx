import Link from 'next/link';
import { config } from '../Header/content';

interface IFooterProps {
  ShowCTA?: boolean;
}

//Styles
import {
  MyFooter,
  Wrapper,
  ContentInfo,
  ContentList,
  NavList,
  NavItemAni,
} from './styles';

export function Footer({ ShowCTA = true }: IFooterProps) {
  const wrapperVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.6,
        bounce: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const liVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <MyFooter showCTA={ShowCTA}>
      <Wrapper>
        {ShowCTA && (
          <ContentInfo>
            <h2>Chegou até aqui e ainda está com dúvida ?</h2>
            <p>
              Com a <strong>ConquerPage</strong> você vai ter do seu lado o{' '}
              <strong>MELHOR</strong> que a tecnologia pode oferecer para você{' '}
              <strong>
                conquistar mais clientes e alavancar as suas vendas
              </strong>
              , não perca tempo!! Clica no botão abaixo para conhecer nossos
              planos e começar a{' '}
              <strong>transformar de vez os seus resultados</strong>.
            </p>
            <Link href="/cadastro" passHref>
              <a>
                <span id="first-text-button">
                  Quero alavancar minhas vendas
                </span>
                <span id="second-text-button">Construtor de páginas gratuito</span>
              </a>
            </Link>
          </ContentInfo>
        )}
        <ContentList
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={wrapperVariants}
          showCTA={ShowCTA}
        >
          <Link href="/">
            <a aria-label="retornar">
              <span>
                Conquer<strong>Page</strong>
              </span>
            </a>
          </Link>

          <NavList>
            {config.content.map((i) => (
              <NavItemAni
                variants={liVariants}
                transition={{ duration: 0.4 }}
                key={i.url}
                showCTA={ShowCTA}
              >
                <Link href={i.url}>
                  <a>{i.title}</a>
                </Link>
              </NavItemAni>
            ))}
          </NavList>
        </ContentList>
      </Wrapper>
    </MyFooter>
  );
}
