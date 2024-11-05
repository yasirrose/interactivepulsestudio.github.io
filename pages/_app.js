import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.bundle.css";
import "../styles/globals.scss";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}
