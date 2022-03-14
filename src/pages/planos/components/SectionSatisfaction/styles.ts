import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionContainerAni = styled(motion.section)`
  width: 100%;
  padding: 2.5rem 1rem;

  background-repeat: no-repeat;
  background-size: 102% auto;
  background-position: top;
  margin-bottom: 7rem;
`;

export const Content = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  margin-top: 1.875rem;

  color: ${({ theme }) => theme.text};

  p {
    font-size: var(--font-sm);
    text-align: center;
  }

  .contentText_strong {
    font-weight: 700;
  }

  p:not(.contentText_strong) {
    margin-top: 1.125rem;
  }
`;
