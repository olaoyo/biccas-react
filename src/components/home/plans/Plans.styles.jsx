import styled from "styled-components";

export const PlansGrid = styled.section`
  grid-column: center-start / center-end;
  padding-bottom: 10rem;

  display: grid;
  grid-template-rows: repeat(3, min-content) 1fr;
  row-gap: 4rem;
`;

export const PlansHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  color: ${({ theme }) => theme.colors.black.five};
  font-weight: 700;

  display: grid;
  grid-template-rows: repeat(2, max-content);
  justify-items: center;
`;

export const PlansParagraph1 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.grey.one};
  font-weight: 700;
  justify-self: center;
`;

export const PlansBilling = styled.div`
  background-color: $color-primary;
  width: 34rem;
  height: 7rem;
  border-radius: 10px;
  justify-self: center;
  box-shadow: 0 0.2rem 0.2rem rgba(22, 28, 40, 0.2);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
`;

export const PlansBillingButton1 = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.black.five};
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.white.one};
  height: 5.6rem;
  width: 16rem;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const PlansBillingButton2 = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.green.one};
  height: 5.6rem;
  width: 16rem;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const PlansTiers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(37.4rem, 1fr));
  column-gap: 6rem;
  margin-top: 5rem;
  justify-items: center;
`;

export const PlansTier1 = styled.article`
  background-color: ${({ theme }) => theme.colors.white.one};
  width: 37.4rem;
  height: 64.4rem;
  border-radius: 20px;
  box-shadow: 0 0.2rem 0.2rem rgba(22, 28, 40, 0.2);

  display: grid;
  grid-template-rows: max-content repeat(2, min-content) 1fr;
  justify-items: center;
  align-items: center;
`;

export const PlansTier1Header3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.headers.h4};
  color: ${({ theme }) => theme.colors.black.five};
  margin-top: 4rem;
`;

export const PlansTier1Paragraph1 = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.grey.one};
  display: grid;
  grid-template-rows: repeat(2, min-content);
  justify-items: center;
`;

export const PlansTier1Headers2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  color: ${({ theme }) => theme.colors.black.five};
`;

export const PlansTier1HeaderSup = styled.sup`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.grey.one};
`;

export const PlansTier2 = styled.article`
  background-color: ${({ theme }) => theme.colors.green.one};
  width: 37.4rem;
  height: 68.4rem;
  border-radius: 20px;
  transform: translateY(-15px);
  box-shadow: 0 0.2rem 0.2rem rgba(22, 28, 40, 0.2);
  position: relative;
  overflow: hidden;

  display: grid;
  grid-template-rows: max-content repeat(3, min-content) 1fr;
  justify-items: center;
  align-items: center;
`;

export const PlansTier2Header3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.headers.h4};
  color: ${({ theme }) => theme.colors.white.one};
  margin-top: 4rem;
  z-index: 2;
`;

export const PlansTier2Paragraph1 = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.white.one};
  display: grid;
  grid-template-rows: repeat(2, min-content);
  justify-items: center;
  z-index: 2;
`;

export const PlansTier2Circle = styled.div`
  background-color: ${({ theme }) => theme.colors.green.three};
  border-radius: 50%;
  width: 60rem;
  height: 60rem;
  position: absolute;
  bottom: -10%;
  z-index: 1;
`;

export const PlansTier2Headers2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  color: ${({ theme }) => theme.colors.white.one};
  z-index: 2;
`;

export const PlansTier2HeaderSup = styled.sup`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.white.one};
`;

export const PlansTier2BtnSave = styled.button`
  background-color: ${({ theme }) => theme.colors.green.two};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 600;
  height: 4rem;
  width: 13rem;
  border-radius: 10px;
  border: none;
  z-index: 2;
`;

export const PlansTier1Features = styled.div`
  display: grid;
  grid-template-rows: 1fr min-content;
  z-index: 2;
`;

export const PlansTier1FeatureItems = styled.div`
  background-color: ${({ theme }) => theme.colors.white.four};
  height: 38rem;
  width: 33.4rem;
  border-radius: 10px;
  padding: 2rem 0 2rem 0;

  display: grid;
  grid-template-rows: 1fr min-content;
  justify-items: center;
`;

export const PlansTier1FeatureContent = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  row-gap: 2rem;
`;

export const PlansTier1FeatureContentBlock = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 1.5rem;
`;

export const PlansTier1FeatureContentBlockIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.green.one};
  border-radius: 50px;
  width: 3.2rem;
  height: 3.2rem;
  justify-self: start;
  align-self: center;
`;

export const PlansTier1FeatureContentBlockIconWrap = styled.div`
  font-size: 2rem;
  /* width: 2rem; */
  /* height: 2rem; */
  color: ${({ theme }) => theme.colors.white.one};
  justify-self: center;
  align-self: center;
  padding: 0.3rem 0 0 0.55rem;
`;

export const PlansTier1FeatureContentBlockParagraph1 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.black.five};
  font-weight: 500;
  justify-self: start;
  align-self: center;
`;

export const PlansTier1FeatureBtn1 = styled.button`
  background-color: ${({ theme }) => theme.colors.white.one};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.green.one};
  font-weight: 600;
  width: 26rem;
  height: 6.4rem;
  border-radius: 20px;
  border: none;
  margin-top: 2rem;
  box-shadow: 0 0.2rem 0.2rem rgba(22, 28, 40, 0.2);
`;

export const PlansTier1FeatureBtn2 = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  background-color: ${({ theme }) => theme.colors.green.one};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 600;
  width: 26rem;
  height: 6.4rem;
  border-radius: 20px;
  border: none;
  margin-top: 2rem;
  box-shadow: 0 0.2rem 0.2rem rgba(22, 28, 40, 0.2);

  z-index: 2;
`;
