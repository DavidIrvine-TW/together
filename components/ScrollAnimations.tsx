'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const ctx = gsap.context(() => {
      // Individual elements - fade up
      const selectors = [
        '.vendor-management__title',
        '.vendor-management__subtitle',
        '.integration-sync__heading',
        ...(!isMobile ? ['.integration-sync__partner'] : []),
        '.footer__cta-heading',
        '.footer__cta .btn-primary',
        '.footer__nav-col',
      ].join(', ');

      gsap.utils.toArray<Element>(selectors).forEach(el => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            once: true,
          },
        });
      });

      // Testimonials bento grid - staggered
      gsap.utils.toArray<Element>('.testimonials__grid > *').forEach((el, i) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.testimonials__grid',
            start: 'top 75%',
            once: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
