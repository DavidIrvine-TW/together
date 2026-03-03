import Image from 'next/image';
import Button from './Button';
import './Footer.css';

const navColumns = [
  {
    sections: [
      {
        heading: 'Products',
        links: ['AP Automation', 'Payments', 'Vendor Management', 'Integrations', 'Security', 'Pricing'],
      },
    ],
  },
  {
    sections: [
      {
        heading: 'Features',
        links: ['Invoice Capture & OCR', 'Approval Workflows', 'PO Matching', 'Payment Reconciliation', 'Role-based Controls', 'Compliance'],
      },
    ],
  },
  {
    sections: [
      {
        heading: 'Solutions by Industry',
        links: ['Marketplaces', 'Gig Economy', 'Insurance', 'Real Estate', 'Healthcare', 'Advertising'],
      },
      {
        heading: 'Solutions by Team',
        links: ['Controllers', 'Accountants', "CFO's", 'Developers'],
      },
    ],
  },
  {
    sections: [
      {
        heading: 'Resources',
        links: ['All resources', 'Blog', 'Guides & Research Reports', 'Videos & Webinars', 'Tools & Calculators', 'Customers', 'Partners', 'Support'],
      },
      {
        heading: 'Developers',
        links: ['Guides', 'Recipes', 'API Reference', 'Changelog'],
      },
    ],
  },
  {
    sections: [
      {
        heading: 'Company',
        links: ['About', 'Careers', 'Press'],
      },
      {
        heading: 'Legal',
        links: ['Terms of Service', 'Privacy Policy', 'Data Processing Addendum'],
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__texture">
        <Image
          src="/images/footer-texture.png"
          alt="Decorative background texture"
          fill
          className="object-cover object-right-top opacity-40"
        />
      </div>

      <div className="footer__inner section-container">
        {/* CTA Section */}
        <div className="footer__cta">
          <h2 className="footer__cta-heading">
            <span>A smarter </span>
            <em className="footer__cta-italic">way to scale</em>
            <br />
            <span>accounts payable</span>
          </h2>
          <Button label="Request a demo" variant="primary" />
        </div>

        {/* Navigation Grid */}
        <nav className="footer__nav" aria-label="Footer navigation">
          {navColumns.map((col, i) => (
            <div key={i} className="footer__nav-col">
              {col.sections.map((section, j) => (
                <div key={j} className="footer__nav-section">
                  <p className="footer__nav-heading">{section.heading}</p>
                  <ul className="footer__nav-list">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="footer__nav-link" aria-label={link}>{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
