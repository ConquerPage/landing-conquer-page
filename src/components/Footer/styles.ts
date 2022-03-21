import styled from 'styled-components';
import { motion } from 'framer-motion';
import { allColors } from '../../styles/themes';

export const MyFooter = styled.footer`
  background: ${({ theme, showCTA }) =>
    showCTA
      ? `linear-gradient(101.45deg, ${theme.backgroundLinear} 0%, ${theme.secondBackgroundLinear} 177.62%);`
      : 'transparent'};

  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 1rem 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  max-width: 1180px;
  margin: 0 auto;
  gap: 3.2rem;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;
  margin-top: 2rem;

  > p {
    text-align: center;
  }

  > a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 0.5rem 1.8125rem;

    background: ${allColors.color3};
    font-weight: 700;

    #first-text-button {
      color: ${allColors.color9};
      font-size: var(--font-lg);
    }
    #second-text-button {
      color: ${allColors.color9};
      font-size: var(--font-sm);
    }
  }
`;

export const ContentList = styled(motion.nav)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 0;
  }

  > span {
    font-size: 1.5rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${({ theme, showCTA }) => (showCTA ? allColors.color9 : theme.text)};
  }
`;

export const NavList = styled.ul`
  width: 100%;
  list-style: none;
  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 992px) {
    width: 80%;
    padding: 20px;
    justify-content: flex-end;
    flex-direction: row;
  }
`;

export const NavItemAni = styled(motion.li)`
  width: 100%;

  @media (min-width: 992px) {
    width: 15%;
  }

  > a {
    position: relative;

    text-decoration: none;
    color: ${({ theme, showCTA }) => (showCTA ? allColors.color9 : theme.text)};
    font-size: var(--font-sm);

    font-weight: 700;
  }
`;
