import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SELECTORS = [
  '[data-animate]',
  '.life-logo-section',
  '.life-about-row',
  '.life-details-row',
  '.life-exterior-section',
  '.life-interior-section',
].join(', ');

export default function ScrollObserver() {
  const router = useRouter();

  useEffect(() => {
    const elements = document.querySelectorAll(SELECTORS);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animated');
          } else {
            entry.target.classList.remove('scroll-animated');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [router.pathname]);

  return null;
}
