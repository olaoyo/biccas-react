import {
  // Benefits Text

  BenefitsGrid,
  BenefitsText,
  BenefitsTextContent,
  BenefitsTextContentHeader,
  BenefitsListGrid,
  BenefitsBlock,
  BenefitsBlockIcon,
  BenefitsBlockIconWrap,
  BenefitsBlockIconText,

  // Benefits Image
  BenefitsImg,
  BenefitsImgBg,
  BenefitsImgBgLaptop,
  BenefitsImgExpert,
  BenefitsImgExpertAmanda,
  BenefitsImgExpertText,
  BenefitsImgExpertTextParagraph2,
  BenefitsImgExpertTextParagraph3,
  BenefitsExpertChat,
  BenefitsExpertIcon,
  BenefitsIncome,
  BenefitsIncomeText,
  BenefitsIncomeTextParagraph3,
  BenefitsIncomeTextParagraph2,
  BenefitsIncomeChart,
  BenefitsIncomePic,
  BenefitsIncomePicIcon,
  BenefitsIncomeSuccess,
  BenefitsIncomeSuccessBlock,
  BenefitsIncomeSuccessIcon,
  BenefitsIncomeSuccessText,
} from "./Benefits.styles";

import Laptop from "../../../images/laptop.png";
import AmandaYoung from "../../../images/amanda_young.png";

function Benefits() {
  return (
    <BenefitsGrid>
      <BenefitsText>
        <BenefitsTextContent>
          <BenefitsTextContentHeader>
            Benefits You Will Get
          </BenefitsTextContentHeader>

          <BenefitsListGrid>
            <BenefitsBlock>
              <BenefitsBlockIcon>
                <BenefitsBlockIconWrap>
                  <ion-icon name="checkmark-outline"></ion-icon>
                </BenefitsBlockIconWrap>
              </BenefitsBlockIcon>
              <BenefitsBlockIconText>
                Free Consulting With Experts Saves Money
              </BenefitsBlockIconText>
            </BenefitsBlock>

            <BenefitsBlock>
              <BenefitsBlockIcon>
                <BenefitsBlockIconWrap>
                  <ion-icon name="checkmark-outline"></ion-icon>
                </BenefitsBlockIconWrap>
              </BenefitsBlockIcon>
              <BenefitsBlockIconText>Online Banking</BenefitsBlockIconText>
            </BenefitsBlock>

            <BenefitsBlock>
              <BenefitsBlockIcon>
                <BenefitsBlockIconWrap>
                  <ion-icon name="checkmark-outline"></ion-icon>
                </BenefitsBlockIconWrap>
              </BenefitsBlockIcon>
              <BenefitsBlockIconText>
                Investment Report Every Month
              </BenefitsBlockIconText>
            </BenefitsBlock>

            <BenefitsBlock>
              <BenefitsBlockIcon>
                <BenefitsBlockIconWrap>
                  <ion-icon name="checkmark-outline"></ion-icon>
                </BenefitsBlockIconWrap>
              </BenefitsBlockIcon>
              <BenefitsBlockIconText>
                Saving Money For The Future
              </BenefitsBlockIconText>
            </BenefitsBlock>

            <BenefitsBlock>
              <BenefitsBlockIcon>
                <BenefitsBlockIconWrap>
                  <ion-icon name="checkmark-outline"></ion-icon>
                </BenefitsBlockIconWrap>
              </BenefitsBlockIcon>
              <BenefitsBlockIconText>
                International Remittance
              </BenefitsBlockIconText>
            </BenefitsBlock>
          </BenefitsListGrid>
        </BenefitsTextContent>
      </BenefitsText>

      <BenefitsImg>
        <BenefitsImgBg>
          <BenefitsImgBgLaptop src={Laptop} alt="laptop" />
        </BenefitsImgBg>

        <BenefitsImgExpert>
          <BenefitsImgExpertAmanda>
            <img src={AmandaYoung} alt="Amanda Young" />
          </BenefitsImgExpertAmanda>
          <BenefitsImgExpertText>
            <BenefitsImgExpertTextParagraph2>
              Amanda Young
            </BenefitsImgExpertTextParagraph2>
            <BenefitsImgExpertTextParagraph3>
              Investment Consultant
            </BenefitsImgExpertTextParagraph3>
          </BenefitsImgExpertText>
          <BenefitsExpertChat>
            <BenefitsExpertIcon>
              <ion-icon name="chatbox-outline"></ion-icon>
            </BenefitsExpertIcon>
          </BenefitsExpertChat>
        </BenefitsImgExpert>

        <BenefitsIncome>
          <BenefitsIncomeText>
            <BenefitsIncomeTextParagraph3>
              Total Income
            </BenefitsIncomeTextParagraph3>
            <BenefitsIncomeTextParagraph2>$245.00</BenefitsIncomeTextParagraph2>
          </BenefitsIncomeText>
          <BenefitsIncomeChart>
            <ion-icon name="stats-chart-outline"></ion-icon>
          </BenefitsIncomeChart>
        </BenefitsIncome>

        <BenefitsIncomePic>
          <BenefitsIncomePicIcon>
            <ion-icon name="image"></ion-icon>
          </BenefitsIncomePicIcon>
        </BenefitsIncomePic>

        <BenefitsIncomeSuccess>
          <BenefitsIncomeSuccessBlock>
            <BenefitsIncomeSuccessIcon>
              <ion-icon name="checkmark"></ion-icon>
            </BenefitsIncomeSuccessIcon>
          </BenefitsIncomeSuccessBlock>
          <BenefitsIncomeSuccessText>
            Money Transfer Succesfull
          </BenefitsIncomeSuccessText>
        </BenefitsIncomeSuccess>
      </BenefitsImg>
    </BenefitsGrid>
  );
}

export default Benefits;
