function Features() {
  const features = [
    {
      icon: "&#128200;",
      title: "Real-Time Monitoring",
      description: "Track your energy production and consumption with our intuitive dashboard"
    },
    {
      icon: "&#128274;",
      title: "25-Year Warranty",
      description: "Industry-leading warranty coverage for peace of mind"
    },
    {
      icon: "&#127968;",
      title: "Smart Home Integration",
      description: "Seamlessly connects with popular smart home systems"
    },
    {
      icon: "&#128176;",
      title: "Flexible Financing",
      description: "Multiple payment options including $0 down programs"
    },
    {
      icon: "&#128268;",
      title: "Battery Storage",
      description: "Store excess energy for use during peak hours or outages"
    },
    {
      icon: "&#127757;",
      title: "Carbon Offset Tracking",
      description: "See your environmental impact with detailed CO2 savings reports"
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-content">
          <div className="features-text">
            <span className="section-tag">Why Choose Us</span>
            <h2>Trusted by Homeowners</h2>
            <p>
              Licensed, insured, and committed to quality. We handle every detail
              so you can enjoy the benefits of clean energy without the hassle.
            </p>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon" dangerouslySetInnerHTML={{ __html: feature.icon }}></span>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="features-image">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80"
              alt="Beautiful home exterior"
              loading="lazy"
            />
            <div className="image-badge">
              <span className="badge-number">98%</span>
              <span className="badge-text">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
