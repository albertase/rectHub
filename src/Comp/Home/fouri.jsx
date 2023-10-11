import React from "react";
import Box from "../../Base/box";
import { H, P } from "../../Base/text";
import Flex from "../../Base/flex";

const FourI = () => {
  return (
      <div>
        <Box bg="#F3F4F6">
          <H align="center" fouriheader>The four I's of our teams</H>

          <Box margin="50px 0" fouricon>
            <Flex card>
              <Box margin="0 50px"  fouri>
                <Box
                    bg="white"
                    margin="50px 0"
                    height="420px"
                    width="320px"
                    br="5px 5px 20px 20px"
                    bs="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    fouriblue
                    fouriWidth
                >
                  <H fouri align="center" pad="10px 0">
                    Intuition
                  </H>
                  <P width="335px" fs="20px" align="center" pad="50px" lh="37px" margin="" fouri>
                    We continuously search for innovative methods to utilize
                    technology to enhance our processes and products.
                  </P>
                </Box>

                <Box
                    bg="white"
                    height="420px"
                    width="320px"
                    br="5px 5px 20px 20px"
                    bs="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    fourigreen
                    fouriWidth
                >
                  <H fouri align="center" pad="10px 0">
                    Innovation
                  </H>

                  <P width="330px" fs="20px" align="center" pad="50px" lh="37px" fouri>
                    We have teams that concentrate on improving our current
                    products, while others investigate entirely new possibilities.
                  </P>
                </Box>
              </Box>

              <Box margin="100px 50px" fouri fourisec>
                <Box
                    // pad="70px"
                    bg="white"
                    height="420px"
                    width="320px"
                    margin="50px 0"
                    br="5px 5px 20px 20px"
                    bs="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    fourigreen
                    fouriWidth
                >
                  <H fouri align="center" pad="10px 0">
                    Information
                  </H>
                  <P
                      width="330px"
                      fs="20px"
                      align="center"
                      pad="50px"
                      margin="auto"
                      lh="37px"
                      fouri
                  >
                    Our decisions are based on complex evaluations and a vast
                    number of experiments.
                  </P>
                </Box>

                <Box
                    bg="white"
                    width="320px"
                    margin="10px 0"
                    height="420px"
                    br="5px 5px 20px 20px"
                    bs="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    fouriblue
                    fouriWidth
                >
                  <H fouri align="center" pad="10px 0">
                    Independence
                  </H>

                  <P width="330px" fs="20px" align="center" pad="50px" lh="37px" fouri>
                    Our structure allows our teams to have maximum autonomy to
                    express their entrepreneurial spirit.
                  </P>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </div>
  );
};

export default FourI;