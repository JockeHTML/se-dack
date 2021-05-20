import React from "react";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import BigSlider from "./BigSlider/BigSlider";
import SectionFour from "./SectionFour/SectionFour";
import SmallSlider from "./SmallSlider/SmallSlider";

function Home(props) {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <BigSlider />
      <SectionThree />
      <SmallSlider />
      <SectionFour />
    </div>
  );
}

export default Home;
