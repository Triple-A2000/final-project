import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content container">
        <p className="eyebrow">New Arrivals</p>
        <h2 className="headline">
          Style that fits your story
        </h2>
        <p className="subhead">Clothing • Shoes • Accessories</p>
        <Link to="/product" className="btn-primary">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default HeroBanner;
