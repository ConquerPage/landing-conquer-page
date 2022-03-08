import styled from 'styled-components';

export const SectionContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundWhyConquerPage};

  padding: 4rem 1rem;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1180px;

  > div {
    display: flex;
    flex-direction: column;

    color: ${({ theme }) => theme.text};

    margin-bottom: 2.5rem;

    > h3 {
      width: 100%;
      text-align: center;

      display: inline-block;
      margin-bottom: 1.5625rem;
      font-size: var(--font-lg);
    }

    > p {
      width: 100%;
      text-align: center;
      font-size: var(--font-sm);
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 240px;
  height: 240px;

  margin: 0 auto;
`;
