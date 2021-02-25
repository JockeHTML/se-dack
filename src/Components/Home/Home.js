import React from "react";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import ExtraSection from "./ExtraSection/ExtraSection";

function Home(props) {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <ExtraSection />
      <SectionThree />
    </div>
  );
}

export default Home;
