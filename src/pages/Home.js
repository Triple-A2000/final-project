import HeroBanner from "../components/HeroBanner";
import WhyShopWithUs from "../components/WhyShopWithUs";
import AboutUs from "../components/AboutUs";
import HomeProductSection from "../components/HomeProductSection";

function Home() {
  return (
    <>
      <HeroBanner />
      <WhyShopWithUs />
      <HomeProductSection setProductId={props.setProductId} products={props.products} />
      <AboutUs />
    </>
  )
}

export default Home;