import { motion } from 'framer-motion';
import styled from 'styled-components';
import { allColors } from '../../styles/themes';

export const MyHeader = styled.header`
  position: absolute;

  width: 100%;
  height: 5rem;

  //this z-index is used so that the header overlaps the section
  z-index: 1;
`;

export const HeaderContentAni = styled(motion.nav)`
  position: relative;

  max-width: 1180px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 1rem;

  > span {
    font-size: 1.5rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const NavList = styled.ul`
  width: 80%;
  list-style: none;
  padding: 20px;

  text-align: center;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

export const NavItemAni = styled(motion.li)`
  width: 15%;

  > a {
    position: relative;

    text-decoration: none;
    color: ${allColors.color0};
    font-size: var(--font-sm);

    font-weight: 700;
  }
`;

export const SwitchContainerAni = styled(motion.div)``;
