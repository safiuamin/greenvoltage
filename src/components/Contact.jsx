import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <span className="section-tag">Get In Touch</span>
            <h2>Ready to Go Green?</h2>
            <p>
              Get a free consultation and customized quote for your energy needs.
              Our experts are ready to help you make the switch to sustainable energy.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">&#128205;</span>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Energy Drive, Green City, EC 12345</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">&#128222;</span>
                <div>
                  <h4>Call Us</h4>
                  <p>(555) 123-VOLT</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">&#9993;</span>
                <div>
                  <h4>Email Us</h4>
                  <p>info@greenvoltage.com</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="solar">Solar Panel Installation</option>
                  <option value="lighting">Smart Lighting Solutions</option>
                  <option value="switches">Automated Detection Switches</option>
                  <option value="audit">Energy Audit</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Request Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
