import styled from "styled-components";

export const FooterGrid = styled.footer`
  background-color: ${({ theme }) => theme.colors.blue.one};
  grid-column: left-start / right-end;
  padding: 10rem 0 0 0;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const FooterSubscribe = styled.div`
  grid-column: 2 / 6;

  display: grid;
  grid-template-rows: 1fr max-content 1fr;
  row-gap: 2rem;
`;

export const FooterSubscribeHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  color: ${({ theme }) => theme.colors.green.one};
`;

export const FooterSubscribeParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.grey.one};
`;

export const FooterSubscribeForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

export const FooterSubscribeEmail = styled.div``;

export const FooterSubscribeEmailInput = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  background-color: ${({ theme }) => theme.colors.blue.one};

  height: 6rem;
  width: 41rem;
  border-radius: 70px;
  border: 2px solid ${({ theme }) => theme.colors.grey.one};
  color: ${({ theme }) => theme.colors.grey.one};
  padding-left: 2rem;

  :focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.blue.one};
    box-shadow: 0 1rem 2rem rgba(35, 41, 55, 0.1);
    border: 2px solid ${({ theme }) => theme.colors.green.one};
  }

  :focus:invalid {
    border: 2px solid ${({ theme }) => theme.colors.gold.two};
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey.one};
  }
`;

export const FooterSubscribeEmailButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  background-color: ${({ theme }) => theme.colors.green.one};
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;
  border: none;
  margin-left: -5rem;
`;

export const FooterSubscribeEmailButtonIcon = styled.div`
  font-size: 2.4rem;
  /* width: 2.4rem; */
  /* height: 2.4rem; */
  color: ${({ theme }) => theme.colors.white.one};
  padding-top: 0.5rem;

  :hover {
    cursor: pointer;
  }
`;

export const FooterInfo = styled.div`
  grid-column: 8 / 12;

  display: grid;
  grid-template-columns: repeat(2, max-content) 1fr;
  column-gap: 4rem;
  margin-top: 2rem;
`;

export const FooterInfoDetails = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
  row-gap: 1rem;
`;

export const FooterInfoDetailsParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 500;
`;

export const FooterInfoDetailsList = styled.ul`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.grey.one};
  font-weight: 500;
  list-style: none;
  line-height: 4rem;
  align-self: end;
`;
