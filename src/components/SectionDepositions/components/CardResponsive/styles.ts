import styled from 'styled-components';
import { motion } from 'framer-motion';
import { allColors } from '../../../../styles/themes';

export const ContentResponsive = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CardAni = styled(motion.div)`
  flex: 0 1 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 380px;

  box-shadow: 0px 3.57047px 3.57047px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: ${({ theme }) => `${theme.cardsBackground}`};

  div.card__iconDepositions {
    position: absolute;
    top: 10px;
    left: 8px;
  }

  > div.card__testimonioal {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.625rem;
    /* padding: 3rem 0.75rem 0.75rem 0.75rem; */
    > p {
      text-align: center;
      font-size: 1rem;
      color: ${allColors.color8};
    }
  }

  &:last-child {
    margin-bottom: 4rem;
  }

  @media (min-width: 576px) {
    flex: 0 1 310px;
  }
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 5px;

  background: ${allColors.color5};
  width: 100%;
  height: 30%;

  div.card__name {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 8px;

    h4 {
      color: ${allColors.color0};
      font-size: var(--font-md);
    }

    span {
      font-size: var(--font-xxs);
      color: ${allColors.color0};
    }
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

  background-color: ${({ theme }) => theme.backgroundButton};

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

  gap: 2px;
`;