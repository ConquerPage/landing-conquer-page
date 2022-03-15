import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};

  > input {
    position: relative;
    width: 100%;
    height: 40px;
    background: transparent;
    border: 0;
    text-indent: 0.75rem;
    color: ${({ theme }) => theme.text};
    outline: none;

    &:focus + label,
    &:not(:placeholder-shown) + label {
      background-color: ${({ theme }) => theme.body};
      transform: translate(0.625rem, -130%) scale(0.8);
    }

    &::placeholder {
      color: transparent;
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }

  > label {
    color: ${({ theme }) => theme.text};
    position: absolute;

    z-index: 0;

    top: 50%;
    left: 0;

    padding: 0 0.25rem;

    transform: translate(0.5rem, -50%);
    transform-origin: 0% 0%;

    background: transparent;
    pointer-events: none;
    transition: transform 0.35s, background 0.35s;

    font-size: var(--font-xs);
  }
`;
