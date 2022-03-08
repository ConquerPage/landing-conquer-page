import { useMediaQuery } from '../../hooks/useMediaQuery';
import { CardDesktop } from './components/CardDesktop';
import { CardResponsive } from './components/CardResponsive';

//Styles
import { SectionContainer, ContentAni } from './styles';

export function SectionDepositions() {
  const isDesktop = useMediaQuery('(min-width: 992px)');

  const contentVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.9,
        staggerChildren: 0.4,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <SectionContainer id="depoimentos">
      <ContentAni
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={contentVariants}
      >
        <div className="section__headline">
          <h2>
            Veja o que estão falando!
          </h2>
          {/* <h2>
            “Fiz em 30 minutos uma página que eu pagava caro pra outros fazerem
            por mim...”
          </h2> */}
          {/* {isDesktop && (
            <> */}
              <p>
                <strong>
                  “Fiz em 30 minutos uma página que eu pagava caro pra outros fazerem
                  por mim...”
                </strong>
              </p>
              <p>
                Faça como eles e{' '}
                <strong>
                  transforme de vez os resultados das suas campanhas
                </strong>
                , chega de pagar absurdos para ter uma página online, com a{' '}
                <strong>ConquerPage</strong> você pode ter isso em mãos com alguns
                cliques de forma <strong>rápida, prática e divertida</strong>.
              </p>
            {/* </>
          )} */}
        </div>

        {isDesktop ? <CardDesktop /> : <CardResponsive />}
      </ContentAni>
    </SectionContainer>
  );
}
