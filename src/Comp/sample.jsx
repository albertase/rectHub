import React from "react";
import Slider from "react-slick";
import { H, P } from "../Base/text";
import Box from "../Base/box";
import Flex from "../Base/flex";
import { SliderDot } from "../Base/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sample = () => {
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
    // dotsClass: "slick-dots bull",
    //     customPaging: (index) => {
    //       return (
    //         <div style={{ position: "absolute", top: "0px", opacity:"0" }}>
    //           {index}
    //         </div>
    //       );
    //     },
    //     appendDots: (dots) => {
    //       return (
    //         <SliderDot style={{position:"relative"}}>
    //           <p style={{display:'flex'}}>{dots}</p>
    //         </SliderDot>
    //       )
    //     },
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
        <H align="center" pad="20px 0">Proud to collaborate with diverse clients</H>
        <Slider {...settings}>
          <div>
          <Box pad="50px 40px" margin="0" border>
            <Flex sec row alignItems="center" pad="">
              <img src="./Images/Ellipse197.svg" alt="profile" />
              <Box pad="0px 25px">
                <P>John Adejubi</P>
                <P>CTO at XYZ Inc.</P>
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
                <img src="./Images/Ellipse197.svg" alt="profile" />
                <Box pad="0px 25px">
                  <P>John Adejubi</P>
                  <P>CTO at XYZ Inc.</P>
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
                <img src="./Images/Ellipse197.svg" alt="profile" />
                <Box pad="0px 25px">
                  <P>John Adejubi</P>
                  <P>CTO at XYZ Inc.</P>
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
                <img src="./Images/Ellipse197.svg" alt="profile" />
                <Box pad="0px 25px">
                  <P>John Adejubi</P>
                  <P>CTO at XYZ Inc.</P>
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
                <img src="./Images/Ellipse197.svg" alt="profile" />
                <Box pad="0px 25px">
                  <P>John Adejubi</P>
                  <P>CTO at XYZ Inc.</P>
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
                <img src="./Images/Ellipse197.svg" alt="profile" />
                <Box pad="0px 25px">
                  <P>John Adejubi</P>
                  <P>CTO at XYZ Inc.</P>
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
        </Slider>

        {/* <Box> */}
          {/* <H>HOw far</H>
          <P>jjsjsk</P>

        <Slider {...settings}>
          <div>
            <Box pad="50px 40px" border margin="0">
              <Flex sec row alignItems="center">
                <img src="./Images/Ellipse197.svg" alt="profile" />
                <p>JSOSK</p>
              </Flex>
               <H  width="100%" fs="24px" lh="242.9%" collatext>"We were struggling to keep up with the ever-growing amount of
                data and needed a solution. The data team provided by Recthub
                transformed our workflow and made analyzing data a breeze."</H>
            </Box>
          </div>
          <div>
            <Box pad="50px 40px" border>
          <Flex sec row alignItems="center">
                <img src="./Images/Ellipse197.svg" alt="profile" />
                <p>JSOSK</p>
              </Flex>
               <H width="100%" fs="24px" lh="242.9%" collatext>"We were struggling to keep up with the ever-growing amount of
                data and needed a solution. The data team provided by Recthub
                transformed our workflow and made analyzing data a breeze."</H>
            </Box>
          </div>
          <div>
            <Box pad="50px 40px" border>
          <Flex sec row alignItems="center">
                <img src="./Images/Ellipse197.svg" alt="profile" />
                <p>JSOSK</p>
              </Flex>
               <H width="100%" fs="24px" lh="242.9%" collatext>"We were struggling to keep up with the ever-growing amount of
                data and needed a solution. The data team provided by Recthub
                transformed our workflow and made analyzing data a breeze."</H>
            </Box>
          </div>
          <div>
            <Box pad="50px 40px" border>
          <Flex sec row alignItems="center">
                <img src="./Images/Ellipse197.svg" alt="profile" />
                <p>JSOSK</p>
              </Flex>
               <H width="100%" fs="24px" lh="242.9%" collatext>"We were struggling to keep up with the ever-growing amount of
                data and needed a solution. The data team provided by Recthub
                transformed our workflow and made analyzing data a breeze."</H>
            </Box>
          </div>
        </Slider> */}
        {/* </Box> */}
    </div>
  );
};

export default Sample;
