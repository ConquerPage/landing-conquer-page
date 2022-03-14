import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 1rem 2rem 1rem;

  max-width: 1180px;
  margin: 0 auto;

  #title {
    font-size: 17.4554px;
    line-height: 26px;
    color: ${({ theme }) => theme.text};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
  }

  @media (min-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    #title {
      font-size: 21px;
      margin-bottom: 0px;
    }
  }
  @media (min-width: 992px) {
    #title {
      font-size: 21px;
      margin-bottom: 0px;
    }
  }
`;

export const FooterContent = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0px 10px;

  a {
    font-size: max(1rem, 0.8vw);
    text-decoration: none;
    color: ${({ theme }) => theme.text};

    :hover {
      font-weight: bold;
    }
  }

  @media (min-width: 576px) {
    a {
      & + a {
        margin-left: 10px;
      }
    }
  }

  @media (min-width: 1200px) {
    justify-content: flex-end;

    a {
      & + a {
        margin-left: 40px;
      }
    }
  }
`;
