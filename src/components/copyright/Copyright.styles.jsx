import styled from "styled-components";

export const CopyrightGrid = styled.div`
  background-color: ${({ theme }) => theme.colors.blue.one};
  grid-column: left-start / right-end;
  padding: 5rem 0 5rem 0;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const CopyrightParagraph1 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  grid-column: 2 / 6;
`;

export const CopyrightParagraph2 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  grid-column: 7 / 12;
  justify-self: end;
`;
