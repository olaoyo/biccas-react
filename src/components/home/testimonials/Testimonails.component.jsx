import {
  Testimonials,
  TestimonialsUsers,
  TestimonialsHeader,
  TestimonialsParagraph,
  TestimonialsQuote,
  TestimonialsImgGrid,
  TestimonialsPic,
  TestimonialsPlay,
  TestimonialsCta,
  TestimonialsCtaHeader,
  TestimonialsCtaForm,
  TestimonialsCtaEmail,
  TestimonialsCtaEmailInput,
  TestimonialsCtaEmailLabel,
  TestimonialsCtaMsg,
  TestimonialsCtaMsgInput,
  TestimonialsCtaMsgLabel,
  TestimonialsCtaButton,
  TestimonialsCtaParagraph,
  TestimonialsCtaSpan,
} from "./Testimonials.styles";

import HappyCustomer1 from "../../../images/testimonial_1.png";
import HappyCustomer2 from "../../../images/testimonial_2.png";
import HappyCustomer3 from "../../../images/testimonial_3.png";
import HappyCustomer4 from "../../../images/testimonial_4.png";
import Money from "../../../images/cta_money.png";


function Testimonails() {
  return (
    <Testimonials>
      <TestimonialsUsers>
        <TestimonialsHeader>What People Are Saying About Us</TestimonialsHeader>
        <TestimonialsParagraph>
          Everything you need to accept payments, grow your money and manage it
          from aywhere on the planet
        </TestimonialsParagraph>
        <TestimonialsQuote>″</TestimonialsQuote>
        <TestimonialsParagraph>
          This E-Wallet is a very helpful application. It's easy to use and
          makes my life easier by shortening payment time 😍
        </TestimonialsParagraph>
        <TestimonialsParagraph>_ Aria Zinanrio</TestimonialsParagraph>
        <TestimonialsImgGrid>
          <TestimonialsPic src={HappyCustomer1} alt="Happy Customer" />
          <img src={HappyCustomer2} alt="Happy Customer" />
          <img src={HappyCustomer3} alt="Happy Customer" />
          <img src={HappyCustomer4} alt="Happy Customer" />

          <TestimonialsPlay>
            <ion-icon name="play-circle-outline"></ion-icon>
          </TestimonialsPlay>
        </TestimonialsImgGrid>
      </TestimonialsUsers>

      <TestimonialsCta>
        <img src={Money} alt="Money" />
        <TestimonialsCtaHeader>Get Started</TestimonialsCtaHeader>
        <TestimonialsCtaForm action="#">
          <TestimonialsCtaEmail>
            <TestimonialsCtaEmailInput
              type="email"
              placeholder="Enter your email"
              id="email"
              required
            />
            <TestimonialsCtaEmailLabel
              htmlFor="email"
            >
              Enter your email
            </TestimonialsCtaEmailLabel>
          </TestimonialsCtaEmail>

          <TestimonialsCtaMsg>
            <TestimonialsCtaMsgInput
              type="text"
              placeholder="Drop us a message"
              id="msg"
              required
            />
            <TestimonialsCtaMsgLabel
              htmlFor="msg"
            >
              Drop us a message
            </TestimonialsCtaMsgLabel>
          </TestimonialsCtaMsg>

          <TestimonialsCtaButton>
            Request a Demo
          </TestimonialsCtaButton>
          <TestimonialsCtaParagraph>
            <TestimonialsCtaSpan>or</TestimonialsCtaSpan>&#8194;Start Free Trial
          </TestimonialsCtaParagraph>
        </TestimonialsCtaForm>
      </TestimonialsCta>
    </Testimonials>
  );
}

export default Testimonails;
