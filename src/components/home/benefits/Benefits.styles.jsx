import styled from "styled-components";

export const BenefitsGrid = styled.div`
  grid-column: left-start / right-end;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;



export const BenefitsText = styled.div`
  grid-column: 2 / 6;
`;



export const BenefitsTextContent = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
  row-gap: 4rem;
  margin: 2rem 0 2rem 2rem;
`;


export const BenefitsTextContentHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  color: ${({ theme }) => theme.colors.black.five};
  font-weight: 700;
`;


export const BenefitsListGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  row-gap: 2rem;
`;


export const BenefitsBlock = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 1.5rem;
`;



export const BenefitsBlockIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.green.one};
  border-radius: 50px;
  width: 3.2rem;
  height: 3.2rem;
  justify-self: start;
  align-self: center;

  display: grid;
  grid-template-columns: 1fr;
`;


export const BenefitsBlockIconWrap = styled.div`
  font-size: 2rem;
  padding-top: 0.3rem;
  /* width: 2rem; */
  /* height: 2rem; */
  color: ${({ theme }) => theme.colors.white.primary};
  justify-self: center;
  align-self: center;
`;


export const BenefitsBlockIconText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.black.five};
  font-weight: 500;
  justify-self: start;
  align-self: center;
`;


export const BenefitsImg = styled.div`
  grid-column: 8 / 12;

  height: 52.9rem;
  width: 56rem;
  border-radius: 20px;

  display: grid;
  grid-template-columns: repeat(8, 4vw);
  grid-template-rows: repeat(8, 4vw);
`;


export const BenefitsImgBg = styled.figure`
  grid-column: 1 / span 8;
  grid-row: 1 / span 8;

  border-radius: 20px;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;


export const BenefitsImgBgLaptop = styled.img`
  position: absolute;
  right: -8%;
  top: -7%;
  width: 90.7rem;
  height: 60.4rem;
`;



export const BenefitsImgExpert = styled.div`
  grid-column: 1 / 5;
  grid-row: 2 / 3;
  margin: -3rem 0 0 -14rem;

  background-color: ${({ theme }) => theme.colors.white.one};
  width: 30.4rem;
  height: 8.2rem;
  border-radius: 10px;
  padding-left: 1rem;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 2rem;
  justify-items: center;
  align-items: center;
  box-shadow: 0 0.2rem 0.2rem rgba(22, 28, 40, 0.2);
`;


export const BenefitsImgExpertAmanda = styled.div``;



export const BenefitsImgExpertText = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 0.5rem;
`;


export const BenefitsImgExpertTextParagraph2 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.black.five};
`;


export const BenefitsImgExpertTextParagraph3 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  color: ${({ theme }) => theme.colors.grey.one};
`;


export const BenefitsExpertChat = styled.div`
  background-color: ${({ theme }) => theme.colors.green.one};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: grid;
  grid-template-rows: 1fr;
`;


export const BenefitsExpertIcon = styled.div`
  font-size: 1.5rem;
  /* height: 1.5rem; */
  /* width: 1.5rem; */
  color: ${({ theme }) => theme.colors.white.one};
  justify-self: center;
  align-self: center;
  padding-top: 0.6rem;
`;


export const BenefitsIncome = styled.div`
  grid-column: 7 / -1;
  grid-row: 3 / 4;
  margin-left: 8rem;

  background-color: ${({ theme }) => theme.colors.white.one};
  height: 7rem;
  width: 13.8rem;
  border-radius: 10px;
  box-shadow: 0 0.2rem 0.2rem rgba(22, 28, 40, 0.2);

  z-index: 2;

  display: grid;
  grid-template-columns: max-content 1fr;
`;


export const BenefitsIncomeText = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  padding-left: 1rem;
`;


export const BenefitsIncomeTextParagraph3 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  color: ${({ theme }) => theme.colors.grey.one};
  align-self: end;
  padding-bottom: 0.5rem;
`;


export const BenefitsIncomeTextParagraph2 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.black.one};
  align-self: end;
  padding-bottom: 0.5rem;
`;


export const BenefitsIncomeChart = styled.div`
  color: ${({ theme }) => theme.colors.green.one};
  font-size: 2rem;
  height: 2rem;
  width: 2rem;
  justify-self: center;
  align-self: center;
  margin-top: 2rem;

  transform: scaleX(-1); //mirror image on X axis
`;


export const BenefitsIncomePic = styled.div`
  grid-column: 1 / 2;
  grid-row: 6 / 7;

  background: ${({ theme }) => theme.colors.green.one};
  margin-left: -5.5rem;
  height: 4rem;
  width: 4rem;
  border-radius: 10px;
  transform: rotate(-15deg);
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr;
`;


export const BenefitsIncomePicIcon = styled.div`
  font-size: 2rem;
  /* height: 2rem; */
  /* width: 2rem; */
  color: ${({ theme }) => theme.colors.white.one};
  justify-self: center;
  align-self: center;
  padding-top: 0.5rem;
`;


export const BenefitsIncomeSuccess = styled.div`
  grid-column: 1 / 5;
  grid-row: 8 / -1;

  background-color: ${({ theme }) => theme.colors.white.one};
  width: 32.2rem;
  height: 6.8rem;
  border-radius: 10px;
  box-shadow: 0 0.2rem 0.2rem rgba(22, 28, 40, 0.2);
  z-index: 2;

  display: grid;
  grid-template-columns: repeat(2, max-content);
  margin: 1.75rem 0 0 -10.5rem;
  column-gap: 2rem;
`;


export const BenefitsIncomeSuccessBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.white.one};
  width: 2.4rem;
  height: 2.4rem;
  border: 2px solid ${({ theme }) => theme.colors.green.one};
  border-radius: 59%;
  justify-self: center;
  align-self: center;
  margin-left: 2rem;

  display: grid;
  grid-template-columns: 1fr;
`;


export const BenefitsIncomeSuccessIcon = styled.div`
  font-size: 1.5rem;
  /* width: 1.5rem; */
  /* height: 1.5rem; */
  color: ${({ theme }) => theme.colors.green.one};
  justify-self: center;
  align-self: center;
`;


export const BenefitsIncomeSuccessText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.black.five};
  align-self: center;
`;

