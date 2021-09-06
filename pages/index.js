import Head from 'next/head'
import Header from '../components/header'
import BigLogo from '../components/big-logo'
import AboutUs from '../components/about-us'
import Icons from '../components/icons'
import Projects from '../components/projetcs'
import ProjectMap from '../components/project-map'
import { useRef } from 'react'
export default function Home() {
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const aboutUsSectionRef = useRef(null)
  const logoRef = useRef(null);

  return (
    <div >
      <Head>
        <title>POSTACILAR | YAPI</title>
        <meta name="description" content="Postacılar Life yapı projesi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header refs={[projectsSectionRef, contactSectionRef, aboutUsSectionRef]} />
      <BigLogo />
      <Icons />
      <AboutUs aboutUsRef={aboutUsSectionRef}/>
      <Projects projectsRef={projectsSectionRef} />
      <ProjectMap contactRef={contactSectionRef} />
    </div>
  )
}
