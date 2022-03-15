import styled, { keyframes } from 'styled-components';
import { allColors } from '../../styles/themes';

export const bounce = keyframes`0%{transform: translate(-50%,0);} 
40% {transform: translate(-50%,-15px);}   
60% {transform: translate(-50%,-15px);}`;

export const SectionContainer = styled.section`
  position: relative;
  background: ${({ theme }) =>
    `linear-gradient(101.45deg, ${theme.backgroundLinear} 0%, ${theme.secondBackgroundLinear} 177.62%);`};
  padding: 7rem 1rem 9.5rem 1rem;
  
  @media (min-width: 768px) {
    padding: 9.5rem 1rem;
  }
`;

export const ContentAni = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (min-width: 992px) {
    flex-direction: row;
    padding-top: 0.875rem;
    gap: 1.875rem;
  }
`;

export const ContentLeftAni = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 0.8rem;

  @media (min-width: 992px) {
    align-items: start;
  }

  h1 {
    color: ${allColors.color0};
    font-weight: 700;
    font-size: var(--font-xxl);
  }

  p {
    color: ${allColors.color0};
    margin-top: 0.8rem;
    font-size: var(--font-sm);

    > strong {
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: left;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 18.75rem;
    position: absolute;
    bottom: -70px;

    padding: 0.5rem 1.8125rem;

    background: ${allColors.color3};
    font-weight: 700;

    @media (min-width: 992px) {
      bottom: 0;
    }
    
    #first-text-button {
      color: ${allColors.color9};
      font-size: var(--font-md);
    }
    #second-text-button {
      color: ${allColors.color9};
      font-size: var(--font-xs);
    }
  }

  @media (min-width: 576px) {
    h1 {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    h1 {
      width: 100%;
    }
  }

  @media (min-width: 992px) {
    width: 50%;

    h1 {
      width: 100%;
      text-align: left;
    }
    p {
      text-align: left;
    }
  }
`;

export const ContentRightAni = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    width: 50%;
  }
`;

export const ButtonRedirectSection = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  background: ${({ theme }) => `${theme.backgroundButton}`};
  position: absolute;
  bottom: -27.5px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  animation: ${bounce} 2s infinite;

  svg {
    color: ${allColors.color9};
    font-size: 30px;
  }
`;
