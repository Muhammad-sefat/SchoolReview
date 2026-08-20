import { ScrollRestoration } from "react-router-dom";
import AboutusBanner from "../../components/site-components/aboutus/AboutusBanner";
import AboutusVisionAndMission from "../../components/site-components/aboutus/AboutusVisionAndMission";
import AboutusEducationRole from "../../components/site-components/aboutus/AboutusEducationRole";
import AboutusBelieve from "../../components/site-components/aboutus/AboutusBelieve";

function AboutUs() {
  return (
    <>
      <ScrollRestoration />
      <AboutusBanner />
      <AboutusVisionAndMission />
      <AboutusEducationRole />
      <AboutusBelieve />
    </>
  );
}

export default AboutUs;
