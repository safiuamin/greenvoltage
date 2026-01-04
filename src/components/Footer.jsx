function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M13 6L8 13H11L10 18L16 11H12L13 6Z" fill="currentColor"/>
              </svg>
              Green Voltage
            </a>
            <p>
              Empowering homes and businesses with sustainable energy solutions
              for a cleaner, greener future.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">&#128101;</a>
              <a href="#" aria-label="Twitter">&#128038;</a>
              <a href="#" aria-label="LinkedIn">&#128188;</a>
              <a href="#" aria-label="Instagram">&#128247;</a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Solar Installation</a></li>
                <li><a href="#services">Smart Lighting</a></li>
                <li><a href="#services">Automated Switches</a></li>
                <li><a href="#services">Energy Audits</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Why Choose Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Warranty</a></li>
                <li><a href="#">Maintenance</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Green Voltage. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
