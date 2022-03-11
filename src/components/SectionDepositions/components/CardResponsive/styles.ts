import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { allColors } from '../../../../styles/themes';

interface IPointProps {
  currentCard: string;
}

export const ContentResponsive = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
`;

export const CardAni = styled(motion.div)`
  flex: 0 1 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 390px;
  padding: 0.75rem 1.5rem;

  box-shadow: 0px 0px 15px -6px ${allColors.color7};
  border-radius: 14px;
  background-color: ${({ theme }) => `${theme.backgroundCardDepositions}`};
  box-sizing: border-box;

  > div.card__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 95%;
    gap: 5%;

    > div.line__ghost {
      height: 0.3rem;
      width: 85%;
      background-color: ${({ theme }) => theme.borderLine};
    }

    > div.card__user {
      display: flex;
      align-items: center;
      justify-content: start;
      width: 100%;

      .card__name {
        margin-left: 0.938rem;

        > h3 {
          font-size: var(--font-lg);
          color: ${({ theme }) => `${theme.text}`};
        }
        
        > span {
          font-size: var(--font-xs);
          color: ${({ theme }) => `${theme.text}`};
        }
      }
    }

    > div.card__deposition {
      height: 100%;
      display: flex;
      justify-content: center;

      > p {
        font-size: var(--font-sm);
        color: ${({ theme }) => `${theme.text}`};
        margin: 0;
      }
    }
  }


  &:last-child {
    margin-bottom: 4rem;
  }

  @media (min-width: 576px) {
    height: 300px;
  }
`;

export const ArrowCard = styled.button`
  width: 22px;
  height: 22px;
  z-index: 2;

  border: none;
  box-shadow: 0px 3.65309px 3.65309px rgba(0, 0, 0, 0.25);

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  background-color: ${({ theme }) => theme.backgroundArrowButton};

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.body};
  }

  &.left {
    left: -10px;
  }

  &.right {
    right: -10px;
  }
`;

export const SliderPoints = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5%;
  gap: 2px;
`;

export const Point = styled.div<IPointProps>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1px solid ${allColors.color6};

  ${(props) =>
    props.currentCard &&
    css`
      background-color: ${allColors.color6};
    `}
`;