import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useApp } from '../context/AppContext';

const ITEMS = [
    { src: '/homepage-count-up/etap.webp', alt: 'Proje etap ikonu', key: 'projects' },
    { src: '/homepage-count-up/m2.webp', alt: 'Metrekare ikonu', key: 'sqm' },
    { src: '/homepage-count-up/daire.webp', alt: 'Daire ikonu', key: 'apartments' },
    { src: '/homepage-count-up/kullanici.webp', alt: 'Kullanıcı ikonu', key: 'users' },
];

const ENDS = { projects: 8, sqm: 75256, apartments: 200, users: 718 };

export default function ProjectsCountUp() {
    const { t } = useApp();
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '-100px 0px 0px 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} style={{ minHeight: 100 }}>
            <div className="w-100">
                <div className="container count-up">
                    {ITEMS.map(({ src, alt, key }) => (
                        <div key={key} className="count-up-item">
                            <Image
                                src={src}
                                width={64}
                                height={64}
                                alt={alt}
                                objectFit="contain"
                            />
                            <div className="count-up-number">
                                {isVisible ? (
                                    <CountUp
                                        className="count-up-number-value"
                                        start={0}
                                        delay={0.5}
                                        duration={5}
                                        end={ENDS[key]}
                                    />
                                ) : (
                                    <span className="count-up-number-value">0</span>
                                )}
                                <p className="count-up-number-title">{t(`counter.${key}`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
