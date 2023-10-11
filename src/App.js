import React, {lazy, Suspense, useCallback, useEffect, useState} from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/home";
import ScrollToTop from "./Comp/ScrollToTop";
import Loader from "./Comp/loader";
import AnimationPage from "./pages/animationpage";

const Academy = lazy(() => import("./pages/academy"))
const About = lazy(() => import("./pages/about"))
const Service = lazy(() => import("./pages/service"))
const ApplicationForBeginnerIntermediate = lazy(() => import("./pages/application_beginner_intermediate"))
const ApplicationForAdvanced = lazy(() => import("./pages/application_for_advanced"))
const AiTrack = lazy(() => import("./pages/aitrack"))
const MachineLearningTrack = lazy(() => import("./pages/mltrack"))
const DataEngineeringTrack = lazy(() => import("./pages/detrack"))
const DataScienceTrack = lazy(() => import("./pages/dstrack"))




const theme = {
  breakpoints: {
    xxl: "1280px",
    xl: "1150px",
    lg: "1024px",
    md: "768px",
    sm: "640px",
    mobile: "415px",
  },
};

function App() {
  const [showAnimation, setShowAnimation] = useState(true);



  const switchToHome = useCallback(() => {
    setShowAnimation(true);

    setTimeout(() => {
      setShowAnimation(false);
    }, 4000);
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {showAnimation ? (
                <Route path="/" element={<AnimationPage />} />
            ) : (
                <Route path="/" element={<Home onNavClick={switchToHome}/>} />
            )}
            <Route path="/academy" element={<Academy />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/aitrack" element={<AiTrack />} />
            <Route path="/mltrack" element={<MachineLearningTrack />} />
            <Route path="/detrack" element={<DataEngineeringTrack />} />
            <Route path="/dstrack" element={<DataScienceTrack />} />
            <Route path="/application_beginner_intermediate" element={<ApplicationForBeginnerIntermediate />} />
            <Route path="/application_for_advanced" element={<ApplicationForAdvanced />} />
          </Routes>
        </BrowserRouter>
      </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
