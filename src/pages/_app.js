import "src/styles/global.scss";
import MainLayout from "../layouts/MainLayout";
import GauntletLayout from "../layouts/GauntletLayout";
import { Outfit } from "@next/font/google";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const isGauntletPage = Component?.isGauntletPage;
  return (
    <div className={outfit.className}>
      {isGauntletPage ? (
        <GauntletLayout>
          <Head>
            <title>Gauntlet by Deep Armor</title>
            <link href="/gauntlet.svg" />
          </Head>
          <Component {...pageProps} />
        </GauntletLayout>
      ) : (
        <MainLayout>
          <Head>
            <title>Deep Armor</title>
            <link href="/logo-with-bg.svg" />
          </Head>
          {getLayout(<Component {...pageProps} />)}
        </MainLayout>
      )}
    </div>
  );
}
