import Head from 'next/head'
import Header from '../components/header'
import BigLogo from '../components/big-logo'
import AboutUs from '../components/about-us'
import Icons from '../components/icons'
import Projects from '../components/projetcs'
import ProjectMap from '../components/project-map'
import ProjectsCountUp from '../components/projects-count-up'
import StickyButtons from '../components/sticky-buttons'
import Footer from '../components/footer'
import { useRef } from 'react'

export default function Home() {
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const aboutUsSectionRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Postacılar Yapı | Çanakkale İnşaat Firması & Satılık Daire Projeleri</title>
        <meta name="description" content="Postacılar Yapı — Çanakkale'nin güvenilir inşaat firması ve müteahhidi. Esenler, Kepez, Barbaros mahallelerinde satılık sıfır daire projeleri: Life, Life 2, Prestige, Nova, Yakamoz, İdil, Nilüfer, Lotus. 2+1, 3+1 seçenekleri." />
        <meta name="keywords" content="Postacılar Yapı, çanakkale inşaat firması, çanakkale müteahhit, çanakkale yapı firması, çanakkale inşaat şirketi, çanakkale satılık daire, çanakkale sıfır daire, çanakkale yeni daire, çanakkale konut projeleri, çanakkale 3+1 satılık, çanakkale 2+1 satılık, çanakkale satılık ev, çanakkale apartman, çanakkale gayrimenkul, çanakkale emlak, esenler mahallesi satılık daire, kepez satılık daire, barbaros mahallesi konut, çanakkale deniz manzaralı daire, çanakkale lüks konut, çanakkale merkez satılık daire, Postacılar Life, Postacılar Prestige, Postacılar Nova, Postacılar Yakamoz, çanakkale konut fiyatları, çanakkale ev fiyatları" />
        <meta name="author" content="Postacılar Yapı" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="TR-17" />
        <meta name="geo.placename" content="Çanakkale" />
        <link rel="canonical" href="https://www.postacilar.com" />
        <link rel="icon" href="/meta-logo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Postacılar Yapı" />
        <meta property="og:title" content="Postacılar Yapı | Çanakkale İnşaat Firması & Satılık Daire Projeleri" />
        <meta property="og:description" content="Postacılar Yapı — Çanakkale'nin güvenilir inşaat firması. Esenler, Kepez, Barbaros mahallelerinde sıfır satılık daire projeleri: Life, Prestige, Nova, Yakamoz ve daha fazlası." />
        <meta property="og:url" content="https://www.postacilar.com" />
        <meta property="og:image" content="https://www.postacilar.com/logo.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Postacılar Yapı — Çanakkale'nin güvenilir inşaat firması" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Postacılar Yapı | Çanakkale İnşaat & Satılık Daire" />
        <meta name="twitter:description" content="Postacılar Yapı — Çanakkale'nin güvenilir inşaat firması. Esenler, Kepez, Barbaros'ta sıfır daire projeleri. Life, Prestige, Nova, Yakamoz ve daha fazlası." />
        <meta name="twitter:image" content="https://www.postacilar.com/logo.webp" />
        <meta name="twitter:image:alt" content="Postacılar Yapı logosu" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Postacılar Yapı",
            "url": "https://www.postacilar.com",
            "logo": "https://www.postacilar.com/logo.webp",
            "image": "https://www.postacilar.com/logo.webp",
            "description": "Çanakkale'nin güvenilir inşaat firması ve müteahhidi. Esenler, Kepez ve Barbaros mahallelerinde satılık sıfır daire konut projeleri.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Çanakkale",
              "addressRegion": "Çanakkale",
              "addressCountry": "TR"
            },
            "areaServed": [
              { "@type": "City", "name": "Çanakkale" },
              { "@type": "Neighborhood", "name": "Esenler Mahallesi" },
              { "@type": "Neighborhood", "name": "Kepez" },
              { "@type": "Neighborhood", "name": "Barbaros Mahallesi" },
              { "@type": "Neighborhood", "name": "Boğazkent Mahallesi" }
            ],
            "knowsAbout": ["konut inşaatı", "satılık daire", "müteahhitlik", "apartman projeleri"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Çanakkale Konut Projeleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "ApartmentComplex",
                    "name": "Postacılar Life",
                    "description": "42 daireli, 3+1 konut projesi. Esenler Mahallesi, Şehit Ömer Halis Demir Caddesi, Çanakkale Merkez.",
                    "address": { "@type": "PostalAddress", "streetAddress": "Esenler Mahallesi, Şehit Ömer Halis Demir Caddesi No: 18/2", "addressLocality": "Çanakkale", "addressCountry": "TR" },
                    "url": "https://www.postacilar.com/postacilar-life"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "ApartmentComplex",
                    "name": "Postacılar Life 2",
                    "description": "42 daireli, 2+1 ve 3+1 konut projesi. Esenler Mahallesi, Gazi Meclis Caddesi, Çanakkale Merkez.",
                    "address": { "@type": "PostalAddress", "streetAddress": "Esenler Mahallesi, Gazi Meclis Caddesi No: 12", "addressLocality": "Çanakkale", "addressCountry": "TR" },
                    "url": "https://www.postacilar.com/postacilar-life2"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "ApartmentComplex",
                    "name": "Postacılar Prestige",
                    "description": "28 daireli lüks konut projesi. Deniz, doğa ve şehir manzarası. Boğazkent Mahallesi, Kepez / Çanakkale.",
                    "address": { "@type": "PostalAddress", "streetAddress": "Boğazkent Mahallesi, Seyit Onbaşı Caddesi No: 19", "addressLocality": "Çanakkale", "addressRegion": "Kepez", "addressCountry": "TR" },
                    "url": "https://www.postacilar.com/postacilar-prestige"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "ApartmentComplex",
                    "name": "Postacılar Nova",
                    "description": "1+1, 2+1, 3+1 ve dubleks daire seçenekleri. Deniz manzarası, modern mimari. Çanakkale.",
                    "address": { "@type": "PostalAddress", "addressLocality": "Çanakkale", "addressCountry": "TR" },
                    "url": "https://www.postacilar.com/postacilar-nova"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "ApartmentComplex",
                    "name": "Postacılar Yakamoz",
                    "description": "Boğaz manzaralı, yeni kordon cepheli konut projesi. Barbaros Mahallesi, 100. Yıl Caddesi, Çanakkale.",
                    "address": { "@type": "PostalAddress", "streetAddress": "Barbaros Mahallesi, 100. Yıl Caddesi", "addressLocality": "Çanakkale", "addressCountry": "TR" },
                    "url": "https://www.postacilar.com/postacilar-yakamoz"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "ApartmentComplex",
                    "name": "Postacılar İdil",
                    "description": "10 daireli apartman projesi. Okul, park ve hastanelere yakın. Esenler Mahallesi, Çanakkale.",
                    "address": { "@type": "PostalAddress", "streetAddress": "Esenler Mahallesi", "addressLocality": "Çanakkale", "addressCountry": "TR" },
                    "url": "https://www.postacilar.com/postacilar-idil"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "ApartmentComplex",
                    "name": "Postacılar Nilüfer",
                    "description": "36 daireli, 2+1 ve 3+1 konut projesi. Esenler Mahallesi, Çanakkale.",
                    "address": { "@type": "PostalAddress", "streetAddress": "Esenler Mahallesi", "addressLocality": "Çanakkale", "addressCountry": "TR" },
                    "url": "https://www.postacilar.com/postacilar-nilufer"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "ApartmentComplex",
                    "name": "Postacılar Lotus",
                    "description": "16 daireli, sahile yürüme mesafesinde, Çanakkale Boğazı manzaralı konut projesi. Kepez, Çanakkale.",
                    "address": { "@type": "PostalAddress", "streetAddress": "Kepez", "addressLocality": "Çanakkale", "addressCountry": "TR" },
                    "url": "https://www.postacilar.com/postacilar-lotus"
                  }
                }
              ]
            }
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Postacılar Yapı hangi bölgelerde konut projesi geliştiriyor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Postacılar Yapı, Çanakkale'nin Esenler Mahallesi, Kepez, Barbaros Mahallesi ve Boğazkent Mahallesi gibi çeşitli semtlerinde satılık daire projeleri geliştirmektedir."
                }
              },
              {
                "@type": "Question",
                "name": "Çanakkale'de satılık sıfır daire projeleri nelerdir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Postacılar Yapı'nın Çanakkale'deki konut projeleri: Postacılar Life, Life 2, Prestige, Nova, Yakamoz, İdil, Nilüfer ve Lotus. 1+1, 2+1, 3+1 ve dubleks daire seçenekleri mevcuttur."
                }
              },
              {
                "@type": "Question",
                "name": "Çanakkale Kepez'de satılık daire var mı?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet. Postacılar Yapı'nın Kepez bölgesinde Postacılar Prestige (Boğazkent Mahallesi) ve Postacılar Lotus projeleri yer almaktadır."
                }
              },
              {
                "@type": "Question",
                "name": "Çanakkale Esenler Mahallesi'nde satılık daire var mı?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet. Postacılar Yapı'nın Esenler Mahallesi'ndeki projeleri: Postacılar Life (Şehit Ömer Halis Demir Caddesi), Postacılar Life 2 (Gazi Meclis Caddesi), Postacılar İdil ve Postacılar Nilüfer."
                }
              },
              {
                "@type": "Question",
                "name": "Çanakkale'de deniz manzaralı daire projeleri hangileri?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Postacılar Yakamoz (Barbaros Mahallesi, yeni kordon cephesi), Postacılar Prestige (Kepez, Çanakkale Boğazı manzarası) ve Postacılar Lotus (Kepez, sahile yürüme mesafesi) deniz manzaralı projelerdir."
                }
              }
            ]
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
