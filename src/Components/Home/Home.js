import React from "react";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import BigSlider from "./BigSlider/BigSlider";

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
