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
        <title>POSTACILAR | YAPI Projelerimiz</title>
        <meta name="description" content="Postacılar Yapı'nın tüm konut projeleri — Life, Life 2, Prestige, Nova, Yakamoz, İdil, Nilüfer ve Lotus. Bursa'da yaşam alanlarını keşfedin." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.postacilar.com/projelerimiz" />
        <link rel="icon" href="/meta-logo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Postacılar Yapı" />
        <meta property="og:title" content="POSTACILAR | YAPI Projelerimiz" />
        <meta property="og:description" content="Postacılar Yapı'nın tüm konut projeleri — Life, Life 2, Prestige, Nova, Yakamoz, İdil, Nilüfer ve Lotus. Bursa'da yaşam alanlarını keşfedin." />
        <meta property="og:url" content="https://www.postacilar.com/projelerimiz" />
        <meta property="og:image" content="https://www.postacilar.com/logo.webp" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="POSTACILAR | YAPI Projelerimiz" />
        <meta name="twitter:description" content="Postacılar Yapı'nın tüm konut projeleri — Life, Life 2, Prestige, Nova, Yakamoz, İdil, Nilüfer ve Lotus. Bursa'da yaşam alanlarını keşfedin." />
        <meta name="twitter:image" content="https://www.postacilar.com/logo.webp" />
      </Head>
      <Header refs={[projectsSectionRef, contactSectionRef, aboutUsSectionRef]} />
      <AllProjects />
      <Footer />
      <StickyButtons />
    </div>
  )
}
