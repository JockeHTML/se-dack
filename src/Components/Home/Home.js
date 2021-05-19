import React from "react";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import BigSlider from "./BigSlider/BigSlider";
import Washing from "../Washing/Washing";

function Home(props) {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <BigSlider />
      <SectionThree />
    </div>
  );
}

export default Home;
