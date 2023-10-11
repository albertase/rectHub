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
            <P width={'90%'} pad={"0 0 1px 0"} fs={'17px'} lh={'42.69px'} aiHeroColor={'#FCFCFC'}>Our AI Mentorship Academy is designed specifically
              for beginners like you. Our experienced mentors will
              guide you through the basics of AI, helping you understand
              the concepts and build a strong foundation. Whether you
              are a complete beginner or have some basic knowledge, our
              program is tailored to suit your needs. Start your journey
              to becoming an AI expert today with our beginner-friendly
              mentorship program. Enroll now and take the first step
              towards a successful career in Artificial Intelligence.</P> <br/>
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
              Our AI Mentorship Academy is designed specifically
              If you're looking to take your Artificial Intelligence (AI)
              skills to the next level, our AI Academy has the perfect program
              for you. As an intermediate student, you have a solid foundation
              in the basics of AI and are ready to dive deeper into complex concepts
              and applications. Our experienced mentors will guide you through
              hands-on projects and interactive lessons, covering advanced topics
              such as deep learning, computer vision, and natural language processing.
              You will learn how to build AI models, interpret results, and make
              data-driven decisions that can drive business success. Join the AI
              Academy today and take your skills to the next level!</P> <br/>
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
              Our AI Mentorship Academy is designed specifically
              Our academy is the perfect place for you to continue your education and
              refine your skills. Our mentorship program is designed for individuals who
              have a strong foundation in the field and are looking to take their knowledge
              and experience to the next level. Our mentors are industry experts who have a
              wealth of knowledge and experience in AI, and they are committed to providing
              you with the support, guidance, and personalized training you need to succeed.
              Whether you're looking to deepen your understanding of specific AI techniques
              or gain new skills to help you advance in your career, our mentorship program
              will help you achieve your goals. Apply now to join our community of advanced
              AI learners and start pushing the boundaries of what's possible in this exciting
              field.</P> <br/>
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
