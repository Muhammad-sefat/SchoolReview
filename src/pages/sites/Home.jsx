import { ScrollRestoration } from "react-router-dom"
import HomeBanner from "../../components/home/HomeBanner"
import FindSchools from "../../components/home/FindSchools"
import ShareYourVoice from "../../components/home/ShareYourVoice"
import PlatformEveryVoice from "../../components/home/PlatformEveryVoice"
import TrustedByTeachers from "../../components/home/TrustedByTeachers"
import BuiltSchoolsAndTeachers from "../../components/home/BuiltSchoolsAndTeachers"
import HowItsWork from "../../components/home/HowItsWork"

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
  )
}

export default Home