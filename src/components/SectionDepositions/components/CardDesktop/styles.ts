import styled from 'styled-components';
import { motion } from 'framer-motion';
import { allColors } from '../../../../styles/themes';

export const ContentAni = styled(motion.div)`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem 1.5625rem;

  margin: 2.5rem auto auto auto;
`;

export const CardAni = styled(motion.div)`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.625rem;

  background-color: ${({ theme }) => `${theme.backgroundCardDepositions}`};
  border-radius: 12px;
  color: ${allColors.color8};
  position: relative;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;

  .card__avatar {
    position: absolute;
    top: -50px;
  }

  .card__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    margin-top: 40px;

    .line__ghost {
      height: 0.15rem;
      width: 50%;
      background-color: ${({ theme }) => theme.borderLine};
    }

    .card__name {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => `${theme.text}`};
    }

    .card__testimonioal {
      color: ${({ theme }) => `${theme.text}`};
    }
  }
`;
