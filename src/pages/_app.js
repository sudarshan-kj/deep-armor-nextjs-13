import "src/styles/global.scss";
import MainLayout from "../layouts/MainLayout";
import GauntletLayout from "../layouts/GauntletLayout";
import { Outfit } from "@next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const isGauntletPage = Component?.isGauntletPage;
  return (
    <div className={outfit.className}>
      {isGauntletPage ? (
        <div>
          <GauntletLayout>
            <Component {...pageProps} />
          </GauntletLayout>
        </div>
      ) : (
        <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
      )}
    </div>
  );
}
