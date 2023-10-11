import React from "react";
import Box from "../../Base/box";
import Flex from "../../Base/flex";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { H, P } from "../../Base/text";
import { Image } from "../../Base/image";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div>
      <H pad="20px 140px" fs="50px" review>Our Testimonials</H>

      <Slider {...settings}>
        <Box mt="40px" sec margin="40px 0">
          <Box bg="white" pad="20px" align="center" br="20px" sec review>
            <Image
              src="./Images/Ellipse1.svg"
              alt="review"
              primary
              margin="auto"
              mt="-50px"
            />
            <Flex star>
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
            </Flex>
            <Box>
              <P pad="20px 0" fs="16px">
                I joined Recthub as a mid-level AI Engineer, but I got better
                using their recommended courses and now I just got hired on the
                platform.
              </P>
            </Box>

            <Box bt="1px black solid" pad="10px 0">
              <P><b>Chukwu Edward</b></P>
            </Box>
          </Box>
        </Box>
        
        <Box mt="40px" sec>
          <Box bg="white" pad="20px" align="center" br="20px" sec review>
            <Image
              src="./Images/Ellipse187.svg"
              alt="review"
              primary
              margin="auto"
              mt="-50px"
            />
            <Flex star>
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
            </Flex>
            <Box>
              <P pad="20px 0" fs="16px">
                I joined Recthub as a mid-level AI Engineer, but I got better
                using their recommended courses and now I just got hired on the
                platform.
              </P>
            </Box>

            <Box bt="1px black solid" pad="10px 0">
              <P><b>Ali Musa</b></P>
            </Box>
          </Box>
        </Box>

        <Box mt="40px" sec>
          <Box bg="white" pad="20px" align="center" br="20px" sec review>
            <Image
              src="./Images/Ellipse287.svg"
              alt="review"
              primary
              margin="auto"
              mt="-50px"
            />
            <Flex star>
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
            </Flex>
            <Box>
              <P pad="20px 0" fs="16px">
                I joined Recthub as a mid-level AI Engineer, but I got better
                using their recommended courses and now I just got hired on the
                platform.
              </P>
            </Box>

            <Box bt="1px black solid" pad="10px 0">
              <P><b>Jordan Simeon</b></P>
            </Box>
          </Box>
        </Box>

        <Box mt="40px" sec>
          <Box bg="white" pad="20px" align="center" br="20px" sec review>
            <Image
              src="./Images/Ellipse1.svg"
              alt="review"
              primary
              margin="auto"
              mt="-50px"
            />
            <Flex star>
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
            </Flex>
            <Box>
              <P pad="20px 0" fs="16px">
                I joined Recthub as a mid-level AI Engineer, but I got better
                using their recommended courses and now I just got hired on the
                platform.
              </P>
            </Box>

            <Box bt="1px black solid" pad="10px 0">
              <P><b>Chukwu Edward</b></P>
            </Box>
          </Box>
        </Box>

        <Box mt="40px" sec>
          <Box bg="white" pad="20px" align="center" br="20px" sec review>
            <Image
              src="./Images/Ellipse1.svg"
              alt="review"
              primary
              margin="auto"
              mt="-50px"
            />
            <Flex star row>
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
              <img src="./Images/star.svg" alt="star" />
            </Flex>
            <Box>
              <P pad="20px 0" fs="16px">
                I joined Recthub as a mid-level AI Engineer, but I got better
                using their recommended courses and now I just got hired on the
                platform.
              </P>
            </Box>

            <Box bt="1px black solid" pad="10px 0">
              <P><b>Chukwu Edward</b></P>
            </Box>
          </Box>
        </Box>

      </Slider>
    </div>
  );
};

export default Testimonial;
