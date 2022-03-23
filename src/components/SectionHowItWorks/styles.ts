import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1rem;
`;

export const ContentAni = styled(motion.div)``;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    justify-content: space-between;
    margin-top: 50px;
    flex-direction: row;
    margin: 0 auto;
    max-width: 1180px;
  }
  @media (min-width: 1400px) {
    margin: 0 auto;
    max-width: 1180px;
    flex-direction: row;
  }
`;

export const ContentParagraph = styled.div`
  margin-top: 20px;

  @media (min-width: 992px) {
    width: 50%;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

export const TitleParagraph = styled.span`
  font-size: var(--font-lg);
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const Paragraph = styled.p`
  margin: 20px 0px;
  color: ${({ theme }) => theme.text};
  font-size: var(--font-sm);
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 100%;
  height: 240px;

  @media (min-width: 992px) {
    width: 50%;
    height: 260px;
  }
  @media (min-width: 1400px) {
    width: 50%;
    height: 460px;
  }

  margin: 0 auto;
`;
