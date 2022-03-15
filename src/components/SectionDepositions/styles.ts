import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => `${theme.body}`};
  overflow-x: hidden;

  padding: 2.5rem 1rem;

  @media (min-width: 768px) {
    padding: 6.25rem 1rem;
  }
`;

export const ContentAni = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;

  max-width: 1180px;
  margin: 0 auto;

  div.section__headline {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
  }

  h2 {
    font-size: var(--font-xl);
    text-align: center;
    color: ${({ theme }) => `${theme.text}`};
  }

  p {
    margin-top: 0.9375rem;
    font-size: var(--font-sm);
    text-align: center;
    color: ${({ theme }) => `${theme.text}`};
  }
`;
