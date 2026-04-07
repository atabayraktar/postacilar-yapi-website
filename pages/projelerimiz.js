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
        <meta name="description" content="Postacılar Yapı | Projelerimiz" />
        <link rel="icon" href="/meta-logo.webp" />
      </Head>
      <Header refs={[projectsSectionRef, contactSectionRef, aboutUsSectionRef]} />
      <AllProjects />
      <Footer />
      <StickyButtons />
    </div>
  )
}
