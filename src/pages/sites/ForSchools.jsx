import { ScrollRestoration } from "react-router-dom";
import SchoolsBanner from "../../components/forschools/SchoolsBanner";
import YourSchoolAndTeacher from "../../components/forschools/YourSchoolAndTeacher";
import StayEvaluation from "../../components/forschools/StayEvaluation";
import SchoolReports from "../../components/forschools/SchoolReports";
import MeasureMatters from "../../components/forschools/MeasureMatters";
import SchoolInsight from "../../components/forschools/SchoolInsight";
import PlatformEveryVoice from "../../components/home/PlatformEveryVoice";
import HowItsWork from "../../components/home/HowItsWork";

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
