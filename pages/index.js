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
        <title>POSTACILAR | YAPI</title>
        <meta name="description" content="Postacılar Yapı — Bursa'nın güvenilir konut geliştiricisi. Life, Life 2, Prestige, Nova, Yakamoz ve daha fazla projeyi keşfedin." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.postacilar.com" />
        <link rel="icon" href="/meta-logo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Postacılar Yapı" />
        <meta property="og:title" content="POSTACILAR | YAPI" />
        <meta property="og:description" content="Postacılar Yapı — Bursa'nın güvenilir konut geliştiricisi. Life, Life 2, Prestige, Nova, Yakamoz ve daha fazla projeyi keşfedin." />
        <meta property="og:url" content="https://www.postacilar.com" />
        <meta property="og:image" content="https://www.postacilar.com/logo.webp" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="POSTACILAR | YAPI" />
        <meta name="twitter:description" content="Postacılar Yapı — Bursa'nın güvenilir konut geliştiricisi. Life, Life 2, Prestige, Nova, Yakamoz ve daha fazla projeyi keşfedin." />
        <meta name="twitter:image" content="https://www.postacilar.com/logo.webp" />
      </Head>
      <Header refs={[projectsSectionRef, contactSectionRef, aboutUsSectionRef]} />
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
      <Footer />
      <StickyButtons />
    </div>
  )
}
