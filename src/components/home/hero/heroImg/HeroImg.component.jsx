import {
  HeroImgGrid,
  Figure,
  ImgMan,
  AmoutGrid,
  AmoutTextGrid,
  AmountTextTxt,
  AmountTextNum,
  ButtonGrid,
  Button,
  Storage,
  StorageIcon,
  Checked,
  CheckedIcon,
  IncomeGrid,
  IncomeText,
  IncomeText1,
  IncomeText2,
  IncomeChart,
  Chat,
  ChatBubble,
  Card,
  CircleGrid,
  Circle1,
  Circle2,
  Circle3,
  CardText,
  CardBtm,
  CardBtmCircle,
  CardBtmSquare,
  CardBtmText,
} from "./HeroImg.styles";

import HeroImgMan from "../../../../images/hero_img_man.png";

function HeroImg() {
  return (
    <HeroImgGrid>
      <Figure>
        <ImgMan src={HeroImgMan} alt="Team Member" />
      </Figure>

      <AmoutGrid>
        <AmoutTextGrid>
          <AmountTextTxt>Enter amount</AmountTextTxt>
          <AmountTextNum>$450.00</AmountTextNum>
        </AmoutTextGrid>
        <ButtonGrid>
          <Button>Send</Button>
        </ButtonGrid>
      </AmoutGrid>

      <Storage>
        <StorageIcon>
          <ion-icon name="server-outline"></ion-icon>
        </StorageIcon>
      </Storage>

      <Checked>
        <CheckedIcon>
          <ion-icon name="checkmark-outline"></ion-icon>
        </CheckedIcon>
      </Checked>

      <IncomeGrid>
        <IncomeText>
          <IncomeText1>Total Income</IncomeText1>
          <IncomeText2>$245.00</IncomeText2>
        </IncomeText>
        <IncomeChart>
          <ion-icon
            style={{ color: "#54BD95" }}
            name="stats-chart-outline"
          ></ion-icon>
        </IncomeChart>
      </IncomeGrid>

      <Chat>
        <ChatBubble>
          <ion-icon name="chatbox-outline"></ion-icon>
        </ChatBubble>
      </Chat>

      <Card>
        <CircleGrid>
          <Circle1 />
          <Circle2 />
          <Circle3 />
        </CircleGrid>
        <CardText>
          <p>Credit Card</p>
          <p>&#8195;....&#8195;1234</p>
        </CardText>

        <CardBtm>
          <CardBtmCircle />
          <CardBtmSquare />
          <CardBtmText>09/25</CardBtmText>
        </CardBtm>
      </Card>
    </HeroImgGrid>
  );
}

export default HeroImg;
