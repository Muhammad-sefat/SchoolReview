import { ScrollRestoration } from "react-router-dom";
import SchoolsBanner from "../../components/site-components/forschools/SchoolsBanner";
import YourSchoolAndTeacher from "../../components/site-components/forschools/YourSchoolAndTeacher";
import StayEvaluation from "../../components/site-components/forschools/StayEvaluation";
import SchoolReports from "../../components/site-components/forschools/SchoolReports";
import MeasureMatters from "../../components/site-components/forschools/MeasureMatters";
import SchoolInsight from "../../components/site-components/forschools/SchoolInsight";
import PlatformEveryVoice from "../../components/site-components/home/PlatformEveryVoice";
import HowItsWork from "../../components/site-components/home/HowItsWork";

function ForSchools() {
  return (
    <>
      <ScrollRestoration />
      <SchoolsBanner />
      <YourSchoolAndTeacher />
      <StayEvaluation />
      <SchoolReports />
      <MeasureMatters />
      <SchoolInsight />
      <PlatformEveryVoice />
      <HowItsWork />
    </>
  );
}

export default ForSchools;
