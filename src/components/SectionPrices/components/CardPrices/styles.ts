import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { allColors } from '../../../../styles/themes';

export const CardsContainerAni = styled(motion.div)`
  width: 100%;
  max-width: 340px;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  margin: 3rem auto 4rem auto;

  @media (min-width: 576px) {
    flex-direction: row;
    max-width: 680px;
    margin: 3rem auto 6rem auto;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    max-width: 1360px;
    gap: 0.3125rem;
    margin: 3rem auto 13rem auto;
  }
`;

export const CardsContentLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.25rem;

  @media (min-width: 576px) {
    width: 50%;
    justify-content: flex-start;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 0.3125rem;
  }
`;

export const CardsContentRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  @media (min-width: 576px) {
    width: 50%;
    justify-content: flex-start;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 0.3125rem;
  }
`;

export const CardContentAni = styled(motion.div)`
  position: relative;
  width: 100%;
  padding-left: 30px; /* gutter size */
  background-clip: padding-box;

  background: ${({ theme }) => theme.cardColor};
  box-shadow: 0px 3.4416px 3.4416px rgba(0, 0, 0, 0.25);
  border-radius: 17px;

  padding: 1rem;

  @media (min-width: 1200px) {
    height: 34.25rem;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: ${({ theme }) => theme.cardButtonColor};
    border: none;
    text-decoration: none;
    width: 65%;
    height: 2.5rem;
    border-radius: 5px;

    margin: 2.625rem auto;

    @media (min-width: 1200px) {
      position: absolute;

      left: 50%;
      transform: translateX(-50%);
      bottom: 40px;

      margin: 2.625rem 0 0 0;
    }

    > span {
      color: ${({ theme }) => theme.cardButtonTextColor};
      font-size: var(--font-xs);
      font-weight: 700;
    }
  }

  > h2 {
    color: ${({ theme }) => theme.cardTextColor};
    font-size: var(--font-xl);
    text-shadow: 0px 3.4416px 3.4416px rgba(0, 0, 0, 0.25);
  }

  > svg {
    position: absolute;
    top: 10px;
    right: 14px;
    font-size: clamp(2.625rem, 3rem, 3.25rem);

    color: ${allColors.color5};

    ${({ theme }) =>
      theme.value === 'light' &&
      css`
        opacity: 0.7;
      `}
  }
`;

export const OriginalPrice = styled.h3`
  margin-top: 1.75rem;
  color: ${allColors.color3};

  font-size: var(--font-lg);
  > span {
    text-decoration: line-through;
  }
`;

export const DiscountPrice = styled.h3`
  color: ${({ theme }) => theme.cardTextColor};

  text-shadow: 0px 3.4416px 3.4416px rgba(0, 0, 0, 0.25);
  font-size: var(--font-xl);
`;

export const CardTitle = styled.h4`
  display: inline-block;
  color: ${({ theme }) => theme.cardTextColor};
  font-size: var(--font-sm);

  margin-top: 1.75rem;
  margin-bottom: 1.25rem;

  text-align: center;
`;

export const CardSubtitle = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.cardTextColor};
  font-size: var(--font-sm);

  text-align: center;
`;

export const DescriptionList = styled.ul`
  margin-top: 1.25rem;
  list-style: none;
`;

export const DescriptionItem = styled.li`
  font-size: var(--font-xs);
  font-weight: 700;
  color: ${({ theme }) => theme.cardTextColor};

  &:not(:last-child) {
    margin-bottom: 0.9375rem;
  }
  > span {
    margin-left: 0.3125rem;
  }
`;

export const CardButton = styled.a`
  background-color: ${({ theme }) => theme.cardButtonColor};
  border: none;
  width: 65%;
  height: 2.5rem;
  border-radius: 5px;
  display: block;
  margin: 2.625rem auto;

  > span {
    color: ${({ theme }) => theme.cardButtonTextColor};
    font-size: var(--font-xs);
    font-weight: 700;
  }
`;
