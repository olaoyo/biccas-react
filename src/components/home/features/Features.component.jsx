import {
  FeaturesGrid,
  Feature,
  FeatureHeader,
  FeatureImg,
  FeatureHeader2,
  FeatureParagraph,
  FeatureParagraph2,
  FeatureButton,
} from "./Features.styles";

import CollabTeams from "../../../images/feat_collab_teams.svg"
import CloudStorage from "../../../images/feat_cloud_storage.svg"
import DataAnalytics from "../../../images/feat_data_analytics.svg"

function Features() {
  return (
    <FeaturesGrid>
      <Feature>
        <FeatureHeader>Our Features you can get</FeatureHeader>
        <FeatureImg
          src={CollabTeams}
          alt="Collaboration Teams"
        />
        <FeatureHeader2>Collboration Teams</FeatureHeader2>
        <FeatureParagraph>
          Here you can handle projects together with team virtually
        </FeatureParagraph>
      </Feature>

      <Feature>
        <FeatureParagraph2>
          We offer a variety of interesting features that you can help increase
          yor productivity at work and manage your project easily
        </FeatureParagraph2>
        <FeatureImg
          src={CloudStorage}
          alt="Cloud Storage"
        />
        <FeatureHeader2>Cloud Storage</FeatureHeader2>
        <FeatureParagraph>
          No need to worry about storage because we provide storage up to 2 TB
        </FeatureParagraph>
      </Feature>

      <Feature>
        <FeatureButton>Get Started</FeatureButton>
        <FeatureImg
          src={DataAnalytics}
          alt="Data Analytics"
        />
        <FeatureHeader2>Data Analytics</FeatureHeader2>
        <FeatureParagraph>
          We always provide useful information to make it easier for you every
          day
        </FeatureParagraph>
      </Feature>
    </FeaturesGrid>
  );
}

export default Features;
