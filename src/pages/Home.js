import HeroBanner from "../components/HeroBanner";
import WhyShopWithUs from "../components/WhyShopWithUs";
import AboutUs from "../components/AboutUs";
import HomeProductSection from "../components/HomeProductSection";

function Home(props) {
  return (
    <>
      <HeroBanner />
      <WhyShopWithUs />
      <HomeProductSection products={props.products} />
      <AboutUs />
    </>
  )
}

export default Home;