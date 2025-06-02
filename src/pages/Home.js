import HeroBanner from "../components/HeroBanner";
import WhyShopWithUs from "../components/WhyShopWithUs";
import AboutUs from "../components/AboutUs";
import HomeProductSection from "../components/HomeProductSection";

function Home(props) {
  return (
    <>
      <HeroBanner />
      <HomeProductSection products={props.products} />
      <WhyShopWithUs />
      <AboutUs />
    </>
  )
}

export default Home;