'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import IconGarmentory from '../public/icons/icon-garmentory';
import IconGlue from '../public/icons/icon-glue';
import IconMLSPA from '../public/icons/icon-MLSPA';
import IconRemax from '../public/icons/icon-remax';
import IconPrompt from '../public/icons/icon-prompt';
import IconTicketmaster from '../public/icons/icon-tickermaster';
import './Hero.css';

const headings = [
  { line1: 'Accounts payable', line2: 'automation, ', accent: 'solved' },
  { line1: 'International', line2: 'payments, ', accent: 'solved' },
  { line1: 'Vendor', line2: 'management, ', accent: 'solved' },
];

const logos = [
  { component: <IconGarmentory />, alt: 'Garmentory' },
  { component: <IconGlue />, alt: 'Glue' },
  { component: <IconMLSPA />, alt: 'MLSPA' },
  { component: <IconRemax />, alt: 'RE/MAX' },
  { component: <IconPrompt />, alt: 'Prompt' },
  { component: <IconTicketmaster />, alt: 'Ticketmaster' },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % headings.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="hero">
      <div className="hero__texture">
        <Image
          src="/images/hero-texture.png"
          alt="Decorative background texture"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="hero__content section-container">
        <div className="hero__inner">
          <div className="hero__title-area">
            <h1 className="hero__title">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  className="hero__title-lines"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                  <span>{headings[index].line1}</span>
                  {'\n'}
                  <span>{headings[index].line2}</span>
                  <em className="hero__title-accent">{headings[index].accent}</em>
                </motion.span>
              </AnimatePresence>
            </h1>
          </div>

          <div className="hero__bottom">
            <div className="hero__cta-area">
              <p className="hero__subtitle">
                Nullam mi ligula, varius ornare purus ac, accumsan venenatis leo.
                Aliquam nisl felis, rutrum ac scelerisque sit amet, porttitor sit
                amet erat. Vivamus ut congue metus.
              </p>
              <div className="hero__buttons">
                <Button label="Request a demo" variant="primary" />
                <Button
                  label="Watch a video"
                  variant="ghost"
                  icon={
                    <Image
                      src="/icons/icon-play.svg"
                      alt="Play video"
                      width={16}
                      height={16}
                    />
                  }
                />
              </div>
            </div>

            <div className="hero__logos">
              {logos.map((logo, i) => (
                <div key={i} className="hero__logo-cell">
                  <span className="hero__logo-img">{logo.component}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
