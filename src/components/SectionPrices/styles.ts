import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  padding: 6.875rem 1rem 1rem 1rem;

  background: ${({ theme }) =>
    `linear-gradient(101.45deg, ${theme.pagePlansBackgroundLinear} 0%, ${theme.pagePlansSecondBackgroundLinear} 177.62%);`};

  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0% 100%;
`;

export const SectionHeaderAni = styled(motion.div)`
  width: 100%;
  > h1 {
    width: 100%;
    text-align: center;
    font-size: var(--font-xxl);
  }

  > span {
    width: 100%;

    display: inline-block;
    text-align: center;

    margin-top: 0.9375rem;

    font-size: var(--font-sm);
  }
`;
