import {
  FooterGrid,
  FooterSubscribe,
  FooterSubscribeHeader,
  FooterSubscribeParagraph,
  FooterSubscribeForm,
  FooterSubscribeEmail,
  FooterSubscribeEmailInput,
  FooterSubscribeEmailButton,
  FooterSubscribeEmailButtonIcon,
  FooterInfo,
  FooterInfoDetails,
  FooterInfoDetailsParagraph,
  FooterInfoDetailsList,
} from "./Footer.styles";

function Footer() {
  return (
    <FooterGrid>
      <FooterSubscribe>
        <FooterSubscribeHeader>Biccas</FooterSubscribeHeader>
        <FooterSubscribeParagraph>
          Get started now, try our product
        </FooterSubscribeParagraph>
        <FooterSubscribeForm action="#">
          <FooterSubscribeEmail>
            <FooterSubscribeEmailInput
              type="email"
              placeholder="Enter your email here"
              id="email"
              required
            />
          </FooterSubscribeEmail>
          <FooterSubscribeEmailButton>
            <FooterSubscribeEmailButtonIcon>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </FooterSubscribeEmailButtonIcon>
          </FooterSubscribeEmailButton>
        </FooterSubscribeForm>
      </FooterSubscribe>

      <FooterInfo>
        <FooterInfoDetails>
          <FooterInfoDetailsParagraph>Support</FooterInfoDetailsParagraph>
          <FooterInfoDetailsList>
            <li>Help centre</li>
            <li>Account information</li>
            <li>About</li>
            <li>Contact us</li>
          </FooterInfoDetailsList>
        </FooterInfoDetails>

        <FooterInfoDetails>
          <FooterInfoDetailsParagraph>
            Help and Solutions
          </FooterInfoDetailsParagraph>
          <FooterInfoDetailsList>
            <li>Talk to support</li>
            <li>Support docs</li>
            <li>System status</li>
            <li>Covid response</li>
          </FooterInfoDetailsList>
        </FooterInfoDetails>

        <FooterInfoDetails>
          <FooterInfoDetailsParagraph>Product</FooterInfoDetailsParagraph>
          <FooterInfoDetailsList>
            <li>Update</li>
            <li>Security</li>
            <li>Beta test</li>
            <li>Pricing product</li>
          </FooterInfoDetailsList>
        </FooterInfoDetails>
      </FooterInfo>
    </FooterGrid>
  );
}

export default Footer;
