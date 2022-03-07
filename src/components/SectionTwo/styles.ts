import styled from 'styled-components';

export const Section = styled.section``;

import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.value};
  padding: 0.5rem;
  background-repeat: no-repeat;
  background-size: 102% auto;
  background-position: top;
`;

export const ContentAni = styled(motion.div)`
  max-width: 1180px;
  height: 100%;

  margin: 0 auto;

  padding: 3.125rem 1rem;
  overflow-x: hidden;

  @media (min-width: 576px) {
    padding: 5.125rem 1rem;
  }

  @media (min-width: 992px) {
    padding: 7.125rem 1rem;
  }

  @media (min-width: 1400px) {
    padding: 10rem 1rem 4rem 1rem;
  }
`;

export const TitleAni = styled.h2`
  font-weight: 700;
  font-size: var(--font-xl);
  text-align: center;
`;
