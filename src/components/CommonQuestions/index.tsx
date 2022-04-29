import { useMemo, useState } from 'react';
import { Accordion } from '../Accordion';
import { Title } from '../Title';
import { SectionContainer, ContainerQuestions } from './styles';

export function CommonQuestions() {
  const [expanded, setExpanded] = useState<false | number>(0);

  const accordions = useMemo(() => {
    return [
      {
        id: 1,
        title: 'O que é a Conquer Page ?',
        description:
          'Com um computador e uma conexão com internet, você consegue criar sua página de forma rápida e fácil, utilizando as diversas opções já prontas que entregamos para vocês, poupando dinheiro e dor de cabeça com a terceirização desse serviço.',
      },
      {
        id: 2,
        title: 'Como funciona a Conquer Page ?',
        description:
          'De acordo com o IBGE, o celular é o principal meio de acesso à internet do país, a pesquisa aponta que 98,1% dos brasileiros utilizam o celular para acessar internet, por isso a importância de ter uma página responsiva que se adeque a todo tipo de dispositivo.',
      },
      {
        id: 3,
        title: 'Como eu adquiro a ferramenta ?',
        description:
          'Você já entrou em uma página lenta ? Que travava quando tinha muito acesso ? Nosso compromisso é com sua satisfação e também com a satisfação de seus visitantes, sua página além de possuir as melhores tecnologias, será entregue totalmente otimizada.',
      },
      {
        id: 4,
        title: 'O que eu preciso instalar ?',
        description:
          'Conjunto ideal de estratégias, design e facilidade para o seu negócio performar nas melhores condições possíveis. Oferecemos também as métricas necessários da sua página, para você medir o resultado de cada funil e campanha.',
      },
      {
        id: 5,
        title:
          'Preciso de conhecimentos com programação para usar a ferramenta ?',
        description:
          'Conjunto ideal de estratégias, design e facilidade para o seu negócio performar nas melhores condições possíveis. Oferecemos também as métricas necessários da sua página, para você medir o resultado de cada funil e campanha.',
      },
      {
        id: 6,
        title: 'Vou conseguir usar o meu domínio próprio ?',
        description:
          'Conjunto ideal de estratégias, design e facilidade para o seu negócio performar nas melhores condições possíveis. Oferecemos também as métricas necessários da sua página, para você medir o resultado de cada funil e campanha.',
      },
      {
        id: 7,
        title: 'Preciso de um servidor de hospedagem ?',
        description:
          'Conjunto ideal de estratégias, design e facilidade para o seu negócio performar nas melhores condições possíveis. Oferecemos também as métricas necessários da sua página, para você medir o resultado de cada funil e campanha.',
      },
    ];
  }, []);

  return (
    <SectionContainer>
      <Title value="Dúvidas frequentes" />
      <ContainerQuestions>
        {accordions.map((i) => (
          <Accordion
            key={i.id}
            accordionActive={i.id}
            title={i.title}
            description={i.description}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </ContainerQuestions>
    </SectionContainer>
  );
}
