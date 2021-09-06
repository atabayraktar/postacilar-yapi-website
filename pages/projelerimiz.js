import Head from 'next/head'
import Header from '../components/header'
import AllProjects from '../components/all-projects'
import { useRef } from 'react'
export default function Home() {
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const aboutUsSectionRef = useRef(null)

  return (
    <div >
      <Head>
        <title>POSTACILAR | YAPI Projelerimiz</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header refs={[projectsSectionRef, contactSectionRef, aboutUsSectionRef]} />
      <AllProjects />
    </div>
  )
}
