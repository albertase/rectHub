import React from "react";
import Box from "../../Base/box";
import { P, H } from "../../Base/text";
import Flex from "../../Base/flex";

const Rank = () => {
  return (
    <div>
      <Box pad="20px 140px" hero>
        <H pad="10px 0" fs="50px" width="940px" acquire>
          Rank Higher to make your profile visible to top clients
        </H>

        <Box bd="2px black solid" margin="10px 0" pad="10px" br="8px">
          <Flex sec row alignItems="center">
            <Box>
              <img src="./Images/gold.svg" alt="gold trophy" />
            </Box>
            <Box pad="0 20px">
              <img src="./Images/jeffrey.svg" alt="profile" />
            </Box>
            <Box>
              <P pad="10px 0" fs="20px">
                <b>Jeffrey Chukwudi</b>
              </P>
              <P fs="12px" sec color="#918E8E">Machine Learning Engineer</P>
            </Box>
          </Flex>
        </Box>

        <Box bd="2px black solid" margin="10px 0" pad="10px" br="8px">
          <Flex sec row alignItems="center">
            <Box>
              <img src="./Images/silver.svg" alt="silver trophy" />
            </Box>
            <Box pad="0 20px">
              <img src="./Images/clement.svg" alt="profile" />
            </Box>
            <Box>
              <P pad="10px 0" fs="20px">
                <b>Clement Adebayo</b>
              </P>
              <P fs="12px" sec color="#918E8E">Dat Engineer</P>
            </Box>
          </Flex>
        </Box>

        <Box bd="2px black solid" margin="10px 0" pad="10px" br="8px">
          <Flex sec row alignItems="center">
            <Box>
              <img src="./Images/bronze.svg" alt="bronze trophy" />
            </Box>
            <Box pad="0 20px">
              <img src="./Images/odunayo.svg" alt="profile" />
            </Box>
            <Box>
              <P pad="10px 0" fs="20px">
                <b>Odunayo Ojuelegba</b>
              </P>
              <P fs="12px" sec color="#918E8E">Computer Vision Engineer</P>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Rank;
