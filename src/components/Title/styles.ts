import styled from 'styled-components';

export const TitleContainer = styled.h2`
  position: relative;
  display: block;

  width: fit-content;

  color: ${({ theme }) => theme.text};

  padding-bottom: 0.625rem;
  margin: 0 auto;

  font-size: var(--font-xl);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 65%;
    height: 0.1875rem;

    background-color: ${({ theme }) => theme.borderLine};
  }
`;
