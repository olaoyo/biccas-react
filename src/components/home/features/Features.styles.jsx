import styled from "styled-components";

export const FeaturesGrid = styled.section`
  background-color: ${({ theme }) => theme.colors.white.one};
  grid-column: center-start / center-end;

  margin: 15rem 0;

  display: grid;
  // grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  column-gap: 6rem;

  color: ${({ theme }) => theme.colors.black.five};
`;



export const Feature = styled.div`
  display: grid;
  grid-template-rows: 15rem max-content repeat(2, min-content);
  row-gap: 2rem;
`;


export const FeatureHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
`;

export const FeatureImg = styled.img`
  width: 100%;
  height: 100%;
  justify-self: center;
`;

export const FeatureHeader2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headers.h4};
`;

export const FeatureParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.grey.one};
`;


export const FeatureParagraph2 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.grey.one};
  margin-top: 2rem;
`;


export const FeatureButton = styled.button`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.white.one};
  background-color: ${({ theme }) => theme.colors.green.one};
  border-radius: 70px;
  border: none;
  height: 6.6rem;
  width: 16.2rem;
  align-self: start;
  justify-self: end;
  margin-top: 2rem;

  transition: all 0.2s;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05);
    background-color: $color-secondary-dark;
    cursor: pointer;
  }

  :active,
  :focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  }
`;
