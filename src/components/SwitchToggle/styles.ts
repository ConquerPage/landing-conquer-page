import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface ISwitchContainerProps {
  isDark: boolean;
}

export const SwitchContainer = styled.div<ISwitchContainerProps>`
  position: relative;
  width: 57px;
  height: 25px;
  background-color: ${({ theme }) => theme.switchToggle};
  display: flex;
  justify-content: ${(props) => (props?.isDark ? 'flex-start' : 'flex-end')};

  border-radius: 50px;
  padding: 0 2px;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.isDark &&
    css`
      &::before {
        font-weight: 700;
        font-size: 0.625rem;
        color: ${({ theme }) => theme.body};

        position: absolute;
        content: 'Dark';
        top: 50%;
        right: 7px;
        transform: translateY(-50%);
      }
    `}

  ${(props) =>
    !props.isDark &&
    css`
      &::after {
        font-weight: 700;
        font-size: 0.625rem;
        color: ${({ theme }) => theme.body};

        position: absolute;
        content: 'Light';
        top: 50%;
        left: 7px;
        transform: translateY(-50%);
      }
    `}
`;

export const SwitchHandleAni = styled(motion.div)`
  z-index: 3;
  width: 21px;
  height: 21px;
  background-color: ${({ theme }) => theme.body};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.switchToggle};
    font-size: 0.875rem;
  }
`;
