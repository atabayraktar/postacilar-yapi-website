import Head from 'next/head'
import Header from '../components/header'
import AllProjects from '../components/all-projects'
import StickyButtons from '../components/sticky-buttons'
import Footer from '../components/footer'
import { useRef } from 'react'

export default function Home() {
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const aboutUsSectionRef = useRef(null)

  return (
    <div >
      <Head>
        <title>Projelerimiz | Postacılar Yapı — Çanakkale Konut Projeleri</title>
        <meta name="description" content="Postacılar Yapı'nın tüm konut projeleri — Life, Life 2, Prestige, Nova, Yakamoz, İdil, Nilüfer ve Lotus. Çanakkale'de modern ve kaliteli yaşam alanlarını keşfedin." />
        <meta name="keywords" content="Postacılar Yapı projeleri, Çanakkale konut projeleri, Life konut, Life 2 konut, Prestige konut, Nova konut, Yakamoz konut, İdil konut, Nilüfer konut, Lotus konut, Çanakkale satılık daire" />
        <meta name="author" content="Postacılar Yapı" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="TR-17" />
        <meta name="geo.placename" content="Çanakkale" />
        <link rel="canonical" href="https://www.postacilar.com/projelerimiz" />
        <link rel="icon" href="/meta-logo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Postacılar Yapı" />
        <meta property="og:title" content="Projelerimiz | Postacılar Yapı — Çanakkale Konut Projeleri" />
        <meta property="og:description" content="Postacılar Yapı'nın tüm konut projeleri — Life, Life 2, Prestige, Nova, Yakamoz, İdil, Nilüfer ve Lotus. Çanakkale'de yaşam alanlarını keşfedin." />
        <meta property="og:url" content="https://www.postacilar.com/projelerimiz" />
        <meta property="og:image" content="https://www.postacilar.com/logo.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Postacılar Yapı — Tüm konut projeleri" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projelerimiz | Postacılar Yapı" />
        <meta name="twitter:description" content="Postacılar Yapı'nın tüm konut projeleri — Life, Life 2, Prestige, Nova, Yakamoz, İdil, Nilüfer ve Lotus. Çanakkale'de yaşam alanlarını keşfedin." />
        <meta name="twitter:image" content="https://www.postacilar.com/logo.webp" />
        <meta name="twitter:image:alt" content="Postacılar Yapı konut projeleri" />
      </Head>
      <Header refs={[projectsSectionRef, contactSectionRef, aboutUsSectionRef]} />
      <main>
        <AllProjects />
      </main>
      <Footer />
      <StickyButtons />
    </div>
  )
}
