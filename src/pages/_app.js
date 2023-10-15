import "../styles/globals.css";
import "../assets/__colors.scss";
import "../assets/__typography.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
