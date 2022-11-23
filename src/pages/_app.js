import "src/styles/global.scss";
import Layout from "../components/layout";
import { Outfit } from "@next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={outfit.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
