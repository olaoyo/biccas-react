import styled from "styled-components";

export const Testimonials = styled.section`
  background-color: ${({ theme }) => theme.colors.blue.one};
  grid-column: left-start / right-end;
  padding: 10rem 0 10rem 0;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const TestimonialsUsers = styled.div`
  grid-column: 2 / 6;

  display: grid;
  grid-template-rows: repeat();
  row-gap: 2rem;
`;

export const TestimonialsHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  color: $color-text-light;
  font-weight: 600;
`;

export const TestimonialsParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.grey.one};
  font-weight: 500;
`;

export const TestimonialsQuote = styled.div`
  font-size: 20rem;
  margin: 5rem 0 -5rem -38rem;

  width: 47.3rem;
  height: 11.8rem;
  
  color: ${({ theme }) => theme.colors.white.one};

  /* &::after {
          content: "\2033";
          position: absolute;
          top: -9rem;
          // left: -1rem;
          line-height: 1;
          font-size: 20rem;
          color: ${({ theme }) => theme.colors.white.one};
          transform: rotate(180deg);
  } */
`;

export const TestimonialsImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  column-gap: 2rem;
  justify-items: center;
`;

export const TestimonialsPic = styled.img`
  width: 6.6rem;
  height: 6.6rem;
`;

export const TestimonialsPlay = styled.div`
  font-size: 6.6rem;
  color: ${({ theme }) => theme.colors.white.one};
  margin-top: -1rem;
  /* width: 6.6rem; */
  /* height: 6.6rem; */
`;

export const TestimonialsCta = styled.article`
  grid-column: 7 / 11;
  background-color: ${({ theme }) => theme.colors.blue.two};
  height: 58.8rem;
  width: 61.2rem;
  border-radius: 20px;

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  padding-top: 5rem;
`;

export const TestimonialsCtaMoney = styled.img``;

export const TestimonialsCtaHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.headers.h4};
  align-self: center;
`;

export const TestimonialsCtaForm = styled.form`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

export const TestimonialsCtaEmail = styled.div``;
//         &--email {

export const TestimonialsCtaEmailInput = styled.input`
  background-color: ${({ theme }) => theme.colors.white.one};
  height: 5rem;
  width: 44rem;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  color: ${({ theme }) => theme.colors.black.five};
  padding-left: 2rem;
  border-radius: 10px;
  border: none;
  border-bottom: 3px solid transparent;
  display: block;

  :focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(35, 41, 55, 0.1);
    border-bottom: 3px solid ${({ theme }) => theme.colors.green.one};
  }

  :focus:invalid {
    border-bottom: 3px solid ${({ theme }) => theme.colors.gold.two};
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey.one};
  }

  :placeholder-shown {
    /* opacity: 0; */
    /* visibility: hidden; */
    /* transform: translateY(-4rem); */
  }
`;

export const TestimonialsCtaEmailLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4};
  font-weight: 500;
  margin: 0.7rem 0 0 2rem;
  display: block; // needed to make details above work on label
  transition: all 0.3s;

  opacity: 0;
  visibility: hidden;
  transform: translateY(-4rem);
`;

export const TestimonialsCtaMsg = styled.div``;

export const TestimonialsCtaMsgInput = styled.input`
  background-color: ${({ theme }) => theme.colors.white.one};
  height: 8rem;
  width: 44rem;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
  color: ${({ theme }) => theme.colors.black.five};
  padding-left: 2rem;
  border-radius: 10px;
  border: none;
  border-bottom: 3px solid transparent;
  display: block;

  :focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(35, 41, 55, 0.1);
    border-bottom: 3px solid $color-secondary;
  }

  :focus:invalid {
    border-bottom: 3px solid ${({ theme }) => theme.colors.gold.two};
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey.one};
  }

  :placeholder-shown {
    /* opacity: 0; */
    /* visibility: hidden; */
    /* transform: translateY(-4rem); */
  }
`;

export const TestimonialsCtaMsgLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4};
  font-weight: 500;
  margin: 0.7rem 0 0 2rem;
  display: block; // needed to make details above work on label
  transition: all 0.3s;

  opacity: 0;
  visibility: hidden;
  transform: translateY(-4rem);
`;

export const TestimonialsCtaButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green.one};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.white.one};
  height: 6rem;
  width: 44rem;
  border-radius: 10px;
  border: none;
`;

export const TestimonialsCtaParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4};
  justify-self: end;
  margin-top: 0.7rem;
`;

export const TestimonialsCtaSpan = styled.span`
  color: ${({ theme }) => theme.colors.grey.one};
`;
