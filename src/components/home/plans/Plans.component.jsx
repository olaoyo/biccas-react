import {
  PlansGrid,
  PlansHeader,
  PlansParagraph1,
  PlansBilling,
  PlansBillingButton1,
  PlansBillingButton2,

  PlansTiers,

  PlansTier1,
  PlansTier1Header3,
  PlansTier1Paragraph1,
  PlansTier1Headers2,
  PlansTier1HeaderSup,
  PlansTier1Features,
  PlansTier1FeatureItems,
  PlansTier1FeatureContent,
  PlansTier1FeatureContentBlock,
  PlansTier1FeatureContentBlockIcon,
  PlansTier1FeatureContentBlockIconWrap,
  PlansTier1FeatureContentBlockParagraph1,
  PlansTier1FeatureBtn1,

  PlansTier2,
  PlansTier2Header3,
  PlansTier2Paragraph1,
  PlansTier2Circle,
  PlansTier2Headers2,
  PlansTier2HeaderSup,
  PlansTier2BtnSave,
  PlansTier1FeatureBtn2,
} from "./Plans.styles";

function Plans() {
  return (
    <PlansGrid>
      <PlansHeader>
        <h2>Choose The Plan</h2>
        <h2>That's Right For You</h2>
      </PlansHeader>
      <PlansParagraph1>
        Choose a plan that works best for you, feel free to contact us
      </PlansParagraph1>
      <PlansBilling>
        <PlansBillingButton1>Bill Monthly</PlansBillingButton1>
        <PlansBillingButton2>Bill Yearly</PlansBillingButton2>
      </PlansBilling>
      <PlansTiers>
        <PlansTier1>
          <PlansTier1Header3>Free</PlansTier1Header3>
          <PlansTier1Paragraph1>
            <p>Have a go and test your</p>
            <p>superpowers</p>
          </PlansTier1Paragraph1>
          <PlansTier1Headers2>
            <PlansTier1HeaderSup>$</PlansTier1HeaderSup>0
          </PlansTier1Headers2>
          <PlansTier1Features>
            <PlansTier1FeatureItems>
              <PlansTier1FeatureContent>
                
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                      <ion-icon name="checkmark"></ion-icon>
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                    2 Users
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
                
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                      <ion-icon name="checkmark"></ion-icon>
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                    2 Files
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
                
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                      <ion-icon name="checkmark"></ion-icon>
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                    Public Share & Comments
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
                
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                      <ion-icon name="checkmark"></ion-icon>
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                    Chat Support
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
                
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                      <ion-icon name="checkmark"></ion-icon>
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                    New income apps
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
             
              </PlansTier1FeatureContent>

              <PlansTier1FeatureBtn1>
                Signup for free
              </PlansTier1FeatureBtn1>
            </PlansTier1FeatureItems>
          </PlansTier1Features>
        </PlansTier1>

        <PlansTier2>
          <PlansTier2Header3>Pro</PlansTier2Header3>
          <PlansTier2Paragraph1>
            <p>Experiment with the power</p>
            <p>of infinite possibilities</p>
          </PlansTier2Paragraph1>
          <PlansTier2Circle></PlansTier2Circle>
          <PlansTier2Headers2>
            <PlansTier2HeaderSup>$</PlansTier2HeaderSup>8
          </PlansTier2Headers2>
          <PlansTier2BtnSave>
            Save $50 a year
          </PlansTier2BtnSave>
          <PlansTier1Features>
            <PlansTier1FeatureItems>
              <PlansTier1FeatureContent>
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                    <ion-icon name="checkmark"></ion-icon>
                      
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                    4 Users
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                    <ion-icon name="checkmark"></ion-icon>
                      
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                    All apps
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                    <ion-icon name="checkmark"></ion-icon>
                      
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                    Unlimited editable exports
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                    <ion-icon name="checkmark"></ion-icon>
                      
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                    Folders and collaboration
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                    <ion-icon name="checkmark"></ion-icon>
                      
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                    All incoming apps
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
         
              </PlansTier1FeatureContent>
              <PlansTier1FeatureBtn2>
                Go to pro
              </PlansTier1FeatureBtn2>
            </PlansTier1FeatureItems>
          </PlansTier1Features>
        </PlansTier2>

        <PlansTier1>
          <PlansTier1Header3>Business</PlansTier1Header3>
          <PlansTier1Paragraph1>
            <p>Unveil new superpowers and</p>
            <p>join the Design Leaque</p>
          </PlansTier1Paragraph1>
          <PlansTier1Headers2>
            <PlansTier1HeaderSup>$</PlansTier1HeaderSup>16
          </PlansTier1Headers2>
          <PlansTier1Features>
            <PlansTier1FeatureItems>
              <PlansTier1FeatureContent>
                
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                      <ion-icon name="checkmark"></ion-icon>
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                  All the features of pro plan
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
                
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                      <ion-icon name="checkmark"></ion-icon>
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                  Account success manager
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
                
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                      <ion-icon name="checkmark"></ion-icon>
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                  Single Sign-On (SSO)
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
                
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                      <ion-icon name="checkmark"></ion-icon>
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                  Co-conception program
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
                
                <PlansTier1FeatureContentBlock>
                  <PlansTier1FeatureContentBlockIcon>
                    <PlansTier1FeatureContentBlockIconWrap>
                      <ion-icon name="checkmark"></ion-icon>
                    </PlansTier1FeatureContentBlockIconWrap>
                  </PlansTier1FeatureContentBlockIcon>
                  <PlansTier1FeatureContentBlockParagraph1>
                  Collaboration
                  </PlansTier1FeatureContentBlockParagraph1>
                </PlansTier1FeatureContentBlock>
             
              </PlansTier1FeatureContent>

              <PlansTier1FeatureBtn1>
                Go to Business
              </PlansTier1FeatureBtn1>
            </PlansTier1FeatureItems>
          </PlansTier1Features>
        </PlansTier1>       
        
      </PlansTiers>
    </PlansGrid>
  );
}

export default Plans;
