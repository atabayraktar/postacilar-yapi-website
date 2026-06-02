import Head from "next/head";
import { useEffect } from "react";

export default function NipKatalog() {
  useEffect(() => {
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.replace("/nip-katalog.pdf");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Katalog</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
        <iframe
          src="/nip-katalog.pdf"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </>
  );
}
