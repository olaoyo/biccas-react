import styled from "styled-components";

export const HeroTextGrid = styled.div`
  grid-column: center-start / col-end 5;
  background-color: ${({ theme }) => theme.colors.white.one};
  display: grid;
  grid-template-rows: repeat(4, max-content);

  row-gap: 3.5rem;
  grid-template-columns: 35vw;
`;

export const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.headers.h1};
  color: ${({ theme }) => theme.colors.black.five};
  line-height: 1.2;

  ::after {
    content: "";
    display: block;
    height: 1rem;
    width: 60rem;
    display: block;
    background-color: ${({ theme }) => theme.colors.green.one};
    margin: 4rem 0 1rem 0;
    border-radius: 10px;
  }
`;


export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.black.one};
  justify-self: start;
  align-self: start;
  padding-right: 4rem;
`;


export const TrialGrid = styled.div`
  display: grid;
  grid-template-columns: max-content min-content max-content;
  column-gap: 1.5rem;
`;


export const TrialButton = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.green.one};
  color: ${({ theme }) => theme.colors.white.one};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  height: 6.2rem;
  width: 16.5rem;
  border-radius: 40px;
  border: none;
  margin-right: 2rem;

  justify-self: center;
  align-self: center;
  transition: all 0.2s;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem
      rgba(${({ theme }) => theme.colors.black.three}, 0.2);

    cursor: pointer;
  }

  :active,
  :focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem
      rgba(${({ theme }) => theme.colors.black.three}, 0.2);
  }
`;


export const TrialImg = styled.img`
  justify-self: center;
  align-self: center;
  transition: all 0.2s;

  :hover {
    cursor: pointer;
  }
`;


export const TrialParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.black.five};
  justify-self: center;
  align-self: center;
`;

