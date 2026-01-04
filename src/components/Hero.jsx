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
        <h1>
          Power Your Home with
          <span className="highlight"> Solar Energy</span>
        </h1>
        <p>
          Professional residential solar installation and smart lighting solutions. 
          Lower your energy bills and increase your home value with clean, renewable power.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get Free Estimate</a>
          <a href="#services" className="btn btn-secondary">Our Services</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">1,200+</span>
            <span className="stat-label">Homes Powered</span>
          </div>
          <div className="stat">
            <span className="stat-number">35%</span>
            <span className="stat-label">Avg. Bill Reduction</span>
          </div>
          <div className="stat">
            <span className="stat-number">25yr</span>
            <span className="stat-label">System Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
