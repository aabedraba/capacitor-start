import "@capacitor/core";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    defineCustomElements(window);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
