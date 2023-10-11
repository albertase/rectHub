import React from "react";
import Flex from "../../Base/flex";
import Box from "../../Base/box";
import {H, P} from "../../Base/text";

const FifthHero = () => {
    return (
        <div>
            <Box bg="#FFFFFF" margin="0 40px" pad="20px 100px" hero>
                <Flex serviceDirection gapy="10px">
                    <Box>
                        <H fs="32px" width="490px"  lh="39.01px" hero serviceWidth>Data Engineering Team</H>
                        <P fs="15px" width="550px" lh="32.5px" pad="28px 0" serviceWidth>
                            Our Data Engineering team offers a variety of services
                            to help organizations leverage their data assets and
                            improve their data infrastructure. Our team of experts
                            specialize in designing, building, and maintaining data
                            pipelines, data lakes, and data warehouses. We work with
                            various technologies such as Hadoop, Spark, and cloud-based
                            solutions like AWS, Azure, and Google Cloud. Our services
                            include data integration, data migration, data governance,
                            data quality, and performance tuning. Whether you need to
                            modernize your existing data infrastructure or build a new
                            one from scratch, our team can help you achieve your goals.
                            We work closely with our clients to understand their
                            business needs and design solutions that are tailored
                            to their specific requirements.
                        </P>
                    </Box>
                    <Box heroImg>
                        <img src="./Images/AtWork5.svg" alt="hero"/>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default FifthHero