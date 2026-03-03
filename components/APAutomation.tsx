'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import './APAutomation.css';

interface Tab {
  id: string;
  title: string;
  description: string;
  linkLabel: string;
}

const INTERVAL = 5000;

const tabs: Tab[] = [
  {
    id: 'invoice-capture',
    title: 'Invoice Capture',
    description:
      'Sed ipsum orci, lobortis egestas tortor a, molestie condimentum orci. Fusce pretium maximus erat.',
    linkLabel: 'Explore',
  },
  {
    id: 'approval-workflows',
    title: 'Approval Workflows',
    description:
      'Sed ipsum orci, lobortis egestas tortor a, molestie condimentum orci. Fusce pretium maximus erat.',
    linkLabel: 'Explore',
  },
  {
    id: 'payment-reconciliation',
    title: 'Payment Reconciliation',
    description:
      'Sed ipsum orci, lobortis egestas tortor a, molestie condimentum orci. Fusce pretium maximus erat.',
    linkLabel: 'Explore',
  },
  {
    id: 'po-matching',
    title: 'PO Matching',
    description:
      'Sed ipsum orci, lobortis egestas tortor a, molestie condimentum orci. Fusce pretium maximus erat.',
    linkLabel: 'Explore',
  },
];

function ScanTimer({ onComplete }: { onComplete: () => void }) {
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => `(${v.toFixed(2)} sec)`);

  useEffect(() => {
    const controls = animate(count, 5, {
      duration: INTERVAL / 1000,
      ease: 'linear',
      onComplete,
    });
    return () => controls.stop();
  }, [count, onComplete]);

  return <motion.span className="ap-illustration__step-time">{display}</motion.span>;
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5.5L4 7.5L8 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function APAutomation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [scanDone, setScanDone] = useState(false);

  const handleScanComplete = useCallback(() => {
    setScanDone(true);
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
      setProgressKey((k) => k + 1);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="ap-automation">
      <div className="ap-automation__container section-container">
        <div className="ap-automation__row">
          {/* LEFT: Heading + Tab List */}
          <div className="ap-automation__left">
            <div className="ap-automation__heading-area">
              <h2 className="ap-automation__heading">
                Automate your accounts payable
              </h2>
            </div>

            <div className="ap-automation__tabs" role="tablist">
              {tabs.map((tab, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => goTo(i)}
                    className={`ap-automation__tab ${isActive ? 'ap-automation__tab--active' : 'ap-automation__tab--inactive'}`}
                  >
                    {isActive && (
                      <motion.span
                        key={progressKey}
                        className="ap-automation__tab-progress"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                      />
                    )}
                    <span className="ap-automation__tab-title">{tab.title}</span>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className="ap-automation__tab-content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <p className="ap-automation__tab-desc">
                            {tab.description}
                          </p>
                          <span className="ap-automation__tab-link" aria-label={`${tab.linkLabel} - ${tab.title}`}>
                            {tab.linkLabel}  <span className="ap-automation__tab-link-arrow">→</span>
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Product UI Illustration */}
          <div className="ap-automation__illustration " aria-hidden="true">
            {/* Decorative sidebars */}
            <div className="ap-illustration__sidebar ap-illustration__sidebar--left" />
            <div className="ap-illustration__sidebar ap-illustration__sidebar--right" />

            <div className="ap-illustration__inner ">
              {/* Invoice card with decorative overlays */}
              <div className="ap-illustration__card-wrap">
                {!scanDone && (
                  <>
                    <motion.div
                      className="ap-illustration__scan-line"
                      style={{ left: 0, width: '100%' }}
                      initial={{ bottom: 0 }}
                      animate={{ bottom: '100%' }}
                      transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                    />
                    <motion.div
                      className="ap-illustration__gradient-fade"
                      initial={{ height: 0 }}
                      animate={{ height: '100%' }}
                      transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                    />
                  </>
                )}
                <AnimatePresence>
                  {scanDone && (
                    <motion.div
                      className="ap-illustration__flash"
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: [0, 0.9, 0], scale: [1, 1.04, 1] }}
                      transition={{ duration: 0.5, times: [0, 0.2, 1], ease: 'easeOut' }}
                    />
                  )}
                </AnimatePresence>
                <div className="ap-illustration__card">
                  {/* Top: Company info */}
                  <div className="ap-illustration__card-top">
                    <div className="ap-illustration__company">
                      <p className="ap-illustration__company-name">Sparks Software Solutions</p>
                      <p className="ap-illustration__company-address">
                        456 Innovation Way<br />
                        Sedona, WA 12345<br />
                        022-611-0087
                      </p>
                    </div>
                  </div>

                  {/* Invoice meta + Bill to row */}
                  <div className="ap-illustration__meta-billto-row">
                    <div className="ap-illustration__bill-to">
                      <p className="ap-illustration__bill-to-header">
                        <strong>Bill to:</strong>{' '}
                        <span className="ap-illustration__bill-to-name">Technogadget Inc</span>
                      </p>
                      <p className="ap-illustration__bill-to-address">
                        456 Innovation Way,<br />
                        APT. 201, Austin,<br />
                        TX 78704
                      </p>
                    </div>

                    <div className="ap-illustration__invoice-meta">
                      <p className="ap-illustration__meta-row">
                        <span className="ap-illustration__meta-label">Invoice number:</span>{' '}
                        <span className="ap-illustration__meta-value">#406737</span>
                      </p>
                      <p className="ap-illustration__meta-row">
                        <span className="ap-illustration__meta-label">Invoice date:</span>{' '}
                        <span className="ap-illustration__meta-value">June 12</span>
                      </p>
                      <p className="ap-illustration__meta-row">
                        <span className="ap-illustration__meta-label">Amount due:</span>{' '}
                        <span className="ap-illustration__meta-value">$2,028.30</span>
                      </p>
                    </div>
                  </div>

                  {/* Line items table */}
                  <div className="ap-illustration__table">
                    <div className="ap-illustration__table-header">
                      <span className="ap-illustration__table-col ap-illustration__table-col--desc">Item</span>
                      <span className="ap-illustration__table-col ap-illustration__table-col--qty">Qty</span>
                      <span className="ap-illustration__table-col ap-illustration__table-col--rate">Rate</span>
                      <span className="ap-illustration__table-col ap-illustration__table-col--amount">Amount</span>
                    </div>
                    <div className="ap-illustration__table-row">
                      <span className="ap-illustration__table-col ap-illustration__table-col--desc">Software License</span>
                      <span className="ap-illustration__table-col ap-illustration__table-col--qty">1</span>
                      <span className="ap-illustration__table-col ap-illustration__table-col--rate">$499.00</span>
                      <span className="ap-illustration__table-col ap-illustration__table-col--amount">$499.00</span>
                    </div>
                    <div className="ap-illustration__table-row">
                      <span className="ap-illustration__table-col ap-illustration__table-col--desc">Development Services</span>
                      <span className="ap-illustration__table-col ap-illustration__table-col--qty">5hrs</span>
                      <span className="ap-illustration__table-col ap-illustration__table-col--rate">$125.00</span>
                      <span className="ap-illustration__table-col ap-illustration__table-col--amount">$1,501.50</span>
                    </div>
                    <div className="ap-illustration__table-row">
                      <span className="ap-illustration__table-col ap-illustration__table-col--desc">Support</span>
                      <span className="ap-illustration__table-col ap-illustration__table-col--qty">10hrs</span>
                      <span className="ap-illustration__table-col ap-illustration__table-col--rate">$75.00</span>
                      <span className="ap-illustration__table-col ap-illustration__table-col--amount">$750.00</span>
                    </div>
                  </div>

                  {/* Bottom: Totals + Notes */}
                  <div className="ap-illustration__card-bottom">
                    <div className="ap-illustration__totals">
                      <div className="ap-illustration__total-row">
                        <span className="ap-illustration__total-label">Subtotal:</span>
                        <span className="ap-illustration__total-value">$1,874.75</span>
                      </div>
                      <div className="ap-illustration__total-row">
                        <span className="ap-illustration__total-label">Tax(8.25%):</span>
                        <span className="ap-illustration__total-value">$154.30</span>
                      </div>
                      <div className="ap-illustration__total-row ap-illustration__total-row--grand">
                        <span className="ap-illustration__total-label">Total:</span>
                        <span className="ap-illustration__total-value">$2,028.30</span>
                      </div>
                    </div>
                    <div className="ap-illustration__notes">
                      <p className="ap-illustration__notes-label">Notes:</p>
                      <p className="ap-illustration__notes-text">
                        Please remit funds to:<br />
                        Global Bank<br />
                        ABA:66790088<br />
                        Account:1258761
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scan annotation lines (hidden for now) */}
              </div>

              {/* Progress stepper */}
              <div className="ap-illustration__stepper">
                <div className="ap-illustration__step ap-illustration__step--done">
                  <div className="ap-illustration__step-dot ap-illustration__step-dot--done">
                    <CheckIcon />
                  </div>
                  <div className="ap-illustration__step-content">
                    <span className="ap-illustration__step-label">Scan complete </span>
                    <ScanTimer onComplete={handleScanComplete} />
                  </div>
                </div>
                <span className="ap-illustration__step-connector">&#8250;&#8250;</span>
                <div className={`ap-illustration__step ${scanDone ? 'ap-illustration__step--done' : 'ap-illustration__step--active'}`}>
                  <div className={`ap-illustration__step-dot ${scanDone ? 'ap-illustration__step-dot--done' : 'ap-illustration__step-dot--active ap-illustration__step-dot--spinner'}`}>
                    {scanDone && <CheckIcon />}
                  </div>
                  <div className="ap-illustration__step-content">
                    <span className="ap-illustration__step-label">Creating bill</span>
                  </div>
                </div>
                <span className="ap-illustration__step-connector">&#8250;&#8250;</span>
                <div className={`ap-illustration__step ${scanDone ? 'ap-illustration__step--done' : 'ap-illustration__step--pending'}`}>
                  <div className={`ap-illustration__step-dot ${scanDone ? 'ap-illustration__step-dot--done ap-illustration__step-dot--green' : 'ap-illustration__step-dot--pending'}`}>
                    {scanDone && <CheckIcon />}
                  </div>
                  <div className="ap-illustration__step-content">
                    <span className="ap-illustration__step-label">Sending for approval</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
