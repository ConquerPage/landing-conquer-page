import { SectionContainerAni, Content, ContentText } from './styles';

import Image from 'next/image';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function SectionSatisfaction() {
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
    <SectionContainerAni
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={contentVariants}
    >
      <Content>
        <div
          className="card__avatar"
          style={{
            width: isDesktop ? '250px' : '150px',
            height: isDesktop ? '250px' : '150px',
            margin: 'auto',
          }}
        >
          <Image
            src="/images/clientSatisfaction.svg"
            layout="intrinsic"
            width={isDesktop ? 250 : 150}
            height={isDesktop ? 250 : 150}
            alt=""
          />
        </div>
        <ContentText>
          <p className="contentText_strong">
            Vamos fazer um combinado ? Experimente agora o nosso produto, sem
            medo! Você terá 15 dias para para aproveitar e conhecer as
            funcionalidades disponíveis do seu plano. Se por qualquer motivo
            você não gostar ou achar que o investimento não valeu a pena, entre
            em contato conosco e receba de volta o seu dinheiro.
          </p>
          <p>
            A sua satisfação sempre será nossa prioridade, utilize o produto,
            caso não seja do seu gosto,
            <strong> devolvemos 100% do seu dinheiro,</strong> simples assim!
          </p>
        </ContentText>
      </Content>
    </SectionContainerAni>
  );
}
