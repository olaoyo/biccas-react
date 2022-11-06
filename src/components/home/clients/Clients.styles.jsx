import styled from "styled-components";

export const ClientsGrid = styled.div`
  background-color: ${({ theme }) => theme.colors.white.one};
  grid-column: center-start / center-end;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 5rem;
  margin-bottom: 10rem;
`;

export const ClientsText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.headers.h3};
  color: ${({ theme }) => theme.colors.black.five};
  font-weight: 700;
  justify-self: center;
`;

export const ClientsLogos = styled.div`
  justify-self: center;
  align-self: center;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 2.5rem;
  justify-items: center;
`;
