import { ScrollRestoration } from "react-router-dom"
import HomeBanner from "../../components/home/HomeBanner"

const Home = () => {
  return (
    <>
      <ScrollRestoration />
      <HomeBanner />
    </>
  )
}

export default Home