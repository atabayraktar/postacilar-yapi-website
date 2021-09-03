import Head from 'next/head'
import Header from '../components/header'
import BigLogo from '../components/big-logo'
import FlatTypes from '../components/flat-types'
import Contact from '../components/contanct'
import SwiperSlides from '../components/swiper-slides'
import InteriorImgs from '../components/interior-imgs'
import { useRef } from 'react'
import AboutUs from '../components/about-us'
export default function Home() {
  const flatSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const logoRef = useRef(null);

  return (
    <div >
      <Head>
        <title>Postacılar Life</title>
        <meta name="description" content="Postacılar Life yapı projesi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header refs={[flatSectionRef, contactSectionRef]} />
      <BigLogo />
      <AboutUs />
      <InteriorImgs />
      <FlatTypes flatRef={flatSectionRef} />
      <Contact contactRef={contactSectionRef} />

    </div>
  )
}
