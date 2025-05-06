import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          {/* Primary Meta Tags */}
          <meta name="title" content="Tadeu Tupinambá - Software Engineer & Full Stack Developer" />
          <meta name="description" content="Experienced software engineer with over 10+ years in Node.js, Golang, React, and SQL/NoSQL databases. Expert in crafting robust, scalable web applications." />
          <meta name="keywords" content="Tadeu Tupinambá, Software Engineer, Full Stack Developer, Node.js, Golang, React, SQL, NoSQL, JavaScript, TypeScript, Software Craftsman" />
          <meta name="author" content="Tadeu Tupinambá" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.tadeutupinamba.com.br/" />
          <meta property="og:title" content="Tadeu Tupinambá - Software Engineer & Full Stack Developer" />
          <meta property="og:description" content="Experienced software engineer with over 10+ years in Node.js, Golang, React, and SQL/NoSQL databases." />
          <meta property="og:image" content="https://github.com/tupizz.png" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.tadeutupinamba.com.br/" />
          <meta property="twitter:title" content="Tadeu Tupinambá - Software Engineer & Full Stack Developer" />
          <meta property="twitter:description" content="Experienced software engineer with over 10+ years in Node.js, Golang, React, and SQL/NoSQL databases." />
          <meta property="twitter:image" content="https://github.com/tupizz.png" />

          <meta name="theme-color" content="#1F2029" />
          <link rel="canonical" href="https://www.tadeutupinamba.com.br/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
