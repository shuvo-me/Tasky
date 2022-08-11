import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "store/store";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <Provider store={store}>
      {loading ? (
        <Preloader />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
}

export default MyApp;
