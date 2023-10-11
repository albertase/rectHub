import React from "react";
import Box from "../../Base/box";
import Flex from "../../Base/flex";
import { Button } from "../../Base/button";
import { P, H } from "../../Base/text";
import { Image } from "../../Base/image";

const Hero = () => {
  return (
    <div>
      <Box bg="#F3F4F6" margin="0 40px" pad="80px 100px" hero>
        <Flex>
          <Box>
            <H fs="60px" width="409px" hero>Providing on-demand data teams.</H>
            <P fs="17px" width="372px" pad="28px 0">
              Take advantage of Recthub’s world-class data team to bring ideas
              and designs to life rapidly..
            </P>

            <a href="https://calendly.com/elishatofunmi" target="_blank" rel="noreferrer"><Button primary>Let's Talk</Button></a>
          </Box>

          <Box heroImg>
            <img src="./Images/hero.AVIF" alt="hero"/>
          </Box>
        </Flex>
      </Box>
        <Box bg="white" margin="0 40px" pad="20px 100px" trustCon> 
            <Flex alignItems="center" trust>
              <div>
              <H width="20px" sec opac="0.35" fs="17px" lh="23.95px"><b>TRUSTED PARTNERS</b></H>
              </div>
              <Box margin="0 20%" trust>
                <Image src="./Images/RectlabsLogo1.svg" alt="rectlab" primary trusts/>
                <Image src="./Images/Synx1.svg" alt="synx" primary margin="0 50px" trust/>
                <Image src="./Images/Cartecloud1.svg" alt="carte cloud" primary trusts/>
              </Box>
            </Flex>
        </Box>
    </div>
  );
};

export default Hero;
