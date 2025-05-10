import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 🌟 Colonne 1 : Logo & Slogan */}
        <div className="footer-logo">
          <img src="/logoAmaniFull.png" alt="Amani Logo" />
          <p className="footer-slogan">"The Key to Your Comfort."</p>
        </div>

        {/* 🔗 Colonne 2 : Navigation rapide */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/client-portal">Client Portal</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* 📍 Colonne 3 : Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt className="icon" /> 29 BD Lalla Yacout,Casablanca, Morocco</p>
          <p><FaPhone className="icon" /> +33 670 779 256</p>
          <p><FaEnvelope className="icon" /> contact.amani.home@gmail.com</p>
        </div>

        {/* 🌐 Colonne 4 : Réseaux sociaux */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="www.facebook.com" target="_blank" rel=""><FaFacebookF /></a>
            <a href="wWw.instagram.com" target="_blank" rel=""><FaInstagram /></a>
            <a href="www.linkedin.com" target="_blank" rel=""><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* 🔹 Mentions légales & CGV */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AMANI. All rights reserved.</p>
        <p><Link to="/terms">Terms & Conditions</Link> | <Link to="/privacy">Privacy Policy</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
