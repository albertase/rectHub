import React, { useState } from "react";
import Box from "../../Base/box";
import { H, P } from "../../Base/text";
import { Grid } from "../../Base/grid";
import Flex from "../../Base/flex";
import { motion, AnimatePresence } from "framer-motion";

const Business = () => {
  const [discovery, setDiscovery] = useState(true);
  const [technology, setTechnology] = useState(true);
  const [automation, setAutomation] = useState(true);
  const [codeQuality, setCodeQuality] = useState(true);
  const [privacy, setPrivacy] = useState(true);

  const boxVariant = {
    hidden: {
      y: 100,
      opacity: 0,
    },

    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },

    close: {
      y: -500,
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  const textVariant = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
    close: {
      y: 100,
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  const businessVariant = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
    hidden: {
      y: -100,
      opacity: 0,
    },
    close: {
      y: -100,
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <div>
      <Box pad="50px 100px" business bg="#F3F4F6">
        <Box>
          <H align="center" pad="50px 0" fs="35px">
            Why Businesses choose Recthub
          </H>
        </Box>

        <Grid gtc="repeat(3, 1fr)" gap="60px" business>
          <Box
            card
            height={discovery ? "250px" : "auto"}
            pad="40px 0"
            onMouseEnter={() => setDiscovery(false)}
            onMouseLeave={() => setDiscovery(true)}
            // backg={
            //   discovery
            //     ? "white"
            //     : "linear-gradient(51.85deg, #6BE1BA -27.45%, #6E54EF 94.15%)"
            // }
          >
            <AnimatePresence>
              {discovery ? (
                <div>
                  <motion.img
                    src="./Images/discovery.svg"
                    alt="discovery and design"
                    variants={businessVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                  />
                  <H
                    pad="60px 0"
                    fs="28px"
                    width="186px"
                    margin="auto"
                    as={motion.h1}
                    initial="hidden"
                    variants={businessVariant}
                    animate="visible"
                    exit="close"
                  >
                    Discovery and Design
                  </H>
                </div>
              ) : (
                <Box>
                  <H
                    sec
                    color="white"
                    pad="10px"
                    variants={boxVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                    as={motion.h1}
                  >
                    Discovery and Design
                  </H>
                  <P
                    sec
                    color="white"
                    fs="17px"
                    lh="251.1%"
                    width="345px"
                    margin="auto"
                    as={motion.p}
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                    business
                  >
                    Prior to commencing any coding, we carefully evaluate the
                    issue and formulate the solution
                  </P>
                </Box>
              )}
            </AnimatePresence>
          </Box>

          <Box
            card
            pad="40px 0"
            onMouseEnter={() => setTechnology(false)}
            onMouseLeave={() => setTechnology(true)}
            backg={
              technology
                ? "white"
                : "linear-gradient(51.85deg, #6BE1BA -27.45%, #6E54EF 94.15%)"
            }
          >
            <AnimatePresence>
              {technology ? (
                <div>
                  <motion.img
                    src="./Images/bestTech.svg"
                    alt="best technology"
                    variants={businessVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                  />
                  <H
                    pad="60px"
                    fs="28px"
                    width="186px"
                    margin="auto"
                    as={motion.h1}
                    initial="hidden"
                    variants={businessVariant}
                    animate="visible"
                    exit="close"
                  >
                    Best Technologies
                  </H>
                </div>
              ) : (
                <Box>
                  <H
                    sec
                    color="white"
                    pad="10px"
                    variants={boxVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                    as={motion.h1}
                  >
                    Best Technologies
                  </H>
                  <P
                    sec
                    color="white"
                    fs="17px"
                    lh="251.1%"
                    width="345px"
                    margin="auto"
                    as={motion.p}
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                    business
                  >
                    We swiflty replace outdated technologies with the most
                    suitable options, ensuring we are always at the forefront of
                    innovations
                  </P>
                </Box>
              )}
            </AnimatePresence>
          </Box>

          <Box
            card
            pad="40px 0"
            onMouseEnter={() => setAutomation(false)}
            onMouseLeave={() => setAutomation(true)}
            backg={
              automation
                ? "white"
                : "linear-gradient(51.85deg, #6BE1BA -27.45%, #6E54EF 94.15%)"
            }
          >
            <AnimatePresence>
              {automation ? (
                <div>
                  <motion.img
                    src="./Images/automation.svg"
                    alt="automation"
                    variants={businessVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                  />
                  <H
                    pad="60px"
                    fs="28px"
                    width="224px"
                    margin="auto"
                    as={motion.h1}
                    initial="hidden"
                    variants={businessVariant}
                    animate="visible"
                    exit="close"
                  >
                    Automation
                  </H>
                </div>
              ) : (
                <Box>
                  <H
                    sec
                    color="white"
                    pad="10px"
                    variants={boxVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                    as={motion.h1}
                  >
                    Automation
                  </H>
                  <P
                    sec
                    color="white"
                    fs="17px"
                    lh="251.1%"
                    width="345px"
                    margin="auto"
                    as={motion.p}
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                    business
                  >
                    We avoid monotonous tasks by automating them instead.
                  </P>
                </Box>
              )}
            </AnimatePresence>
          </Box>
        </Grid>

        <Flex card alignItems="flex-start">
          <Box
            card
            flexCard
            width="30%"
            margin="100px 50px"
            height="250px"
            pad="40px 0"
            onMouseEnter={() => setCodeQuality(false)}
            onMouseLeave={() => setCodeQuality(true)}
            backg={
              codeQuality
                ? "white"
                : "linear-gradient(51.85deg, #6BE1BA -27.45%, #6E54EF 94.15%)"
            }
          >
            <AnimatePresence>
              {codeQuality ? (
                <div>
                  <motion.img
                    src="./Images/codeQuality.svg"
                    alt="code quality"
                    variants={businessVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                  />
                  <H
                    pad="60px 0"
                    fs="28px"
                    width="224px"
                    margin="auto"
                    as={motion.h1}
                    initial="hidden"
                    variants={businessVariant}
                    animate="visible"
                    exit="close"
                  >
                    Code Quality
                  </H>
                </div>
              ) : (
                <Box>
                  <H
                    sec
                    color="white"
                    pad="10px"
                    variants={boxVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                    as={motion.h1}
                  >
                    Code Quality
                  </H>
                  <P
                    sec
                    color="white"
                    fs="17px"
                    lh="251.1%"
                    width="345px"
                    margin="auto"
                    as={motion.p}
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                    business
                  >
                    We prioritize writing organized and well-structured code.
                  </P>
                </Box>
              )}
            </AnimatePresence>
          </Box>

          <Box
            card
            flexCard
            width="30%"
            margin="100px 50px"
            // height={privacy ? "250px" : "auto"}
            height="250px"
            pad="40px 0"
            onMouseEnter={() => setPrivacy(false)}
            onMouseLeave={() => setPrivacy(true)}
            backg={
              privacy
                ? "white"
                : "linear-gradient(51.85deg, #6BE1BA -27.45%, #6E54EF 94.15%)"
            }
          >
            <AnimatePresence>
              {privacy ? (
                <div>
                  <motion.img
                    src="./Images/security.svg"
                    alt="security and privacy"
                    variants={businessVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                  />
                  <H
                    pad="60px 0"
                    fs="28px"
                    width="195px"
                    margin="auto"
                    as={motion.h1}
                    initial="hidden"
                    variants={businessVariant}
                    animate="visible"
                    exit="close"
                  >
                    Security and Privacy
                  </H>
                </div>
              ) : (
                <Box>
                  <H
                    sec
                    color="white"
                    pad="10px"
                    variants={boxVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                    as={motion.h1}
                  >
                    Security and Privacy
                  </H>
                  <P
                    sec
                    color="white"
                    fs="17px"
                    lh="251.1%"
                    width="345px"
                    margin="auto"
                    as={motion.p}
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                    exit="close"
                    business
                  >
                    When creating our products and tools, cybersecurity and
                    privacy are significant factors that we take into account.
                  </P>
                </Box>
              )}
            </AnimatePresence>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Business;
