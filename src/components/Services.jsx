function Services() {
  const services = [
    {
      icon: "&#9751;",
      title: "Rooftop Solar Systems",
      description: "Custom-designed solar installations for your home. Our certified technicians handle everything from permits to final inspection, ensuring a seamless transition to solar power.",
      image: "https://www.intermtnwindandsolar.com/wp-content/uploads/2018/05/DJI_0005.jpg"
    },
    {
      icon: "&#128161;",
      title: "Smart Lighting",
      description: "Integrated LED lighting systems with occupancy sensors and automated controls. Reduce lighting costs by up to 60% with intelligent scheduling.",
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80"
    },
    {
      icon: "&#9889;",
      title: "Motion-Activated Controls",
      description: "Professional-grade motion sensors and smart switches for every room. Lights activate when you enter and turn off automatically when you leave.",
      image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&q=80"
    },
    {
      icon: "&#128200;",
      title: "Home Energy Assessment",
      description: "Detailed analysis of your home's energy usage with thermal imaging and electrical load testing. Receive a customized plan to maximize your savings.",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=80"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2>Residential Energy Solutions</h2>
          <p>Complete home solar and lighting services from consultation to installation and ongoing support</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="service-content">
                <span className="service-icon" dangerouslySetInnerHTML={{ __html: service.icon }}></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-link">Learn More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
