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
            <h2>Your Local Solar Experts</h2>
            <p>
              Green Voltage is a locally owned company dedicated to helping homeowners
              reduce energy costs through professionally installed solar and lighting systems.
            </p>
            <p>
              Our NABCEP-certified installers bring years of hands-on experience to every project.
              We guide you through the entire process, from initial consultation and permitting
              to installation and utility interconnection.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">12+</span>
                <span className="highlight-label">Years in Business</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">1,200+</span>
                <span className="highlight-label">Installations</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">A+</span>
                <span className="highlight-label">BBB Rating</span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">Schedule Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
