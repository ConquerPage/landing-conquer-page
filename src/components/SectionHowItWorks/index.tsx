import React from 'react';

import Image from 'next/image';
import imageSectionHowItWorks from '../../../public/images/imageSectionHowItWorks.svg';
import { Title } from '../Title';

import {
  Section,
  ContentTitle,
  Content,
  ContentParagraph,
  TitleParagraph,
  Paragraph,
  ImageContainer
} from './styles';

export function SectionHowItWorks() {
  return (
    <Section>
      <ContentTitle>
        <Title value="Sua página vendedora online em poucos minutos" />
      </ContentTitle>
      <Content>
        <ContentParagraph>
          <TitleParagraph>Criar páginas irresistíveis que vendam para você, de forma fácil, prática e divertida.</TitleParagraph>
          <Paragraph>
            Construa a página como se fosse um prato, parte por parte, oferecemos várias opções de <strong>design e estratégia</strong> para cada etapa que a página irá precisar para <strong>vender mais.</strong> Contamos com uma equipe especializada em <strong>alta conversão e municiada com estratégias para te ajudar no que for necessário.</strong> Temos diversos modelos <strong>testados diretamente no campo de batalha</strong>, você só precisa escolher um modelo, mudar os textos, as cores e alterar as imagens para a página ficar com a identidade do seu negócio.
          </Paragraph>
        </ContentParagraph>
        <ImageContainer style={{ display: 'block', position: 'relative' }}>
          <Image
            src={imageSectionHowItWorks}
            objectFit="contain"
            layout="fill"
            alt=""
          />
        </ImageContainer>
      </Content>
    </Section >
  );
}

export default SectionHowItWorks;