import React from "react";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import Document, { Head, Html, Main, NextScript } from "next/document";

// import type { DocumentContext } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.cdnfonts.com/css/gotham" rel="prelink" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          <link
            href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;700;900&family=Merriweather:wght@300;400;700;900&family=Nunito:wght@200;300;400;600;800&family=Raleway:wght@200;300;400;500;600;800;900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: function (App) {
        return function (props) {
          return React.createElement(
            StyleProvider,
            { cache: cache },
            React.createElement(App, props)
          );
        };
      },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: React.createElement(
      React.Fragment,
      null,
      initialProps.styles,
      React.createElement("style", {
        dangerouslySetInnerHTML: { __html: style },
      })
    ),
  };
};

export default MyDocument;
