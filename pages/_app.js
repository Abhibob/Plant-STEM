import Head from "next/head";
import "../styles/App.css";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
//All metadata is in THIS component.

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        {" "}
        <title>PlantSTEM</title>
      </Head>
      <noscript>You need to enable JavaScript to run this app.</noscript>

      <div id="root" />
      {/*
                This HTML file is a template.
                If you open it directly in the browser, you will see an empty page.

                You can add webfonts, meta tags, or analytics to this file.
                The build step will place the bundled scripts into the <body> tag.

                To begin the development, run `npm start` or `yarn start`.
                To create a production bundle, use `npm run build` or `yarn build`.
            */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
