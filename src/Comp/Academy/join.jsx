import React from "react";
import Box from "../../Base/box";
import { P } from "../../Base/text";
import { Button } from "../../Base/button";

const Join = () => {
  return (
    <div>
      <Box
        bg="#02052F"
        margin="0px 12%"
        pad="30px"
        align="center"
        mt="60px"
        join
      >
        <P
          sec
          color="white"
          fs="29px"
          pad="20px 0"
          width="100%"
          margin="0 auto"
          join
        >
          <b>
            Join our communities of over 1000+ learners today and accelerate
            your career
          </b>
        </P>
        <a
          href="https://airtable.com/shrxIa7fz0q7gagPh"
          target="_blank"
          rel="noreferrer"
        >
          <Button primary>Apply Now</Button>
        </a>
      </Box>
    </div>
  );
};

export default Join;
