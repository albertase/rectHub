import React from "react";
import Box from "../../Base/box";
import { H, P } from "../../Base/text";
import { Grid } from "../../Base/grid";
import { Button } from "../../Base/button";
import { Image } from "../../Base/image";

const Service = () => {
  return (
    <div>
      <Box margin="40px" service>
        <H align="center" fs="32px" lh="39.01px" pad="30px 0">
          How the enrollment process works
        </H>

        <Grid gtc="repeat(3, 1fr)" service>
          <Box pad="20px" bg="#6E54EF" width="85%" br="20px" height="350px" serviceGrid>
              <Image src="./Images/aiServiceNo1.svg" alt="ai" />
            <P pad="95px 0 0px 0" fs="32px" lh="39.01px" width="1" aiHeroColor='#ffffff' serviceAlign>
              Fill and Submit Application
            </P>
           <Image src="./Images/aiService1.svg" alt="ai" right="0px" bottom="0px"/>
          </Box>

          <Box bg="#6BE1BA" width="85%" pad="20px" br="20px" height="350px" serviceGrid>
            <Image src="./Images/aiServiceNo2.svg" alt="ai" />
            <P pad="95px 0 0px 0" fs="32px" lh="39.01px" serviceAlign>
              Complete all evaluation exams
            </P>
            <Image src="./Images/aiService2.svg" alt="robot" right="0px" bottom="0px"/>
          </Box>

          <Box bg="#121212" width="85%" pad="20px" br="20px" height="350px" serviceGrid>
            <Image src="./Images/aiServiceNo3.svg" alt="ai"/>
            <P pad="95px 0 0px 0" fs="32px" lh="39.01px" width="1" aiHeroColor='#ffffff' serviceAlign>
              Finish enrollment and Start your journey
            </P>
            <Image src="./Images/aiService3.svg" alt="robot" right="0px" bottom="0px"/>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Service;
