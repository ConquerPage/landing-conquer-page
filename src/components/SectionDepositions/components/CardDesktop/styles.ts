import styled from 'styled-components';
import { motion } from 'framer-motion';
import { allColors } from '../../../../styles/themes';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

export const CardAni = styled(motion.div)`
  flex: 0 1 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 29.375rem;

  box-shadow: 0px 3.57047px 3.57047px rgba(0, 0, 0, 0.25);
  border-radius: 0.875rem;
  background-color: ${({ theme }) => `${theme.cardsBackground}`};

  div.card__iconDepositions {
    position: absolute;
    top: 10px;
    left: 8px;
  }

  p.card__testimonioal {
    padding: 3rem 0.75rem 0.75rem 0.75rem;
    height: 70%;
    text-align: center;
    font-size: max(1rem, 0.8vw);
    color: ${allColors.color8};
  }
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  border-bottom-left-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
  padding: 5px;

  background: ${allColors.color5};
  width: 100%;
  height: 30%;

  div.card__name {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    align-items: start;

    h3 {
      color: ${allColors.color0};
      font-size: var(--font-md);
    }

    span {
      font-size: var(--font-xxs);
      color: ${allColors.color0};
    }
  }
`;
