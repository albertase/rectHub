import React from "react";
import { Link } from "react-router-dom";
import Box from "../Base/box";
import Flex from "../Base/flex";
import { Grid } from "../Base/grid";
import {FooterLine, P} from "../Base/text";

const Footer = () => {
  return (
    <div>
      <Box bg="#121212" pad="20px 30px" footer>
        <Grid gtc="repeat(5, 1fr)" footer>
          <Flex sec row alignItems="center">
            <Link to="/">
              <img src="./Images/logo.svg" alt="logo" width="80" />
            </Link>
            <Link to="/">
              <img src="./Images/Recthub.svg" alt="recthub" width="90" />
            </Link>
          </Flex>

          <Box margin="20px">
            <P sec color="white" fs="12px" pad="20px 0">
              <b>COMPANY</b>
            </P>
            <P sec color="white" fs="12px">
              <Link to="/about">About Us</Link>
            </P>
            <P sec color="white" fs="12px" pad="10px 0">
              <Link to="/academy">Academy</Link>
            </P>
            <P sec color="white" fs="12px">
              Contact Us
            </P>
          </Box>

          <Box margin="20px">
            <P sec color="white" fs="12px" pad="20px 0">
              <b>HELP CENTER</b>
            </P>
            <P sec color="white" fs="12px">
              Why us?
            </P>
            <P sec color="white" fs="12px" pad="10px 0">
              FAQs
            </P>
          </Box>

          <Box margin="20px">
            <P sec color="white" fs="12px" pad="20px 0">
              <b>CONTACT</b>
            </P>
            <P sec color="white" fs="12px">
              Phone: +234 818 0458 189
            </P>
            <P sec color="white" fs="12px" pad="10px 0">
              Email: admin@rectlabs.com
            </P>
            <P sec color="white" fs="12px">
              Location: Lagos, Nigeria
            </P>
          </Box>

          <Box margin="20px">
            <P sec color="white" fs="12px" pad="20px 0">
              <b>STAY IN TOUCH</b>
            </P>
            <a
              href="https://www.linkedin.com/company/recthubafrica/"
              target="_blank"
              rel="noreferrer"
            >
              <P sec color="white" fs="12px">
                LinkedIn
              </P>
            </a>
            <a
              href="https://twitter.com/recthubafrica"
              target="_blank"
              rel="noreferrer"
            >
              <P sec color="white" fs="12px" pad="10px 0">
                Twitter
              </P>
            </a>
            <a
              href="https://instagram.com/recthubafrica"
              target="_blank"
              rel="noreferrer"
            >
              <P sec color="white" fs="12px">
                Instagram
              </P>
            </a>
          </Box>
        </Grid>
      </Box>
      <div style={{background: '#121212'}}>
        <FooterLine/>
      <Box align="center">
        <P aiHeroColor="#fff" pad="30px 0">&copy; 2023 All rights reserved</P>
      </Box>
      </div>
    </div>
  );
};

export default Footer;
