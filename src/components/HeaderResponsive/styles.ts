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
  width: 100%;
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

export const NavListAni = styled(motion.ul)`
  min-width: 304px;
  width: 90%;

  position: fixed;
  left: 50%;
  top: 5rem;

  list-style: none;
  padding: 20px;

  background-color: ${allColors.color4};
  box-shadow: 0px 4px 4px 3000px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  text-align: center;
`;

export const NavItemAni = styled(motion.li)`
  > a {
    position: relative;

    text-decoration: none;
    color: ${allColors.color0};
    font-size: var(--font-sm);

    font-weight: 700;
  }

  & + li {
    margin: 1.625rem;
  }
`;
export const SwitchContainerAni = styled(motion.div)`
  position: absolute;
  top: 15px;
  right: 15px;
`;
