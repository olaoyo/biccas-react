import styled from "styled-components";

export const PartnerGrid = styled.div`
  background-color: ${({ theme }) => theme.colors.white.three};
  grid-column: left-start / right-end;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const PartnerSupport = styled.div`
  grid-column: 2 / 7;

  display: grid;
  grid-template-rows: 1fr max-content 1fr;
`;

export const PartnerSupportHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  color: ${({ theme }) => theme.colors.black.five};
  align-self: center;
`;

export const PartnerSupportText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.one};
  margin-top: -3rem;
`;

export const PartnerSupportRatings = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

export const PartnerSupportRatingsContent = styled.div`
  display: grid;
  row-gap: 2rem;
  grid-template-rows: repeat(3, max-content);
`;

export const PartnerSupportRatingsContentStars = styled.div`
  display: grid;
  column-gap: 0.2rem;
  grid-template-columns: repeat(5, min-content);
`;

export const PartnerSupportRatingsContentStarsIcon = styled.div`
  font-size: 2.6rem;
  /* width: 2.6rem; */
  /* height: 2.6rem; */
  color: ${({ theme }) => theme.colors.gold.two};
`;

export const PartnerSupportRatingsContentText1 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.black.five};
  font-weight: 700;
`;

export const PartnerSupportRatingsContentText2 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.grey.one};
  font-weight: 700;
`;

export const PartnerActivities = styled.div`
  grid-column: 8 / 12;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-items: start;
  align-items: center;
`;

export const PartnerItems = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 2rem;
`;

export const PartnerItemsIcon = styled.div`
  width: 6rem;
  height: 6rem;

  background-color: $color-primary;
  border-radius: 10px;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.05);

  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

export const PartnerItemsIconBlock = styled.div`
  font-size: 3rem;
  /* width: 3rem;
  height: 3rem; */
  color: ${({ theme }) => theme.colors.green.one};
  justify-self: center;
  align-self: center;
`;

export const PartnerItemsText = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 0.5rem;
`;

export const PartnerItemsHeader = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  color: ${({ theme }) => theme.colors.black.five};
`;

export const PartnerItemsParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.grey.one};
`;
