function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img
          src="https://www.intermtnwindandsolar.com/wp-content/uploads/2018/05/DJI_0005.jpg"
          alt="Home with rooftop solar panels"
          loading="eager"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <span className="coming-soon-badge">Coming Soon</span>
        <h1>
          The Future of
          <span className="highlight"> Home Energy</span>
        </h1>
        <p>
          Green Voltage is launching soon with professional residential solar installation
          and smart lighting solutions. Get ready to lower your energy bills and power
          your home with clean, renewable energy.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn btn-primary">Explore Services</a>
          <a href="#contact" className="btn btn-secondary">Get Notified</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">30%+</span>
            <span className="stat-label">Expected Savings</span>
          </div>
          <div className="stat">
            <span className="stat-number">25yr</span>
            <span className="stat-label">System Warranty</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support Planned</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;