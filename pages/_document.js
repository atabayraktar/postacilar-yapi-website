import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#1c1c1c" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="apple-touch-icon" href="/meta-logo.webp" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Postacılar Yapı",
              "url": "https://www.postacilar.com",
              "logo": "https://www.postacilar.com/logo.webp",
              "image": "https://www.postacilar.com/logo.webp",
              "description": "Çanakkale'nın güvenilir konut geliştiricisi. Life, Life 2, Prestige, Nova, Yakamoz, İdil, Nilüfer ve Lotus projelerini keşfedin.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Çanakkale",
                "addressCountry": "TR"
              },
              "areaServed": "Çanakkale"
            }) }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
