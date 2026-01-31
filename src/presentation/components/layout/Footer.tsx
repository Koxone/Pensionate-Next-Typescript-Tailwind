'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  PhoneIcon, 
  MailIcon, 
  MapPinIcon, 
  FacebookIcon, 
  TwitterIcon, 
  LinkedInIcon, 
  InstagramIcon 
} from '../ui/Icons';
import { footerNavigation, contactInfo } from '@infrastructure/data/mockData';

export const Footer: React.FC = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* CTA Section */}
        <div className="footer-cta">
          <h3 className="footer-cta-title">¿Listo para asegurar tu futuro?</h3>
          <p className="footer-cta-description">
            Agenda una consulta gratuita con nuestros expertos y comienza a planificar tu retiro hoy.
          </p>
          <button 
            className="btn btn-white"
            onClick={() => handleNavigation('/contacto')}
          >
            Agenda tu Cita Gratis
          </button>
        </div>

        {/* Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div 
              className="footer-logo cursor-pointer" 
              onClick={() => handleNavigation('/')}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="currentColor" />
                <path d="M16 8v8l6 3" stroke="#0052CC" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>PensionPlus</span>
            </div>
            <p className="footer-description">
              Tu aliado experto en pensiones y planificación del retiro. 
              Te ayudamos a construir el futuro financiero que mereces.
            </p>
            <div className="footer-social">
              <a 
                href={contactInfo.social.facebook} 
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a 
                href={contactInfo.social.twitter} 
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon size={18} />
              </a>
              <a 
                href={contactInfo.social.linkedin} 
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a 
                href={contactInfo.social.instagram} 
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h4 className="footer-title">Servicios</h4>
            <div className="footer-links">
              {footerNavigation.servicios.map((item) => (
                <button
                  key={item.href}
                  className="footer-link text-left"
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h4 className="footer-title">Empresa</h4>
            <div className="footer-links">
              {footerNavigation.empresa.map((item) => (
                <button
                  key={item.href}
                  className="footer-link text-left"
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4 className="footer-title">Contacto</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <PhoneIcon className="footer-contact-icon" size={18} />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="footer-contact-item">
                <MailIcon className="footer-contact-icon" size={18} />
                <span>{contactInfo.email}</span>
              </div>
              <div className="footer-contact-item">
                <MapPinIcon className="footer-contact-icon" size={18} />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} PensionPlus. Todos los derechos reservados.
          </p>
          <div className="footer-legal">
            {footerNavigation.legal.map((item) => (
              <button
                key={item.href}
                className="footer-legal-link"
                onClick={() => handleNavigation(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
