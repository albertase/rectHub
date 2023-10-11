import React from "react";
import Box from "../../Base/box";
import { P, H } from "../../Base/text";
import { Grid } from "../../Base/grid";

const Who = () => {
  return (
    <div>
      <Box align="center" pad="50px" about>
        <H>Who we are</H>
        <P pad="20px 0" width="1153px" margin="auto" fs="17px" lh="251.1%" about>
          We are a team of experienced data professionals who offer a wide range
          of data-related services to businesses. Our team is comprised of data
          scientists, data engineers, and business intelligence experts who have
          a deep understanding of how to leverage data to drive business growth
          and improve decision-making. Whether you need help setting up a data
          infrastructure, managing data workflows, or turning data into
          actionable insights, we're here to help. We believe that every
          business can benefit from the power of data, and we're dedicated to
          helping our clients unlock that potential.
        </P>

        <Grid gtc="repeat(3, 1fr)" gap="30px" about>
          <Box
            pad="20px"
            align="center"
            bs="0px 4px 4px rgba(0, 0, 0, 0.25)"
            border
          >
            <H pad="20px 0" fs="25px">
              Data Solutions
            </H>
            <P fs="16px" lh="251.1%" width="345px" margin="auto" about>
              Our team provides end-to-end data solutions to help businesses
              make data-driven decisions. From data collection and storage to
              analysis and visualization, we offer a full suite of services to
              help our clients unlock the value of their data.
            </P>
          </Box>

          <Box
            pad="20px"
            align="center"
            bs="0px 4px 4px rgba(0, 0, 0, 0.25)"
            border
          >
            <H pad="20px 0" fs="25px">
              Team Augmentation
            </H>
            <P fs="16px" lh="251.1%" width="345px" margin="auto" about>
              Our team specializes in augmenting existing data teams with
              additional expertise and resources. Whether your team needs
              additional support for a specific project or ongoing help to meet
              growing demands, we have the skills and experience to help.
            </P>
          </Box>

          <Box
            pad="20px"
            align="center"
            bs="0px 4px 4px rgba(0, 0, 0, 0.25)"
            border
          >
            <H pad="20px 0" fs="25px">
              Business Intelligence
            </H>
            <P fs="16px" lh="251.1%" width="345px" margin="auto" about>
              Our team provides business intelligence services to help
              organizations make better, data-driven decisions. From data
              warehousing and reporting to predictive analytics and machine
              learning, we offer a full range of services to help organizations
              turn data into actionable insights.
            </P>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Who;
