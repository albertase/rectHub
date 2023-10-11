import React, { useState } from "react";
import Box from "../../Base/box";
import Flex from "../../Base/flex";
import { Button } from "../../Base/button";
import { P, H } from "../../Base/text";
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const Buttons = styled.button`
padding: 12px 45px;
  cursor: pointer;

  ${props => props.select && css`
    background-color: ${props => props.bg};
    transition: 1s;
  `}
  
  &:hover {
    background: #6BE1BA;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    ${props => props.select && css`
      font-size: 12px;
      padding: 15px 18px;
    `}
    
  } 
`;
const Selection = () => {
  const [choice, setChoice] = useState({
    ai: true,
    ml: false,
    de: false,
    ds: false,
  });


  return (
    <div>
      <Flex aiHeroDirection pad={'0px 0 50px 0'}>
        <Buttons
            onClick={() => setChoice({ ai: true })}
            select
            bg={choice.ai ? "#6be1ba" : "transparent"}
        >Beginner</Buttons>
        <Buttons
            onClick={() => setChoice({ ml: true })}
            select
            bg={choice.ml ? "#6be1ba" : "transparent"}
        >Intermediate</Buttons>
        <Buttons
            onClick={() => setChoice({ de: true })}
            select
            bg={choice.de ? "#6be1ba" : "transparent"}
        >Advanced</Buttons>
      </Flex>

      <Box>
        {choice.ai && <AI />}
        {choice.ml && <ML />}
        {choice.de && <DE />}
        {/*{choice.ds && <DS />}*/}
      </Box>
    </div>
  );
};

const AI = () => {
  const aiVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.9 },
    },
    close: {
      x: "100vw",
      transition: { duration: 0.9 },
    },
  };
  return (
      <motion.div
          variants={aiVariant}
          animate="visible"
          initial="hidden"
          exit="close"

      >
    <div>
      <Box bg={'#121212'} width={'100%'} backg={'#121212'} pad={'30px 20px 0px 20px'}>
        <Flex aiHero>
          <H aiHeroColor={'#FCFCFC'} lh={'48.76px'} fs={'40px'}>Beginner</H>
          <Box align="left" width="100%" pad={"0px 80px 90px"} aiHero>
            <P width={'90%'} pad={"0 0 1px 0"} fs={'17px'} lh={'42.69px'} aiHeroColor={'#FCFCFC'}>
              Our AI Mentorship Academy is designed specifically
              Our mentorship program is designed specifically for beginners like
              you who are looking to start a career in this rapidly growing field.
              Whether you are just starting out, or looking to change careers,
              our expert mentors will guide you every step of the way. With hands-on
              training and personalized support, you'll learn the skills you need to
              succeed in data engineering and get the knowledge and experience you need
              to start building your future. So why wait? Enroll in our beginner
              mentorship program today and start your journey towards a successful
              and fulfilling career in data engineering!</P> <br/>
            <a
                href=""
            >
              <Link to="/application_beginner_intermediate">
              <Button primary margin="20px 0">
                Apply now
              </Button>
              </Link>
            </a>
          </Box>

        </Flex>
      </Box>
    </div>
      </motion.div>
  );
};

const ML = () => {
  const mlVariant = {
    hidden: {
      opacity: 0,
      rotateY: 90,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.9 },
    },
    close: {
      opacity: 0,
      rotateY: 90,
      transition: { duration: 0.9 },
    },
  };
  return (
      <motion.div
          variants={mlVariant}
          animate="visible"
          initial="hidden"
          exit="close"

      >
    <div>
      <Box bg={'#121212'} width={'100%'} backg={'#121212'} pad={'30px 20px 0px 20px'}>
        <Flex aiHero>
          <H aiHeroColor={'#FCFCFC'} lh={'48.76px'} fs={'40px'}>Intermediate</H>
          <Box align="left" width="100%" pad={"0px 80px 90px"} aiHero>
            <P width={'90%'} pad={"0 0 1px 0"} fs={'17px'} lh={'42.69px'} aiHeroColor={'#FCFCFC'}>
              Are you looking to take your data engineering skills to the
              next level? Our mentorship program is designed specifically for
              intermediate learners who want to master the art of data engineering.
              Our expert mentors have years of experience working with some of the
              largest data systems and are passionate about sharing their knowledge
              and skills with you. With our program, you'll receive personalized
              guidance, hands-on projects, and access to cutting-edge tools and
              techniques. Our mentorship program has got you covered. Apply today
              and start your journey to becoming a world-class data engineer.</P> <br/>
            <a
                href=""
            >
              <Link to="/application_beginner_intermediate">
              <Button primary margin="20px 0">
                Apply now
              </Button>
              </Link>
            </a>
          </Box>

        </Flex>
      </Box>
    </div>
      </motion.div>
  );
};

const DE = () => {
  const deVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.9 },
    },
    close: {
      x: "-100vw",
      transition: { duration: 0.9 },
    },
  };
  return (
      <motion.div
          variants={deVariant}
          animate="visible"
          initial="hidden"
          exit="close"

      >
    <div>
      <Box bg={'#121212'} width={'100%'} backg={'#121212'} pad={'30px 20px 0px 20px'}>
        <Flex aiHero>
          <H aiHeroColor={'#FCFCFC'} lh={'48.76px'} fs={'40px'}>Advanced</H>
          <Box align="left" width="100%" pad={"0px 80px 90px"} aiHero>
            <P width={'90%'} pad={"0 0 1px 0"} fs={'17px'} lh={'42.69px'} aiHeroColor={'#FCFCFC'}>
              As an advanced data engineer, you have a solid understanding of big data technologies,
              database systems, and data warehousing. However, staying ahead in a constantly evolving
              field requires ongoing learning and mentorship. Our program is designed specifically to
              help you take your skills to the next level and achieve your career goals.
              In this program, you'll work closely with experienced mentors who have years
              of industry experience and will guide you through complex real-world projects.
              You'll have the opportunity to apply your knowledge, learn new techniques, and
              get hands-on experience with cutting-edge technologies. Ready to elevate your
              data engineering career, apply today!</P> <br/>
            <a
                href=""
            >
              <Link to="/application_for_advanced">
              <Button primary margin="20px 0">
                Apply now
              </Button>
              </Link>
            </a>
          </Box>

        </Flex>
      </Box>
    </div>
      </motion.div>
  );
};

export default Selection;
