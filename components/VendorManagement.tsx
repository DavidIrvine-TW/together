'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import TextLink from './TextLink';
import './VendorManagement.css';

const cards = [
  {
    title: 'Onboarding',
    bgClass: 'vendor-card__illustration--eucalyptus',
    description: 'Sed ipsum orci, lobortis egestas tortor a, molestie condimentum orci. Fusce pretium maximus erat, vitae varius.',
    linkLabel: 'Explore Onboarding',
    mockup: 'form',
    mobileImage: '/images/onboarding.webp',
  },
  {
    title: 'Tax Management',
    bgClass: 'vendor-card__illustration--olive',
    description: 'Sed ipsum orci, lobortis egestas tortor a, molestie condimentum orci. Fusce pretium maximus erat, vitae varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkLabel: 'Explore Tax Management',
    mockup: 'table',
    mobileImage: '/images/tax.webp',
  },
  {
    title: 'Risk Checks',
    bgClass: 'vendor-card__illustration--sea',
    description: 'Sed ipsum orci, lobortis egestas tortor a, molestie condimentum orci. Fusce pretium maximus erat, vitae varius.',
    linkLabel: 'Explore Risk Checks',
    mockup: 'risk',
    mobileImage: '/images/risk.webp',
  },
];

function OnboardingMockup() {
  return (
    <div className="vendor-mockup vendor-mockup--onboarding">
      <div className="bg-white/15 p-[7px] rounded-[7px] overflow-hidden">
        <div className="vendor-mockup__card">
          <div className="flex items-center justify-between mb-[12px]">
            <p className="font-inter font-medium text-[16px] text-tg-dark-100 tracking-[-0.5px]">Create a vendor</p>
            <div className="flex items-center gap-[10px]">
              <span className="font-inter font-medium text-[11px] text-tg-dark-45">Step 1/3</span>
              <div className="flex gap-[3px]">
                <span className="w-[16px] h-[3px] rounded-[1px] bg-tg-electric" />
                <span className="w-[16px] h-[3px] rounded-[1px] bg-tg-grey" />
                <span className="w-[16px] h-[3px] rounded-[1px] bg-tg-grey" />
              </div>
            </div>
          </div>

          {/* Display name */}
          <div className="mb-[10px]">
            <p className="font-inter font-medium text-[11px] text-tg-dark-80 mb-[5px]">Display name</p>
            <div className="bg-black/[0.03] border border-black/[0.08] rounded-[4px] px-[14px] py-[8px]">
              <span className="font-inter text-[13px] text-tg-dark-100 tracking-[-0.4px]">Acme Inc</span>
            </div>
          </div>

          {/* Vendor type */}
          <div className="mb-[10px]">
            <p className="font-inter font-medium text-[11px] text-tg-dark-80 mb-[5px]">Vendor type</p>
            <div className="flex gap-[7px]">
              <div className="flex-1 border border-black/[0.08] rounded-[4px] px-[11px] py-[8px] flex items-center gap-[9px]">
                <div className="w-[14px] h-[14px] rounded-full bg-tg-electric flex-shrink-0" />
                <span className="font-inter text-[13px] text-tg-dark-100">Business</span>
              </div>
              <div className="flex-1 border border-black/[0.08] rounded-[4px] px-[11px] py-[8px] flex items-center gap-[9px]">
                <div className="w-[14px] h-[14px] rounded-full bg-[#f7f7f7] border border-black/5 flex-shrink-0" />
                <span className="font-inter text-[13px] text-tg-dark-100">Individual</span>
              </div>
            </div>
          </div>

          {/* Country */}
          <div className="mb-[10px]">
            <p className="font-inter font-medium text-[11px] text-tg-dark-80 mb-[5px]">Country</p>
            <div className="bg-black/[0.03] border border-black/[0.08] rounded-[4px] px-[11px] py-[8px] flex items-center justify-between">
              <div className="flex items-center gap-[9px]">
                <div className="w-[15px] h-[15px] rounded-full overflow-hidden border border-black/10 flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-[#B22234]" />
                  <div className="absolute top-[2px] left-0 w-full h-[2px] bg-white" />
                  <div className="absolute top-[5px] left-0 w-full h-[2px] bg-white" />
                  <div className="absolute top-[8px] left-0 w-full h-[2px] bg-white" />
                  <div className="absolute top-[11px] left-0 w-full h-[2px] bg-white" />
                  <div className="absolute top-0 left-0 w-[8px] h-[8px] bg-[#3C3B6E]" />
                </div>
                <span className="font-inter text-[13px] text-tg-dark-100 tracking-[-0.4px]">United States</span>
              </div>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0">
                <path d="M3.5 5L6.5 8L9.5 5" stroke="rgba(2,23,32,0.45)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Email address — focused/active state */}
          <div className="mb-[16px]">
            <p className="font-inter font-medium text-[11px] text-tg-dark-80 mb-[5px]">Email address</p>
            <div className="bg-black/[0.03] border border-black/40 rounded-[4px] px-[14px] py-[8px]">
              <span className="font-inter text-[13px] text-tg-dark-100 tracking-[-0.4px]">adam.smith@acme.com</span>
            </div>
          </div>

          <button type="button" className="bg-tg-electric text-white font-inter font-medium text-[13px] rounded-[4px] px-[15px] py-[10px]">
            Create vendor
          </button>
        </div>
      </div>
    </div>
  );
}

