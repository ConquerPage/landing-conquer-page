import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundWhyConquerPage};

  overflow-x: hidden;
  padding: 2.5rem 1rem;

  @media (min-width: 768px) {
    padding: 6.25rem 1rem;
  }
`;

export const ContentAni = styled(motion.div)`
  margin: 0 auto;
  max-width: 1180px;

  margin-top: 2.5rem;

  @media (min-width: 768px) {
    margin-top: 3.75rem;
  }
`;

export const ItemContentAni = styled(motion.div)`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.text};

  margin-bottom: 2.5rem;

  > div {
    text-align: center;
    > h3 {
      width: 100%;

      display: inline-block;
      margin-bottom: 1.5625rem;
      font-weight: 700;
      font-size: var(--font-lg);
    }

    > p {
      width: 100%;

      font-size: var(--font-sm);
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    margin-bottom: 7.25rem;

    > div {
      width: 50%;

      text-align: left;
    }
    &:nth-child(even) {
      flex-direction: row-reverse;

      > div {
        text-align: right;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 240px;
  height: 240px;

  @media (min-width: 576px) {
    width: 260px;
    height: 260px;
  }

  margin: 0 auto;
`;
