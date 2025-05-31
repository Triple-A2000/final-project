function WhyShopWithUs() {
  const features = [
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders over $50.",
      bg: "../images/Blue-Background.png"
    
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days.",
    },
    {
      icon: "🔒",
      title: "Secure Checkout",
      description: "Your payment information is safe with us.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "We are here for you anytime you need us.",
    },
  ];

  return (
    <section className="why-us-section container">
      <h3 className="section-title">Why Shop With Us</h3>
      <div className="features-grid">
        {features.map((item, index) => (
          <div key={index} className="feature-card">
            <span className="feature-icon">{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyShopWithUs;