const tableRows = [
  { vendor: 'Apex Innovations', country: 'United States' },
  { vendor: 'Genesis Corp', country: 'Canada' },
  { vendor: 'MaxEng Inc', country: 'Australia' },
  { vendor: 'J-soft Solutions', country: 'United Kingdom' },
  { vendor: 'Nexus Ltd.', country: 'Brazil' },
  { vendor: 'Horizon Tech', country: 'Mexico' },
  { vendor: 'Bebidas Co', country: 'Japan' },
  { vendor: 'Mono Inc', country: 'China' },
  { vendor: 'Horizon Tech', country: 'Spain' },
];

function CheckboxIcon() {
  return (
    <div className="w-[14px] h-[14px] rounded-[3px] bg-tg-electric flex items-center justify-center flex-shrink-0">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function TableMockup() {
  return (
    <div className="vendor-mockup vendor-mockup--table">
      {/* Filter badges */}
      <div className="absolute top-[44px] left-[70px] flex gap-[20px] items-center z-10">
        <span className="font-inter font-medium text-[12px] text-tg-dark-100 flex items-center gap-[6px]">
          Tax info:
          <span className="bg-tg-electric/15 text-tg-electric px-[8px] py-[2px] rounded-full text-[12px] inline-flex items-center gap-[2px]">
            Missing
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </span>
        </span>
        <span className="font-inter font-medium text-[12px] text-tg-dark-100 flex items-center gap-[6px]">
          Total paid in a year:
          <span className="bg-tg-electric/15 text-tg-electric px-[8px] py-[2px] rounded-full text-[12px] inline-flex items-center gap-[2px]">
            &gt;600,000 USD
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </span>
        </span>
      </div>

      {/* Table — wide, overflows right, at 50% opacity */}
      <div className="vendor-mockup__table-card absolute left-[70px] top-1/2 -translate-y-1/2 mt-[68px] opacity-50">
        <table className="w-full text-[11px] font-inter">
          <thead>
            <tr className="bg-[#f7f8fd] text-tg-dark-60 font-medium border-b border-black/5">
              <th className="text-left py-[8px] px-[11px] w-[26px]"><CheckboxIcon /></th>
              <th className="text-left py-[8px] px-[7px] w-[150px]">Vendor</th>
              <th className="text-left py-[8px] px-[7px]">Tax info</th>
              <th className="text-left py-[8px] px-[7px]">Compliance</th>
              <th className="text-left py-[8px] px-[7px]">Country</th>
              <th className="text-left py-[8px] px-[7px]">Due date</th>
              <th className="text-left py-[8px] px-[7px]">Amount due</th>
            </tr>
          </thead>
          <tbody className="text-tg-dark-100 font-medium">
            {tableRows.map((row, i) => (
              <tr key={i} className="border-b border-black/5 h-[40px]">
                <td className="py-[10px] px-[11px]"><CheckboxIcon /></td>
                <td className="py-[10px] px-[7px]">{row.vendor}</td>
                <td className="py-[10px] px-[7px]"><span className="inline-block w-[5px] h-[5px] rounded-[1px] bg-[#f6c413] mr-[7px]" />Missing</td>
                <td className="py-[10px] px-[7px] text-tg-dark-60">Not evaluated</td>
                <td className="py-[10px] px-[7px]">{row.country}</td>
                <td className="py-[10px] px-[7px]">June 19</td>
                <td className="py-[10px] px-[7px]">10,500.00 USD</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-[261px] bg-gradient-to-b from-transparent to-tg-olive to-[60%] pointer-events-none" />

      {/* Bottom action bar */}
      <div className="absolute bottom-[30px] left-[34px] right-[34px] bg-white/20 p-[8px] rounded-[10px] z-10">
        <div className="bg-white border border-black/[0.08] rounded-[8px] px-[20px] py-[14px] flex items-center justify-between">
          <div className="flex items-center gap-[7px]">
            <span className="font-inter font-medium text-[14px] text-tg-dark-100">Selected</span>
            <span className="bg-tg-electric/10 text-tg-electric font-inter font-medium text-[11px] px-[5px] py-[2px] rounded-full tracking-[-0.46px]">16</span>
            <span className="font-inter font-medium text-[14px] text-tg-dark-100">vendors that are missing tax info</span>
          </div>
          <button type="button" className="bg-tg-electric text-white font-inter font-medium text-[13px] rounded-[4px] px-[15px] py-[10px] h-[32px] flex items-center">
            Request W-8/W-9
          </button>
        </div>
      </div>
    </div>
  );
}

function WarningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
      <path d="M8 1L14.93 13H1.07L8 1Z" fill="#EC3E3E" stroke="#EC3E3E" strokeWidth="0.5"/>
      <path d="M8 6V9M8 11H8.01" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function RiskMockup() {
  return (
    <div className="vendor-mockup vendor-mockup--risk">
      <div className="bg-white/20 p-[8px] rounded-[8px] overflow-hidden">
        <div className="bg-white rounded-[6px] pt-[30px] pb-[24px] px-[30px]">
          <div className="mb-[29px]">
            <p className="font-inter font-medium text-[24px] text-black tracking-[-0.72px] leading-none mb-[14px]">Stellar Solutions</p>
            <p className="font-inter text-[13px] text-tg-dark-80 leading-none">
              Business <span className="text-tg-dark-100/15 mx-[4px]">&bull;</span> C-Corporation
            </p>
          </div>
          <div className="w-[295px]">
            <div className="border-t border-b border-black/5 flex h-[72px]">
              <div className="flex-1 border-r border-black/5 py-[16px] flex flex-col gap-[10px]">
                <p className="font-inter font-medium text-[12px] text-tg-dark-60 tracking-[0.24px] leading-none">TIN check</p>
                <div className="flex items-center gap-[8px]">
                  <WarningIcon />
                  <p className="font-inter text-[15px] text-tg-dark-100 leading-none">Mismatch</p>
                </div>
              </div>
              <div className="flex-1 pl-[12px] py-[16px] flex flex-col gap-[10px]">
                <p className="font-inter font-medium text-[12px] text-tg-dark-60 tracking-[0.24px] leading-none">TIN</p>
                <div className="flex items-center gap-[10px]">
                  <p className="font-inter text-[15px] text-tg-dark-100 leading-none">&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</p>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
                    <path d="M1.5 9C1.5 9 4.125 3.75 9 3.75C13.875 3.75 16.5 9 16.5 9C16.5 9 13.875 14.25 9 14.25C4.125 14.25 1.5 9 1.5 9Z" fill="rgba(2,23,32,0.45)"/>
                    <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex h-[72px]">
              <div className="flex-1 py-[16px] flex flex-col gap-[10px]">
                <p className="font-inter font-medium text-[12px] text-tg-dark-60 tracking-[0.24px] leading-none">Watchlist</p>
                <div className="flex items-center gap-[8px]">
                  <WarningIcon />
                  <p className="font-inter text-[15px] text-tg-dark-100 leading-none">Hits found</p>
                </div>
              </div>
            </div>
            <div className="bg-[#ff4545]/10 rounded-[3px] px-[10px] py-[9px]">
              <p className="font-inter font-medium text-[12px] text-[#ec3e3e] tracking-[-0.24px] leading-[1.2]">Payments are on hold due to compliance issues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VendorManagement() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section className="vendor-management">
      <div className="vendor-management__inner section-container">
        <div className="vendor-management__heading">
          <h2 className="vendor-management__title">
            Expand your vendor base, without losing compliance
          </h2>
          <p className="vendor-management__subtitle">
            Nullam mi ligula, varius ornare purus ac, accumsan venenatis leo. Aliquam nisl felis, rutrum ac scelerisque sit amet.
          </p>
        </div>

        <Swiper
          className="vendor-management__cards"
          slidesPerView="auto"
          spaceBetween={24}
          breakpoints={{
            0: { enabled: false },
            768: { enabled: true },
          }}
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i} className="vendor-card">
              <p className="vendor-card__title">{card.title}</p>
              <div className={`vendor-card__illustration ${card.bgClass}`}>
                {isMobile ? (
                  <Image
                    src={card.mobileImage}
                    alt={card.title}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <>
                    {card.mockup === 'form' && <OnboardingMockup />}
                    {card.mockup === 'table' && <TableMockup />}
                    {card.mockup === 'risk' && <RiskMockup />}
                  </>
                )}
              </div>
              <div className="vendor-card__body">
                <p className="vendor-card__desc">{card.description}</p>
                <TextLink label={card.linkLabel} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
