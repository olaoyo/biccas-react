import {
  CopyrightGrid,
  CopyrightParagraph1,
  CopyrightParagraph2,
} from "./Copyright.styles";

function Copyright() {

  const year = new Date().getFullYear();

  return (
    <CopyrightGrid>
      <CopyrightParagraph1>
        &#169; {year} Biccas Inc. Copyright and rights reserved
      </CopyrightParagraph1>
      <CopyrightParagraph2>
        Terms and Condtions . Privacy Policy
      </CopyrightParagraph2>
    </CopyrightGrid>
  );
}

export default Copyright;
