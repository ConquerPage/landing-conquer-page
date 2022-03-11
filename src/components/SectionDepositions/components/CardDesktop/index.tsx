import Image from 'next/image';
import { useMemo } from 'react';

//Styles
import { ContentAni, CardAni } from './styles';

export function CardDesktop() {
  const cardsContent = useMemo(
    () => [
      {
        name: 'Lucas Souza',
        profession: 'Advogado Previdenciarista',
        testimonial:
          'Nunca tive muita ligação com tecnologia, eu pensava que teria uma barreira enorme para criar uma página de captura pro meu negócio, quando vi a ConquerPage foi um alívio, fiz em 30 minutos uma página que eu pagava caro pra terceiros fazerem por mim, Obrigado!',
        avatar: '/images/avatar1.svg',
      },
      {
        name: 'Mônica Aguiar',
        profession: 'Professora de Gastronomia',
        testimonial:
          'Sou nova nesse mundo, então tive que pesquisar bastante plataformas pra criar minha página, procurei um profissional de tecnologia, porém os preços foram muito altos, até que achei vocês, e tudo fluiu bem, sozinha consegui criar minha página e deu tudo certo, fiz meu primeiro lançamento com ótimos resultados.',
        avatar: '/images/avatar2.svg',
      },
      {
        name: 'Luiz Silva',
        profession: 'Corretor de Imóveis',
        testimonial:
          'Sempre tive problema em entender o que é domínio, hospedagem, código de programação, e já trabalho com digital a alguns anos, e agora conheci a ConquerPage, onde eu só preciso pegar designs prontos e customizar com a minha identidade visual, e fazer meus textos. Parabéns pelo trabalho incrível!!',
        avatar: '/images/avatar3.svg',
      },
      {
        name: 'Alberto Rodrigues',
        profession: 'Designer Gráfico',
        testimonial:
          'Comecei a ter muita demanda para criação de landing pages, e era bem dificil conciliar as coisas, porque outras ferramentas me consumiam muito tempo, um amigo me indicou e comecei a utilizar a ConquerPage, hoje consigo entregar a mesma qualidade de páginas, porém com muito mais facilidade em bem menos tempo.',
        avatar: '/images/avatar4.svg',
      },
    ],
    [],
  );

  const contentVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.4,
        delayChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const cardsVariants = {
    visible: () => {
      return {
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 0.9,
          bounce: 0.2,
        },
      };
    },
    hidden: (direction: number) => {
      return {
        x: direction > 0 ? '-100vw' : '100vw',
        opacity: 0,
      };
    },
  };

  return (
    <ContentAni
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={contentVariants}
    >
      {cardsContent.map((item, index) => {
        const direction = index % 2 === 0 ? 1 : -1;

        return (
          <CardAni key={item.name} variants={cardsVariants} custom={direction}>
            <div
              className="card__avatar"
              style={{ width: '90px', height: '90px' }}
            >
              <Image
                src={item.avatar}
                layout="fixed"
                width={90}
                height={90}
                alt={item.name}
              />
            </div>
            <div className="card__wrapper">
              <div className="card__name">
                <h3>{item.name}</h3>
                <span>{item.profession}</span>
              </div>
              <div className="line__ghost" />
              <p className="card__testimonioal">{item.testimonial}</p>
            </div>
          </CardAni>
        );
      })}
    </ContentAni>
  );
}
