import React, { useState } from "react";
import Box from "../Base/box";
import Flex from "../Base/flex";
import { Button } from "../Base/button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';


const Navbar = ({clickNav}) => {
  const location = useLocation();


  const academyRef= <a href="/academy" className={location.pathname === '/academy' ? 'non-active' : 'active'}>Academy</a>
  const aboutRef= <a href="/about" className={location.pathname === '/about' ? 'non-active' : 'active'}>About Us</a>
  return (
    <div>
      <Box pad="10px 40px" bg="white" nav>
        <Flex row>
          <Flex row alignItems="center">
            <Link to="/" >
              <img onClick={clickNav} src="./Images/logo.svg" alt="logo" width="80" />
            </Link>
            <Link to="/">
              <img onClick={clickNav} src="./Images/Recthub.svg" alt="recthub" width="90" />
            </Link>
          </Flex>

          <Box>
            <Link to="/academy">
              <Button nav>{academyRef}</Button>
            </Link>
            <Link to="/about">
              <Button nav margin="20px">
                {aboutRef}
              </Button>
            </Link>
            <Button sec primary>
              <a href="https://calendly.com/elishatofunmi" target="_blank" rel="noreferrer">Talk to us</a>
            </Button>
          </Box>
        </Flex>
      </Box>

      <SmallerNav onClickSmallNav={clickNav}/>
    </div>
  );
};

const SmallerNav = ({onClickSmallNav}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Box pad="20px 40px" bg="white" smallNav>
        <Flex row alignItems="center">
          <Flex row alignItems="center">
            <Link to="/"><img onClick={onClickSmallNav} src="./Images/logo.svg" alt="logo" width="80" /></Link>
            <Link to="/"><img onClick={onClickSmallNav} src="./Images/Recthub.svg" alt="recthub" width="90" /></Link>
          </Flex>

          <Box>
            <Button primary onClick={() => setShowModal(true)}>
              <FontAwesomeIcon icon={faBarsStaggered} />
            </Button>
          </Box>
        </Flex>
      </Box>

      <Box>
        <AnimatePresence>
          {showModal && <SideBar onClickSideNav={onClickSmallNav} setShowModal={setShowModal} />}
        </AnimatePresence>
      </Box>
    </div>
  );
};

const SideBar = ({ setShowModal, onClickSideNav }) => {
  const location = useLocation();
  const academyRef= <a href="/academy" className={location.pathname === '/academy' ? 'non-active' : 'active'}>Academy</a>
  const aboutRef= <a href="/about" className={location.pathname === '/about' ? 'non-active' : 'active'}>About Us</a>
  const modalVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.5 },
    },
    close: {
      x: "100vw",
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={modalVariant}
      animate="visible"
      initial="hidden"
      exit="close"
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        zIndex: "1",
        top: "0px",
        backgroundColor: "white",
      }}
    >
      <Box pad="20px">
        <Flex alignItems="center" sidebar>
          <Flex row alignItems="center">
            <Link to="/"><img onClick={onClickSideNav} src="./Images/logo.svg" alt="logo" width="80" /></Link>
            <Link to="/"><img onClick={onClickSideNav} src="./Images/Recthub.svg" alt="recthub" width="90" /></Link>
          </Flex>

          <Box>
            <Button primary onClick={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </Box>
        </Flex>

        <Box>
          <Link to="/academy" style={{ textDecoration: "none" }}>
            <Button nav>{academyRef}</Button>
          </Link>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button nav margin="20px">
              {aboutRef}
            </Button>
          </Link>

          <a href="https://calendly.com/elishatofunmi" target="_blank" rel="noreferrer">
          <Button primary width="100%">
          Talk to us
          </Button>
          </a>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Navbar;
