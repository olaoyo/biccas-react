import {
  //    Partner Support
  PartnerGrid,
  PartnerSupport,
  PartnerSupportHeader,
  PartnerSupportText,
  PartnerSupportRatings,
  PartnerSupportRatingsContent,
  PartnerSupportRatingsContentStars,
  PartnerSupportRatingsContentStarsIcon,
  PartnerSupportRatingsContentText1,
  PartnerSupportRatingsContentText2,

  //   Partner Activities
  PartnerActivities,
  PartnerItems,
  PartnerItemsIcon,
  PartnerItemsIconBlock,
  PartnerItemsText,
  PartnerItemsHeader,
  PartnerItemsParagraph,
} from "./Partners.styles";

function Partners() {
  return (
    <PartnerGrid>
      <PartnerSupport>
        <PartnerSupportHeader>
          How we support our partners all over the world
        </PartnerSupportHeader>
        <PartnerSupportText>
          SaaS has become a common delivery model for many business
          applications, including office software, messaging software, payroll
          processing software, DBMS software, management software
        </PartnerSupportText>
        <PartnerSupportRatings>
          <PartnerSupportRatingsContent>
            <PartnerSupportRatingsContentStars>
              <PartnerSupportRatingsContentStarsIcon>
                <ion-icon name="star"></ion-icon>
              </PartnerSupportRatingsContentStarsIcon>
              <PartnerSupportRatingsContentStarsIcon>
                <ion-icon name="star"></ion-icon>
              </PartnerSupportRatingsContentStarsIcon>
              <PartnerSupportRatingsContentStarsIcon>
                <ion-icon name="star"></ion-icon>
              </PartnerSupportRatingsContentStarsIcon>
              <PartnerSupportRatingsContentStarsIcon>
                <ion-icon name="star"></ion-icon>
              </PartnerSupportRatingsContentStarsIcon>
              <PartnerSupportRatingsContentStarsIcon>
                <ion-icon name="star-half"></ion-icon>
              </PartnerSupportRatingsContentStarsIcon>
            </PartnerSupportRatingsContentStars>
            <PartnerSupportRatingsContentText1>
              4.5 / 5 rating
            </PartnerSupportRatingsContentText1>
            <PartnerSupportRatingsContentText2>
              Databricks
            </PartnerSupportRatingsContentText2>
          </PartnerSupportRatingsContent>
          <PartnerSupportRatingsContent>
            <PartnerSupportRatingsContentStars>
              <PartnerSupportRatingsContentStarsIcon>
                <ion-icon name="star"></ion-icon>
              </PartnerSupportRatingsContentStarsIcon>
              <PartnerSupportRatingsContentStarsIcon>
                <ion-icon name="star"></ion-icon>
              </PartnerSupportRatingsContentStarsIcon>
              <PartnerSupportRatingsContentStarsIcon>
                <ion-icon name="star"></ion-icon>
              </PartnerSupportRatingsContentStarsIcon>
              <PartnerSupportRatingsContentStarsIcon>
                <ion-icon name="star"></ion-icon>
              </PartnerSupportRatingsContentStarsIcon>
              <PartnerSupportRatingsContentStarsIcon>
                <ion-icon name="star-outline"></ion-icon>
              </PartnerSupportRatingsContentStarsIcon>
            </PartnerSupportRatingsContentStars>
            <PartnerSupportRatingsContentText1>
              4 / 5 rating
            </PartnerSupportRatingsContentText1>
            <PartnerSupportRatingsContentText2>
              Chainalysis
            </PartnerSupportRatingsContentText2>
          </PartnerSupportRatingsContent>
        </PartnerSupportRatings>
      </PartnerSupport>

      <PartnerActivities>
        <PartnerItems>
          <PartnerItemsIcon>
            <PartnerItemsIconBlock>
              <ion-icon name="book-outline"></ion-icon>
            </PartnerItemsIconBlock>
          </PartnerItemsIcon>

          <PartnerItemsText>
            <PartnerItemsHeader>Publishing</PartnerItemsHeader>
            <PartnerItemsParagraph>
              Plan, collaborate and publishing content that drives meaningful
              engagement and growth for your brand
            </PartnerItemsParagraph>
          </PartnerItemsText>
        </PartnerItems>

        <PartnerItems>
          <PartnerItemsIcon>
            <PartnerItemsIconBlock>
              <ion-icon name="pie-chart-outline"></ion-icon>
            </PartnerItemsIconBlock>
          </PartnerItemsIcon>

          <PartnerItemsText>
            <PartnerItemsHeader>Analytics</PartnerItemsHeader>
            <PartnerItemsParagraph>
              Analyze your performance and create gorgeous reports
            </PartnerItemsParagraph>
          </PartnerItemsText>
        </PartnerItems>

        <PartnerItems>
          <PartnerItemsIcon>
            <PartnerItemsIconBlock>
              <ion-icon name="share-social-outline"></ion-icon>
            </PartnerItemsIconBlock>
          </PartnerItemsIcon>

          <PartnerItemsText>
            <PartnerItemsHeader>Engagement</PartnerItemsHeader>
            <PartnerItemsParagraph>
              Quickly navigate and engage with your audience
            </PartnerItemsParagraph>
          </PartnerItemsText>
        </PartnerItems>
      </PartnerActivities>
    </PartnerGrid>
  );
}

export default Partners;
