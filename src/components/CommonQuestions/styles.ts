import styled from 'styled-components';

export const SectionContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundWhyConquerPage};

  padding: 2.5rem 1rem;

  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 6.25rem 1rem;
  }
`;

export const ContainerQuestions = styled.div`
  margin: 0 auto;
  max-width: 1180px;

  margin-top: 2.5rem;

  @media (min-width: 768px) {
    margin-top: 3.75rem;
  }
`;