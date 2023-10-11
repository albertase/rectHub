import React from "react";
import Box from "../../Base/box";
import Flex from "../../Base/flex";
import { H, P } from "../../Base/text";
import { SliderDot } from "../../Base/slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Collaborate = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    dotsClass: "slick-dots bull",
    customPaging: (index) => {
      return (
        <div style={{ position: "absolute", top: "0px", opacity: "0" }}>
          {index}
        </div>
      );
    },
    appendDots: (dots) => {
      return (
        <SliderDot style={{ position: "relative" }}>
          <p style={{ display: "flex" }}>{dots}</p>
        </SliderDot>
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Box margin="50px 20px" colla>
        <H align="center" pad="20px 0">
          Proud to collaborate with diverse clients
        </H>

        <Slider {...settings}>
          <div>
            <Box pad="50px 40px" margin="0" border>
              <Flex sec row alignItems="center" pad="">
                <img src="./Images/Ellipse197.svg" alt="profile" />
                <Box pad="0px 25px">
                  <P pad="10px 0" fs="20px">John Adejubi</P>
                  <P fs="12px" sec color="#918E8E">CTO at XYZ Inc.</P>
                </Box>
              </Flex>

              <Box pad="20px 0">
                <P width="100%" fs="24px" lh="242.9%" collatext>
                  "We were struggling to keep up with the ever-growing amount of
                  data and needed a solution. The data team provided by Recthub
                  transformed our workflow and made analyzing data a breeze."
                </P>
              </Box>
            </Box>
          </div>

          <div>
            <Box pad="50px 40px" border>
              <Flex sec row alignItems="center">
                <img src="./Images/review2.svg" alt="profile" />
                <Box pad="0px 25px">
                  <P pad="10px 0" fs="20px">Shangay Huinus</P>
                  <P fs="12px" sec color="#918E8E">CEO at ABC Corp.</P>
                </Box>
              </Flex>

              <Box pad="20px 0">
                <P width="100%" fs="24px" lh="242.9%" collatext>
                  Our business intelligence was lacking until we partnered with
                  Recthub Their data team brought fresh insights and helped us
                  make data-driven decisions that boosted our revenue."
                </P>
              </Box>
            </Box>
          </div>

          <div>
            <Box pad="50px 40px" border>
              <Flex sec row alignItems="center">
                <img src="./Images/review3.svg" alt="profile" />
                <Box pad="0px 25px">
                  <P pad="10px 0" fs="20px">Shola Adetunji</P>
                  <P fs="12px" sec color="#918E8E">Founder at MNO Enterprises</P>
                </Box>
              </Flex>

              <Box pad="20px 0">
                <P width="100%" fs="24px" lh="242.9%" collatext>
                  "As a startup, we had limited resources and needed to make the
                  most of our data. Recthub data team provided the expertise and
                  support we needed to make data a valuable asset for our
                  business."
                </P>
              </Box>
            </Box>
          </div>

          <div>
            <Box pad="50px 40px" border>
              <Flex sec row alignItems="center">
                <img src="./Images/review4.svg" alt="profile" />
                <Box pad="0px 25px">
                  <P pad="10px 0" fs="20px">Patrick Silas</P>
                  <P fs="12px" sec color="#918E8E">CEO New Wave Technologies</P>
                </Box>
              </Flex>

              <Box pad="20px 0">
                <P width="100%" fs="24px" lh="242.9%" collatext>
                  "The data team from Recthub exceeded our expectations. They
                  not only solved our data problems but also provided ongoing
                  support and training to help us continue to grow our
                  business."
                </P>
              </Box>
            </Box>
          </div>
        </Slider>
      </Box>
    </div>
  );
};

export default Collaborate;
