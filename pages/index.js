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
        <meta name="description" content="Postacılar Yapı web sitesi" />
        <link rel="icon" href="/meta-logo.webp" />
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
