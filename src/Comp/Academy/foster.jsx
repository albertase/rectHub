import React from "react";
import Box from "../../Base/box";
import { Grid } from "../../Base/grid";
import { P, H } from "../../Base/text";

const Foster = () => {
  return (
    <div>
      <Box pad="50px 140px" hero>
        <H width="951px" fs="50px" acquire>
          We are fostering the future generation of tech entrepreneurs in Africa
        </H>
        <P width="626px" fs="16px" pad="20px 0">
          We are actively working to create and support the future generation of
          individuals who combine technical skills with business acumen to
          launch successful technology companies.
        </P>

        <Grid gtc="repeat(3, 1fr)" imgs gap="20px">
            <img src="./Images/Rectangle1.AVIF" alt="grid" />
            <img src="./Images/Rectangle2.AVIF" alt="grid" />
            <img src="./Images/Rectangle3.AVIF" alt="grid" />
        </Grid>
      </Box>
    </div>
  );
};

export default Foster;
