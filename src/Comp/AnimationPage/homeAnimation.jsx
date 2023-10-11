import React, { useState } from "react";
import Box from "../../Base/box";
import Flex from "../../Base/flex";
import { motion } from "framer-motion";

const deVariant = {
    hidden: {
        opacity: 0,
        scale: 17,
    },
    enlarged: {
        opacity: 1,
        scale: 10,
        transition: { duration: 3.0 },
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2 },
    },
    close: {
        opacity: 0,
        scale: 0.1,
        transition: { duration: 1.2 },
    },
};

const aiVariant = {
    hidden: {
        x: "100vw",
    },
    visible: {
        x: 0,
        transition: { duration: 2.0 },
    },
    close: {
        x: "100vw",
        transition: { duration: 0.9 },
    },
};

const HomeAnimation = () => {
    const [isLogoEnlarged, setIsLogoEnlarged] = useState(false);

    const handleButtonClick = () => {
        setIsLogoEnlarged(true);
    };

    return (
        <div>
            <Box bg="white" width="100vw" height="100vh" pad="400px 0" homeAnimation>
                <Flex alignItems="center" card wraps="nowrap">
                    <motion.div
                        variants={deVariant}
                        initial="hidden"
                        animate={isLogoEnlarged ? "enlarged" : "visible"}
                        exit="close"
                        onAnimationComplete={() => {
                            setIsLogoEnlarged(false); // Reset the isLogoEnlarged state once the animation completes
                        }}
                    >
                        <Box>
                            <img src="./Images/logo.svg" width="150px" alt="logo" />
                        </Box>
                    </motion.div>
                    <motion.div
                        variants={aiVariant}
                        animate={isLogoEnlarged ? "hidden" : "visible"} // Only animate the second image if the first image has finished zooming
                        initial="hidden"
                        exit="close"
                        transition={{ delay: 3.9 }} // Add a delay to start the second image animation after the first image finishes
                    >
                        <Box>
                            <img src="./Images/Recthub.svg" width="300px" alt="Recthub" />
                        </Box>
                    </motion.div>
                </Flex>
            </Box>
        </div>
    );
};

export default HomeAnimation;