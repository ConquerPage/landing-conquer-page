import { useCallback, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

//Icons
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

//Styles
import { ContentResponsive, CardAni, CardBottom, ArrowCard, SliderPoints } from './styles';
import { AnimatePresence } from 'framer-motion';

export function CardResponsive() {
  const [currentPage, setCurrentPage] = useState(0);

  // 1 right
  // -1 left
  const [direction, setDirection] = useState(0);

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
        avatar: '/images/avatar4.svg',
      },
    ],
    [],
  );

  const handlePaginate = useCallback(
    (value) => {
      if (
        currentPage + value > cardsContent.length - 1 ||
        currentPage + value < 0
      ) {
        return;
      }

      setCurrentPage((oldValue) => oldValue + value);
      setDirection(value);
    },
    [currentPage, cardsContent],
  );

  const cardsVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
          duration: 0.9,
        },
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
          duration: 0.1,
        },
      };
    },
  };

  /**
   * Experimenting with distilling swipe offset and velocity into a single variable, so the
   * less distance a user has swiped, the more velocity they need to register as a swipe.
   * Should accomodate longer swipes and short flicks without having binary checks on
   * just distance thresholds and velocity > 0.
   */
  const swipeConfidenceThreshold = 100;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <ContentResponsive>
      <AnimatePresence exitBeforeEnter>
        <CardAni
          key={currentPage}
          custom={direction}
          variants={cardsVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              handlePaginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              handlePaginate(-1);
            }
          }}
        >
          <Image
            src={cardsContent[currentPage].avatar}
            width={120}
            height={120}
            layout="intrinsic"
            alt={cardsContent[currentPage].title}
          />

          <h3>{cardsContent[currentPage].title}</h3>
          <p>{cardsContent[currentPage].description}</p>

          <SliderPoints>
            {cardsContent.map((c, ind) => (
              <Point key={c.title} currentCard={currentPage === ind} />
            ))}
          </SliderPoints>
        </CardAni>
      </AnimatePresence>

      {currentPage !== 0 && (
        <ArrowCard className="left" onClick={() => handlePaginate(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </ArrowCard>
      )}
      {currentPage !== cardsContent.length - 1 && (
        <ArrowCard className="right" onClick={() => handlePaginate(1)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </ArrowCard>
      )}
    </ContentResponsive>
  );
}
