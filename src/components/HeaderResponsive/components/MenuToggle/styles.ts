import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonMenuAni = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;

  @media (min-width: 768px) {
    display: none;
  }

  > svg {
    > path {
      stroke: ${({ theme }) => theme.text};
    }
  }
`;
