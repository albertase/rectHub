import React from "react";
import Box from "../../Base/box";
import { H, P } from "../../Base/text";
import { Grid } from "../../Base/grid";
import { Button } from "../../Base/button";
import { Image } from "../../Base/image";
import {Link} from "react-router-dom";

const Service = () => {
  return (
    <div>
      <Box margin="40px" service>
        <H align="center" fs="35px" pad="30px 0">
            Our Services
        </H>

        <Grid gtc="repeat(4, 1fr)" service>
          <Box pad="20px" bg="#A093E2" width="85%" br="20px" height="350px" serviceGrid>
            <H pad="10px 0" fs="22px">Artificial Intelligence</H>
            <P pad="10px 0" fs="15px">
              Develop cutting edge solutions and infrastructure with our team of
              AI Engineers.
            </P>

            <Image src="./Images/ai.svg" alt="ai" right="0px" bottom="0px"/>
            <Link to="/service">
              <Button card serviceBtn>Learn More</Button>
            </Link>
          </Box>

          <Box bg="#6BE1BA" width="85%" pad="20px" br="20px" height="350px" serviceGrid>
            <H pad="10px 0" fs="22px">Machine Learning</H>
            <P pad="10px 0" fs="15px">
              Our ML engineers work together to create algorithms and establish
              machine learning systems.
            </P>

            <Image src="./Images/robot.svg" alt="robot" right="0px" bottom="0px"/>

            <Link to="/service">
            <Button card serviceBtn>Learn More</Button>
            </Link>
          </Box>

          <Box bg="#FAC849" width="85%" pad="20px" br="20px" height="350px" serviceGrid>
            <H pad="10px 0" fs="22px">Data Science</H>
            <P pad="10px 0" fs="15px" >
              Our team of data scientists collaborate to develop algorithms and
              establish the necessary infrastructure for machine learning.
            </P>
            <Image src="./Images/marketingGirl.svg" alt="robot" right="0px" bottom="0px"/>
            <Link to="/service">
            <Button card serviceBtn>Learn More</Button>
            </Link>
          </Box>

          <Box bg="#50E8FD" width="85%" pad="20px" br="20px" height="350px" serviceGrid>
            <H pad="10px 0" fs="22px">Data Engineering</H>
            <P pad="10px 0" fs="15px">
              Our data engineering team collaborates to make data accessible for
              performance evaluation and optimization purpose.
            </P>
            <Image src="./Images/server.svg" alt="robot" right="0px" bottom="0px"/>
            <Link to="/service">
            <Button card serviceBtn>Learn More</Button>
            </Link>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Service;
