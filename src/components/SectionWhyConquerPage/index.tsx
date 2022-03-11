import Image from 'next/image';
import { useMemo } from 'react';
import { Title } from '../Title';
import {
  SectionContainer,
  ContentAni,
  ItemContentAni,
  ImageContainer,
} from './styles';

export function SectionWhyConquerPage() {
  const content = useMemo(() => {
    return [
      {
        id: 1,
        title: 'Facilidade',
        description:
          'Com um computador e uma conexão com internet, você consegue criar sua página de forma rápida e fácil, utilizando as diversas opções já prontas que entregamos para vocês, poupando dinheiro e dor de cabeça com a terceirização desse serviço.',
        imageUrl: '/images/imageFacility.svg',
      },
      {
        id: 2,
        title: 'Responsividade',
        description:
          'De acordo com o IBGE, o celular é o principal meio de acesso à internet do país, a pesquisa aponta que 98,1% dos brasileiros utilizam o celular para acessar internet, por isso a importância de ter uma página responsiva que se adeque a todo tipo de dispositivo.',
        imageUrl: '/images/imageResponsive.svg',
      },
      {
        id: 3,
        title: 'Otimização',
        description:
          'Você já entrou em uma página lenta ? Que travava quando tinha muito acesso ? Nosso compromisso é com sua satisfação e também com a satisfação de seus visitantes, sua página além de possuir as melhores tecnologias, será entregue totalmente otimizada.',
        imageUrl: '/images/imageOptimize.svg',
      },
      {
        id: 4,
        title: 'Resultado',
        description:
          'Conjunto ideal de estratégias, design e facilidade para o seu negócio performar nas melhores condições possíveis. Oferecemos também as métricas necessários da sua página, para você medir o resultado de cada funil e campanha.',
        imageUrl: '/images/imageResult.svg',
      },
    ];
  }, []);

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
    <SectionContainer>
      <Title value="Porque a ConquerPage ?" />
      <ContentAni
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={contentVariants}
      >
        {content.map((item, index) => (
          <ItemContentAni
            key={item.id}
            variants={{
              visible: {
                x: 0,
                transition: {
                  type: 'spring',
                  duration: 1,
                  bounce: 0.2,
                },
              },
              hidden: {
                x: index === 1 ? '200%' : '-200%',
              },
            }}
          >
            <ImageContainer style={{ display: 'block', position: 'relative' }}>
              <Image
                src={item.imageUrl}
                alt="Nós te ajudamos a melhorar os seus resultados de forma rápida e prática"
                objectFit="contain"
                layout="fill"
                priority
              />
            </ImageContainer>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </ItemContentAni>
        ))}
      </ContentAni>
    </SectionContainer>
  );
}
