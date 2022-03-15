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
  DescriptionList,
  DescriptionItem,
  CardButton,
  CardsContentLeft,
  CardsContentRight,
} from './styles';

export default function CardPrices() {
  const cardsContentLeft = [
    {
      id: 1,
      title: 'Inicial',
      originalPrice: 'R$ 25,00',
      discountPrice: 'Por R$ 0,00',
      description: [
        '5 Páginas',
        '1 Domínio',
        '5.000 visitas/mês',
        'Certificado de Segurança (SSL)',
      ],
    },
    {
      id: 2,
      title: 'Negócios',
      originalPrice: 'R$ 60,00',
      discountPrice: 'Por R$ 35,00/mês',
      description: [
        '20 Páginas',
        '1 Domínio Próprio',
        '30.000 visitas/mês',
        'Certificado de Segurança (SSL)',
        'Acompanhamento de Métricas',
        'Integração com serviços de Emails',
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
        '100 Páginas',
        '3 Domínio Próprio',
        '100.000 visitas/mês',
        'Certificado de Segurança (SSL)',
        'Acompanhamento de Métricas',
        'Integração com serviços de Emails',
        'Retirar "Feito com ConquerPage"',
      ],
    },
    {
      id: 4,
      title: 'Customizado',
      subtitle: 'Precisa de algo mais customizado ? entre em contato conosco.',
      description: [
        '?? Páginas',
        '?? Domínio',
        '?? visitas/mês',
        'Certificado de Segurança (SSL)',
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

            <CardButton>
              <span>Contratar Plano</span>
            </CardButton>
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

            {card?.subtitle && <CardSubtitle>{card?.subtitle}</CardSubtitle>}

            <DescriptionList>
              {card.description.map((desc) => (
                <DescriptionItem key={desc}>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>{desc}</span>
                </DescriptionItem>
              ))}
            </DescriptionList>

            <CardButton>
              <span>Contratar Plano</span>
            </CardButton>
          </CardContentAni>
        ))}
      </CardsContentRight>
    </CardsContainerAni>
  );
}
