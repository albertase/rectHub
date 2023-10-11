import React, { useState } from "react";
import Box from "../../Base/box";
import Flex from "../../Base/flex";
import { Button } from "../../Base/button";
import { P, H } from "../../Base/text";
import { Link } from 'react-router-dom';

const Selection = () => {
  const [choice, setChoice] = useState({
    ai: true,
    ml: false,
    de: false,
    ds: false,
  });

  return (
    <div>
      <Box pad="0 140px" select>
        <Button
          onClick={() => setChoice({ ai: true })}
          select
          bg={choice.ai ? "#6be1ba" : "transparent"}
          selectBtn
        >
          Artificial Intelligence
        </Button>
        <Button
          onClick={() => setChoice({ ml: true })}
          select
          bg={choice.ml ? "#6be1ba" : "transparent"}
          margin="0 20px"
          selectBtn
        >
          Machine Learning
        </Button>
        <Button
          onClick={() => setChoice({ de: true })}
          select
          bg={choice.de ? "#6be1ba" : "transparent"}
          selectBtn
        >
          Data Engineering
        </Button>
        <Button
          onClick={() => setChoice({ ds: true })}
          select
          bg={choice.ds ? "#6be1ba" : "transparent"}
          margin="0 20px"
          selectBtn
        >
          Data Science
        </Button>
      </Box>

      <Box>
        {choice.ai && <AI />}
        {choice.ml && <ML />}
        {choice.de && <DE />}
        {choice.ds && <DS />}
      </Box>
    </div>
  );
};

const AI = () => {
  return (
    <div>
      <Box>
        <Flex alignItems="center">
          <Box pad="50px 140px" hero>
            <H fs="50px" acquire>
              Artificial Intelligence
            </H>
            <P width="500px" pad="20px 0">
              The track covers a wide range of topics, including deep learning,
              natural language processing, and computer vision. Students will
              learn to develop and train AI models, as well as understand the
              ethical and societal implications of AI technology. The track also
              include hands-on projects and real-world case studies to apply the
              concepts learned in class. Upon completion of the track, students
              will have a solid understanding of AI and its applications, and be
              prepared for careers in data science, computer engineering, and
              other related fields.
            </P>
            <a
              href="#"
            >
              <Link to="/aitrack">
              <Button primary>Enroll Now</Button>
              </Link>
            </a>
          </Box>

          <Box>
            <img src="./Images/ai.AVIF" alt="ai" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

const ML = () => {
  return (
    <div>
      <Box>
        <Flex alignItems="center">
          <Box pad="50px 140px" hero>
            <H fs="50px" acquire>
              Machine Learning
            </H>
            <P width="500px" pad="20px 0">
              The track covers the fundamentals of statistical learning,
              supervised and unsupervised learning, and provides hands-on
              experience with industry-standard tools and technologies. Students
              will learn how to collect, clean, and preprocess data, and how to
              train and evaluate models. They will also learn how to apply these
              techniques to real-world problems in areas such as image
              recognition, natural language processing, and prediction.
            </P>
            <a
              href=""
            >
              <Link to="/mltrack">
              <Button primary>Enroll Now</Button>
                </Link>
            </a>
          </Box>

          <Box>
            <img src="./Images/Machine learning.AVIF" alt="machine learning" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

const DE = () => {
  return (
    <div>
      <Box>
        <Flex alignItems="center">
          <Box pad="50px 140px" hero>
            <H fs="50px" acquire>
              Data Engineering
            </H>
            <P width="500px" pad="20px 0">
              This track will cover the basics of data warehousing, data
              processing, and data pipeline management. Students will learn how
              to use various tools and technologies, such as Apache Hadoop,
              Apache Spark, and Apache Kafka, to build and optimize data
              pipelines. The track will also include hands-on projects that will
              give students the opportunity to apply the concepts they have
              learned to real-world scenarios. By the end of the track, students
              will have the skills and knowledge needed to design and implement
              data systems for large-scale data processing and analysis.
            </P>
            <a
              href=""
            >
              <Link to="/detrack">
              <Button primary>Enroll Now</Button>
              </Link>
            </a>
          </Box>

          <Box>
            <img src="./Images/Server data.AVIF" alt="data engineering" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

const DS = () => {
  return (
    <div>
      <Box>
        <Flex alignItems="center">
          <Box pad="50px 140px" hero>
            <H fs="50px" acquire>
              Data Science
            </H>
            <P width="500px" pad="20px 0">
              This track covers topics such as statistics, programming, data
              visualization, machine learning, and big data management. Students
              learn how to analyze and interpret complex data sets, build
              predictive models, and communicate their findings to a
              non-technical audience. The track is designed to provide hands-on
              experience through projects and case studies, preparing students
              for careers in industries such as finance, healthcare, marketing,
              and technology.
            </P>
            <a
              href=""
            >
              <Link to="/dstrack">
              <Button primary>Enroll Now</Button>
              </Link>
            </a>
          </Box>

          <Box>
            <img src="./Images/Marketing girl.AVIF" alt="data science" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Selection;
