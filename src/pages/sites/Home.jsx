import { ScrollRestoration } from "react-router-dom";
import HomeBanner from "../../components/site-components/home/HomeBanner";
import FindSchools from "../../components/site-components/home/FindSchools";
import ShareYourVoice from "../../components/site-components/home/ShareYourVoice";
import PlatformEveryVoice from "../../components/site-components/home/PlatformEveryVoice";
import TrustedByTeachers from "../../components/site-components/home/TrustedByTeachers";
import BuiltSchoolsAndTeachers from "../../components/site-components/home/BuiltSchoolsAndTeachers";
import HowItsWork from "../../components/site-components/home/HowItsWork";

const Home = () => {
  return (
    <>
      <ScrollRestoration />
      <HomeBanner />
      <FindSchools />
      <ShareYourVoice />
      <PlatformEveryVoice />
      <TrustedByTeachers />
      <BuiltSchoolsAndTeachers />
      <HowItsWork />
    </>
  );
};

export default Home;
