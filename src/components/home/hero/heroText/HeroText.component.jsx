import {
  HeroTextGrid,
  Header,
  Paragraph,
  TrialGrid,
  TrialButton,
  TrialImg,
  TrialParagraph
} from "./HeroText.styles";

import play from "../../../../images/play.svg"

function HeroText() {
  return (
    <HeroTextGrid>
      <Header>We’re here to Increase your Productivity</Header>

      <Paragraph>
        Let's make your work more organized and easy using the Taskio Dashboard
        with many of the latest features in managing work everyday.
      </Paragraph>

      <TrialGrid>
        <TrialButton>
          Free Trial
        </TrialButton>

        <TrialImg src={play} alt="Play Image" />
        <TrialParagraph>View Demo</TrialParagraph>
      </TrialGrid>
    </HeroTextGrid>
  );
}

export default HeroText;
