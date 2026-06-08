import Head from 'next/head'
import dynamic from 'next/dynamic'
import Header from '../components/header'
import BigLogo from '../components/big-logo'
import AboutUs from '../components/about-us'
import Icons from '../components/icons'
import Projects from '../components/projetcs'
import ProjectsCountUp from '../components/projects-count-up'
import StickyButtons from '../components/sticky-buttons'
import Footer from '../components/footer'
import { useRef } from 'react'

const ProjectMap = dynamic(() => import('../components/project-map'), { ssr: false })

export default function Home() {
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const aboutUsSectionRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Postacılar Yapı | Çanakkale Konut Projeleri</title>
        <meta name="description" content="Postacılar Yapı — Çanakkale'nin güvenilir konut geliştiricisi. Life, Life 2, Prestige, Nova, Yakamoz, İdil, Nilüfer ve Lotus projelerini keşfedin. Kaliteli ve modern yaşam alanları." />
        <meta name="keywords" content="Postacılar Yapı, Çanakkale konut projeleri, Çanakkale gayrimenkul, satılık daire Çanakkale, yeni konut Çanakkale, müteahhit Çanakkale, Çanakkale inşaat firması, Postacılar Life, Postacılar Prestige, Çanakkale daire fiyatları" />
        <meta name="author" content="Postacılar Yapı" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="TR-17" />
        <meta name="geo.placename" content="Çanakkale" />
        <link rel="canonical" href="https://www.postacilar.com" />
        <link rel="icon" href="/meta-logo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Postacılar Yapı" />
        <meta property="og:title" content="Postacılar Yapı | Çanakkale Konut Projeleri" />
        <meta property="og:description" content="Postacılar Yapı — Çanakkale'nin güvenilir konut geliştiricisi. Life, Life 2, Prestige, Nova, Yakamoz, İdil, Nilüfer ve Lotus projelerini keşfedin." />
        <meta property="og:url" content="https://www.postacilar.com" />
        <meta property="og:image" content="https://www.postacilar.com/logo.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Postacılar Yapı — Çanakkale'nin güvenilir konut geliştiricisi" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Postacılar Yapı | Çanakkale Konut Projeleri" />
        <meta name="twitter:description" content="Postacılar Yapı — Çanakkale'nin güvenilir konut geliştiricisi. Life, Life 2, Prestige, Nova, Yakamoz ve daha fazla projeyi keşfedin." />
        <meta name="twitter:image" content="https://www.postacilar.com/logo.webp" />
        <meta name="twitter:image:alt" content="Postacılar Yapı logosu" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Postacılar Yapı",
            "url": "https://www.postacilar.com",
            "logo": "https://www.postacilar.com/logo.webp",
            "image": "https://www.postacilar.com/logo.webp",
            "description": "Çanakkale'nin güvenilir konut geliştiricisi. Life, Life 2, Prestige, Nova, Yakamoz, İdil, Nilüfer ve Lotus projelerini keşfedin.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Çanakkale",
              "addressCountry": "TR"
            },
            "areaServed": "Çanakkale",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Konut Projeleri",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "ApartmentComplex", "name": "Postacılar Life" } },
                { "@type": "Offer", "itemOffered": { "@type": "ApartmentComplex", "name": "Postacılar Life 2" } },
                { "@type": "Offer", "itemOffered": { "@type": "ApartmentComplex", "name": "Postacılar Prestige" } },
                { "@type": "Offer", "itemOffered": { "@type": "ApartmentComplex", "name": "Postacılar Nova" } },
                { "@type": "Offer", "itemOffered": { "@type": "ApartmentComplex", "name": "Postacılar Yakamoz" } }
              ]
            }
          }) }}
        />
      </Head>
      <Header refs={[projectsSectionRef, contactSectionRef, aboutUsSectionRef]} />
      <main>
        <BigLogo />
        <section className="sec-icons" data-animate>
          <Icons />
        </section>
        <section className="sec-about" data-animate>
          <AboutUs aboutUsRef={aboutUsSectionRef}/>
        </section>
        <section className="sec-projects" data-animate>
          <Projects projectsRef={projectsSectionRef} />
        </section>
        <section className="sec-stats" data-animate>
          <ProjectsCountUp/>
        </section>
        <section className="sec-contact" data-animate>
          <ProjectMap contactRef={contactSectionRef} />
        </section>
      </main>
      <Footer />
      <StickyButtons />
    </div>
  )
}
