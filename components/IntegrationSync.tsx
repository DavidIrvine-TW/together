import Image from 'next/image';
import './IntegrationSync.css';

const partners = [
  {
    logo: '/icons/logo-netsuite.svg',
    alt: 'NetSuite',
    width: 103,
    height: 35,
    description: 'Scale your enterprise business with Routable + NetSuite.',
    link: 'Explore NetSuite',
  },
  {
    logo: '/icons/logo-sage.svg',
    alt: 'Sage',
    width: 82,
    height: 46,
    description: 'Drive your business with Routable + Sage Intacct.',
    link: 'Explore Sage',
  },
  {
    logo: '/icons/logo-quickbooks.svg',
    alt: 'QuickBooks',
    width: 61,
    height: 60,
    description: 'Save time and money with a real time, two-way sync.',
    link: 'Explore QuickBooks',
  },
  {
    logo: '/icons/logo-xero.svg',
    alt: 'Xero',
    width: 61,
    height: 60,
    description: 'Makes sending invoices and paying bills a breeze.',
    link: 'Explore Xero',
  },
];

export default function IntegrationSync() {
  return (
    <section className="integration-sync">
      {/* Partner Integrations */}
      <div className="integration-sync__partners section-container">
        <h2 className="integration-sync__heading">
          <span>Perfectly synced, </span>
          <em className="integration-sync__heading-italic">every time. </em>
          <span className="integration-sync__heading-dim">Experience a true two-way sync, with 99.8% accuracy.</span>
        </h2>

        <div className="integration-sync__grid">
          {partners.map((partner, i) => (
            <div key={i} className="integration-sync__partner">
              <div className="integration-sync__partner-logo">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                />
              </div>
              <div className="integration-sync__partner-content">
                <p className="integration-sync__partner-desc">{partner.description}</p>
                <a href="#" className="integration-sync__partner-link" aria-label={partner.link}>
                  {partner.link}  <span className="integration-sync__partner-link-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
