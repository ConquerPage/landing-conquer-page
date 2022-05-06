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
          'A Conquer Page é uma plataforma que permite o usuário criar suas páginas web e publicá-las de forma rápida e estável, garantindo para os visitantes um sistema totalmente moderno e performático.',
      },
      {
        id: 2,
        title: 'Como funciona a Conquer Page ?',
        description:
          'Nossa plataforma é bem simples de ser utilizada, será disponibilizado diversos temas já prontos e testados, basta escolher o tema que mais gostou, personalizar ele do jeito que quiser, adicionando novas seções, substituindo seções por outras, alterando cores, textos, imagens, etc... Após a personalização, basta selecionar um domínio, seja ele externo ou interno e fazer a publicação da sua página.',
      },
      {
        id: 3,
        title: 'Como eu adquiro a ferramenta ?',
        description:
          'Nossa ferramenta é gratuita, basta fazer seu cadastro e fazer o uso do sistema.',
      },
      {
        id: 4,
        title: 'O que eu preciso instalar ?',
        description:
          'Não é necessário nenhuma instalação, nós prezamos justamente a facilidade e a praticidade pros nossos clientes, é só se cadastrar e começar a botar a mão na massa.',
      },
      {
        id: 5,
        title:
          'Preciso de conhecimentos com programação para usar a ferramenta ?',
        description:
          'Não é preciso nenhum tipo de conhecimento em programação para conseguir criar a página, a ferramente foi feita para qualquer pessoa conseguir usar, disponibilizamos um tutorial para não ficar nenhum dúvida em como fazer a utilização da ferramente!',
      },
      {
        id: 6,
        title: 'Vou conseguir usar o meu domínio próprio ?',
        description:
          'Sim, se você contratar um dos nossos planos você vai poder configurar domínios próprios. A quantidade de domínios varia de acordo com o plano contratado.',
      },
      {
        id: 7,
        title: 'Preciso de um servidor de hospedagem ?',
        description:
          'Não, utilizando nossos serviços sua única preocupação é configurar o conteúdo do seu site, nós cuidamos do restante. Seu site ficará distribuído em servidores do mundo todo o que significa que a latência será minima em qualquer lugar do mundo que seu site seja acessado.',
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
