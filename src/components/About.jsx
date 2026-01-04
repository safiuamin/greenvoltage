function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Modern residential home"
              loading="lazy"
            />
          </div>

          <div className="about-text">
            <span className="section-tag">About Green Voltage</span>
            <h2>Our Mission</h2>
            <p>
              Green Voltage is a new Canadian company dedicated to helping homeowners
              reduce energy costs through professionally installed solar and lighting systems.
            </p>
            <p>
              We are assembling a team of certified installers who will bring years of hands-on 
              experience to every project. We will guide you through the entire process, from 
              initial consultation and permitting to installation and utility interconnection.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">2025</span>
                <span className="highlight-label">Launch Year</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">100%</span>
                <span className="highlight-label">Commitment</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">Green</span>
                <span className="highlight-label">Energy Focus</span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;