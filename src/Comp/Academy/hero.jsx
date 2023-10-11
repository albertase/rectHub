import React from "react";
import Box from "../../Base/box";
import Flex from "../../Base/flex";
import { Button } from "../../Base/button";
import { P, H } from "../../Base/text";

const Hero = () => {
  return (
    <div>
      <Box bg="#F3F4F6" margin="0 40px" pad="80px 100px" hero>
        <Flex>
          <Box>
            <H fs="60px" width="530px" hero academy>
              Providing young Africans with the data skills needed for the
              future.
            </H>
            <P fs="17px" width="548px" pad="28px 0" academy>
              The Recthub Academy is a comprehensive, 10-month data program that
              is offered to individuals seeking to begin a career in any of the
              field of data.
            </P>

            <a
              href="https://airtable.com/shrxIa7fz0q7gagPh"
              target="_blank"
              rel="noreferrer"
            >
              <Button primary>Apply Now</Button>
            </a>
          </Box>

          <Box heroImg academyImg>
            <img src="./Images/academy-hero.AVIF" alt="hero" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
