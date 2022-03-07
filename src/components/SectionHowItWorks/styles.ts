import styled from 'styled-components';
import { allColors } from '../../styles/themes';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0rem 0.5rem;
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

export const Title = styled.h1`
  color: ${allColors.color7};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const BorderBottom = styled.div`
  height: 3px;
  width: 70vw;
  margin-top: 20px;
  background: ${({ theme }) => theme.borderBottom};
`;

export const ContentParagraph = styled.div`
  margin-top: 20px;
`;

export const TitleParagraph = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${allColors.color7};
`;

export const Paragraph = styled.div`
  margin-top: 30px;
  color: ${allColors.color7};
`;
