//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons';

//Styles
import {
  CardsContainerAni,
  CardContentAni,
  OriginalPrice,
  DiscountPrice,
  CardSubtitle,
  CardTitle,
  DescriptionList,
  DescriptionItem,
  CardsContentLeft,
  CardsContentRight,
} from './styles';
import Link from 'next/link';

export default function CardPrices() {
  // const contractPlan = ({ selectedPlan, pricePlan }: IButtonProps) => {
  //   gtag.event({
  //     action: 'contract_plan',
  //     category: 'conversion',
  //     label: `plan-${selectedPlan}`,
  //     value: `price-R$${pricePlan}`,
  //   });
  // };

  const cardsContentLeft = [
    {
      id: 1,
      title: 'Inicial',
      originalPrice: 'R$ 25,00',
      discountPrice: 'Por R$ 0,00',
      description: [
        '5 Páginas',
        'Usar 1 domínio',
        '7.000 visitas/mês',
        'Certificado de Segurança (SSL)',
        'Modelos de páginas gratuitos',
      ],
    },
    {
      id: 2,
      title: 'Negócios',
      originalPrice: 'R$ 55,00',
      discountPrice: 'Por R$ 34,00/mês',
      description: [
        '20 Páginas',
        'Usar 5 domínios',
        'Criar seu próprio domínio',
        '35.000 visitas/mês',
        'Certificado de Segurança (SSL)',
        'Acompanhamento de Métricas',
        'Integração com serviços de e-mail',
        'Modelos de páginas premium',
        'Retirar "Feito com ConquerPage"',
      ],
    },
  ];

  const cardsContentRight = [
    {
      id: 3,
      title: 'Empresas',
      originalPrice: 'R$ 125,00',
      discountPrice: 'Por R$ 82,00',
      description: [
        '120 Páginas',
        'Usar 10 domínios',
        'Criar seu próprio domínio',
        '100.000 visitas/mês',
        'Certificado de Segurança (SSL)',
        'Acompanhamento de Métricas',
        'Integração com serviços de e-mail',
        'Modelos de páginas premium',
        'Retirar "Feito com ConquerPage"',
      ],
    },
  ];

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
        duration: 0.4,
        staggerChildren: 0.4,
        delayChildren: 0.4,
      },
    },
  };

  return (
    <CardsContainerAni
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={contentVariants}
    >
      <CardsContentLeft>
        {cardsContentLeft.map((card) => (
          <CardContentAni
            key={card.id}
            variants={{
              visible: {
                opacity: 1,
              },
              hidden: {
                opacity: 0,
              },
            }}
          >
            <h2>{card.title}</h2>
            <FontAwesomeIcon icon={faDollarSign} />

            <OriginalPrice>
              De <span>{card?.originalPrice}</span>
            </OriginalPrice>
            <DiscountPrice>{card?.discountPrice}</DiscountPrice>

            <DescriptionList>
              {card.description.map((desc) => (
                <DescriptionItem key={desc}>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>{desc}</span>
                </DescriptionItem>
              ))}
            </DescriptionList>

            <Link href="/fale-conosco" passHref>
              <a>
                <span>Contratar Plano</span>
              </a>
            </Link>
          </CardContentAni>
        ))}
      </CardsContentLeft>
      <CardsContentRight>
        {cardsContentRight.map((card) => (
          <CardContentAni
            key={card.id}
            variants={{
              visible: {
                opacity: 1,
              },
              hidden: {
                opacity: 0,
              },
            }}
          >
            <h2>{card.title}</h2>
            <FontAwesomeIcon icon={faDollarSign} />

            {card?.originalPrice && card.discountPrice && (
              <>
                <OriginalPrice>
                  De <span>{card?.originalPrice}</span>
                </OriginalPrice>
                <DiscountPrice>{card?.discountPrice}</DiscountPrice>
              </>
            )}

            <DescriptionList>
              {card.description.map((desc) => (
                <DescriptionItem key={desc}>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>{desc}</span>
                </DescriptionItem>
              ))}
            </DescriptionList>

            <Link href="/fale-conosco" passHref>
              <a>
                <span>Contratar Plano</span>
              </a>
            </Link>
          </CardContentAni>
        ))}

        <CardContentAni
          variants={{
            visible: {
              opacity: 1,
            },
            hidden: {
              opacity: 0,
            },
          }}
        >
          <h2>Custom</h2>
          <FontAwesomeIcon icon={faDollarSign} />

          <CardTitle>
            Nenhum plano atendeu o que o seu negócio necessita no momento ?
          </CardTitle>

          <CardSubtitle>
            Entre em contato com nossa equipe para montar seu plano totalmente
            personalizado para o seu negócio, aqui você vai decidir quantos
            domínios usar, quantas páginas disponíveis para criação, quantas
            visitas seu site poderá ter mensalmente, entre outros serviços
            personalizados
          </CardSubtitle>

          <Link href="/fale-conosco" passHref>
            <a>
              <span>Fale Conosco</span>
            </a>
          </Link>
        </CardContentAni>
      </CardsContentRight>
    </CardsContainerAni>
  );
}
