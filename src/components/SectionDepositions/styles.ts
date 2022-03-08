import styled from 'styled-components';
import { motion } from 'framer-motion';
import { allColors } from '../../styles/themes';

export const SectionContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => `${theme.background}`};
  overflow-x: hidden;

  background-image: ${({ theme }) =>
    theme.value === 'light'
      ? "url('/images/imageWaveBottomLight.svg')"
      : " url('/images/imageWaveBottomDark.svg')"};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0% 100%;

  padding: 2.188rem 0;

  @media (min-width: 576px) {
    padding: 0 0 6rem 0;
  }

  @media (min-width: 992px) {
    padding: 0 0 10rem 0;
  }

  @media (min-width: 1400px) {
    padding: 0 0 15rem 0;
  }
`;

export const ContentAni = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;

  max-width: 1180px;
  margin: 0 auto;

  /* padding: 3.125rem 1rem;

  @media (min-width: 992px) {
    padding: 7.125rem 1rem;
  }

  @media (min-width: 1400px) {
    padding: 10rem 1rem;
  } */

  div.section__headline {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
  }

  h2 {
    font-size: var(--font-xl);
    text-align: center;
    color: ${({ theme }) => `${theme.colorText}`};
  }

  p {
    margin-top: 0.9375rem;
    font-size: var(--font-sm);
    text-align: center;
    color: ${({ theme }) => `${theme.colorText}`};
  }
`;
