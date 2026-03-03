'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useInView, useMotionValue, useTransform, motion, animate } from 'framer-motion';
import IconPrompt from '../public/icons/icon-prompt';
import IconRemax from '../public/icons/icon-remax';
import IconTicketmaster from '../public/icons/icon-tickermaster';
import './Testimonials.css';

const stats = [
  { icon: '/icons/icon-arrow-down.svg', target: 80, prefix: '', suffix: '%', label: 'manual payment tasks', direction: 'down' },
  { icon: '/icons/icon-arrow-down.svg', target: 30, prefix: '', suffix: '%', label: 'international fees', direction: 'down' },
  { icon: '/icons/icon-arrow-down.svg', target: 25, prefix: '', suffix: '%', label: 'payment reconciliation', direction: 'down' },
  { icon: '/icons/icon-arrow-down.svg', target: 100, prefix: '$', suffix: 'K', label: 'saved per year', direction: 'up' },
];

function AnimatedStat({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: 'easeOut' });
    }
  }, [isInView, count, target]);

  return <motion.span ref={ref} className="testimonials__stat-value">{rounded}</motion.span>;
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner section-container">
        {/* Heading */}
        <h2 className="testimonials__heading">
          <span>Nullam mi ligula, varius ornare purus ac, </span>
          <em className="testimonials__heading-italic">accumsan venenatis</em>
          <span> leo.</span>
        </h2>

        {/* Grid */}
        <div className="testimonials__grid">
          {/* Row 1 */}
          <div className="testimonials__logo-card text-tg-dark-100">
            <IconPrompt />
          </div>
          <div className="testimonials__photo-card">
            <Image
              src="/images/testimonial-photo.png"
              alt="Customer testimonial"
              fill
              className="object-cover" style={{ objectPosition: '50% -50px' }}
            />
          </div>
          <div className="testimonials__quote-card">
            <p className="testimonials__quote-text">
              Nullam mi ligula, varius ornare purus ac, accumsan venenatis leo. Aliquam nisl felis, rutrum ac scelerisque sit amet, porttitor sit amet erat. Vivamus ut congue metus.
            </p>
            <div className="testimonials__quote-author">
              <p className="testimonials__author-name">Matt Tait</p>
              <p className="testimonials__author-role">CEO @ REST</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="testimonials__logo-card testimonials__logo-card--remax text-tg-dark-100">
            <IconRemax />
          </div>
          <div className="testimonials__quote-card">
            <p className="testimonials__quote-text">
              Nullam mi ligula, varius ornare purus ac, accumsan venenatis leo. Aliquam nisl felis, rutrum ac scelerisque sit amet, porttitor sit amet erat.
            </p>
            <div className="testimonials__quote-author">
              <p className="testimonials__author-name">David McKay</p>
              <p className="testimonials__author-role">Co-founder @ OBVS</p>
            </div>
          </div>
          <div className="testimonials__logo-card text-tg-dark-100">
            <IconTicketmaster />
          </div>
        </div>

        {/* Stats */}
        <div className="testimonials__stats">
          {stats.map((stat, i) => (
            <div key={i} className="testimonials__stat">
              <div className="testimonials__stat-header">
                <Image
                  src={stat.icon}
                  alt={stat.direction === 'down' ? 'Decrease arrow' : 'Increase arrow'}
                  width={16}
                  height={16}
                  className={stat.direction === 'up' ? 'rotate-180' : ''}
                />
                <AnimatedStat target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="testimonials__stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
