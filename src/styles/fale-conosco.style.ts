import { motion } from 'framer-motion';
import styled from 'styled-components';
import { allColors } from './themes';

export const HeaderAni = styled(motion.header)`
  max-width: 1180px;
  margin: 0 auto;
  width: 100%;
  height: 4.375rem;

  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};

    > svg {
      font-size: 1.5rem;
    }
  }

  > span {
    font-size: 1.25rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 576px) {
    > svg {
      font-size: 1.75rem;
    }
    > span {
      font-size: 1.5rem;
    }
  }
`;

export const SectionContainer = styled.main`
  position: relative;
  width: 100%;
  height: calc(100vh - 4.375rem);
  background-color: ${({ theme }) => theme.body};

  background-image: ${({ theme }) =>
    theme.value === 'light'
      ? "url('/images/imageBackgroundContactUsLight.svg')"
      : " url('/images/imageBackgroundContactUsDark.svg')"};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right top;

  @media (min-width: 1400px) {
    background-size: cover;
  }
`;

export const ContentAni = styled(motion.div)`
  max-width: 1180px;
  margin: 0 auto;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const ContentLeft = styled.div`
  max-width: 1180px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2.5rem;

  padding: 0 1rem;

  > h1 {
    position: relative;
    display: inline-block;

    margin-top: 1.875rem;
    padding-bottom: 0.625rem;

    font-size: var(--font-xxl);

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 65%;
      height: 0.25rem;

      background-color: ${({ theme }) => theme.borderLine};
    }
  }

  > p {
    text-align: center;
    font-size: var(--font-sm);
  }

  > div {
    width: 100%;
    height: fit-content;

    padding: 0.75rem;

    background: #e6f4ea;
    border-radius: 0.3125rem;

    color: ${allColors.color6};

    text-align: center;

    > span {
      display: inline-block;
      margin-top: 0.5rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 992px) {
    width: 50%;
    justify-content: center;
    align-items: flex-start;

    > h1,
    p {
      text-align: left;
    }

    > h1 {
      &::after {
        left: 0;
        transform: unset;
      }
    }
  }
`;

export const FormContactUs = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1.875rem;

  width: 100%;

  > button {
    border: none;
    border-radius: 0.3125rem;
    width: 80%;
    padding: 0.875rem 1.25rem;

    font-size: var(--font-xs);

    background-color: #c34f16;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    font-weight: 700;
    color: ${allColors.color9};

    > svg {
      font-size: 1rem;
    }
  }

  @media (min-width: 992px) {
    > button {
      width: 50%;
    }
  }
`;

export const ContentRight = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 30%;
    height: 100%;
    /* background: red; */
  }
`;
