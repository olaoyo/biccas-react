import styled from "styled-components";

export const HeroImgGrid = styled.div`
  background-color: ${({ theme }) => theme.colors.white.one};
  grid-column: col-start 6 / center-end;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
`;


export const Figure = styled.figure`
  grid-column: 4 / 10;
  grid-row: 2 / 8;

  background-color: ${({ theme }) => theme.colors.green.one};
  height: 52.6rem; //TODO
  width: 41rem; //TODO
  border-radius: 10px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;


export const ImgMan = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  align-self: end;
`;


export const AmoutGrid = styled.div`
  grid-column: 1 / 5;
  grid-row: 2 / 3;
  margin-top: 2rem;

  background-color: ${({ theme }) => theme.colors.white.one};
  width: 26.2rem;
  height: 7.8rem;
  // outline: 1px solid $color-secondary;
  border-radius: 10px;
  /* box-shadow: 0 0.2rem 0.2rem rgba(${({ theme }) =>
    theme.colors.black.three}, 0.2); */
  box-shadow: 0 0.2rem 0.2rem rgba(22, 28, 40, 0.2);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;


export const AmoutTextGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  padding-left: 2rem;
`;


export const AmountTextTxt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4};
  color: ${({ theme }) => theme.colors.grey.one};
  align-self: end;
  padding-bottom: 0.5rem;
`;


export const AmountTextNum = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.black.one};
  font-weight: 500;
`;



export const ButtonGrid = styled.div`
  justify-self: end;
  align-self: center;
  padding-right: 2rem;
`;



export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.green.one};
  color: ${({ theme }) => theme.colors.white.one};
  width: 6.4rem;
  height: 2.8rem;
  border: none;
  border-radius: 40px;
  transition: all 0.2s;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem
      rgba(${({ theme }) => theme.colors.black.three}, 0.2);
    background-color: ${({ theme }) => theme.colors.green.four};
    cursor: pointer;
  }
`;



export const Storage = styled.div`
  grid-column: 9 / 10;
  grid-row: 2 / 3;
  justify-self: end;
  align-self: end;
  margin-right: -2rem;

  background-color: ${({ theme }) => theme.colors.gold.one};
  border-radius: 10px;
  width: 4.857rem;
  height: 4.857rem;

  transform: rotate(15deg); //TODO

  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;



export const StorageIcon = styled.div`
  font-size: 2.5rem;
  padding-top: 0.5rem;
  /* width: 2rem; */
  /* height: 2rem; */
  /* fill: ${({ theme }) => theme.colors.white.one}; */
  justify-self: center;
  align-self: center;
`;


export const Checked = styled.div`
  grid-column: 3 / 4;
  grid-row: 4 / 5;
  align-self: end;

  background-color: ${({ theme }) => theme.colors.purple.one};
  border-radius: 10px;
  width: 4rem;
  height: 4rem;
  transform-origin: bottom left;
  transform: rotate(-15deg);

  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;


export const CheckedIcon = styled.div`
  font-size: 2rem;
  padding-top: 0.5rem;
  /* width: 2rem; */
  /* height: 2rem; */
  /* fill: ${({ theme }) => theme.colors.white.one}; */
  justify-self: center;
  align-self: center;
`;


export const IncomeGrid = styled.div`
  grid-column: 3 / 5;
  grid-row: 7 / 8;
  margin-left: -2rem;

  background-color: ${({ theme }) => theme.colors.white.one};
  height: 7rem;
  width: 13.8rem;
  border-radius: 10px;
  box-shadow: 0 0.2rem 0.2rem rgba(22, 28, 40, 0.2);

  display: grid;
  grid-template-columns: max-content 1fr;
`;


export const IncomeText = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  padding-left: 1rem;
`;



export const IncomeText1 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4};
  color: ${({ theme }) => theme.colors.grey.one};
  align-self: end;
  padding-bottom: 0.5rem;
`;


export const IncomeText2 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.black.one};
  font-weight: 500;
`;


export const IncomeChart = styled.div`
  /* fill: ${({ theme }) => theme.colors.green.one}; */
  /* height: 2rem; */
  /* width: 2rem; */
  font-size: 2rem;
  justify-self: center;
  align-self: center;
  margin-top: 2rem;
`;


export const Chat = styled.div`
  grid-column: 7 / 8;
  grid-row: 9 / 10;
  background-color: ${({ theme }) => theme.colors.peach.one};
  width: 4rem;
  height: 4rem;
  border-radius: 10px;
  transform: rotate(15deg);

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 7rem;
`;


export const ChatBubble = styled.div`
  /* width: 2rem; */
  /* height: 2rem; */
  /* fill: ${({ theme }) => theme.colors.green.one}; */
  font-size: 2rem;
  padding-top: 0.5rem;
  justify-self: center;
  align-self: center;
`;


export const Card = styled.div`
  grid-column: 8 / 10;
  grid-row: 6 / 9;
  margin: 4rem 0 0 4rem;

  background-color: ${({ theme }) => theme.colors.black.three};
  height: 18.8rem;
  width: 14.6rem;
  border-radius: 10px;
  transform-origin: bottom right;
  overflow: hidden;
  transform: rotate(15deg);

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 1rem;
`;


export const CircleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1.3rem;
  position: relative;
`;


export const Circle1 = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.four};
  border-radius: 50px;
  width: 2.8rem;
  height: 2.8rem;
  margin-left: 1rem;
`;


export const Circle2 = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.five};
  border-radius: 50px;
  width: 2.8rem;
  height: 2.8rem;
  margin-left: -2rem;
`;


export const Circle3 = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.two};
  border-radius: 100px;
  width: 10.8rem;
  height: 10.8rem;
  justify-self: end;
  align-self: start;
  position: absolute;
  bottom: -10%;
  left: 62%;
`;


export const CardText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4};
  color: ${({ theme }) => theme.colors.white.one};
  margin-left: 1rem;
`;


export const CardBtm = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
`;


export const CardBtmCircle = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.two};
  width: 12.8rem;
  height: 12.8rem;
  border-radius: 100px;
  justify-self: start;
  align-self: end;
  top: -40%;
  right: 62%;
  position: absolute;
  z-index: 1;
`;


export const CardBtmSquare = styled.div`
  grid-column: 1 / span 1;
  justify-self: center;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.grey.four};
  width: 3.4rem;
  height: 2.2rem;
  border-radius: 4px;
  z-index: 2;
`;


export const CardBtmText = styled.div`
  grid-column: 3 / span 1;
  justify-self: center;
  align-self: center;
`;

