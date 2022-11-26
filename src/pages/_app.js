import "src/styles/global.scss";
import MainLayout from "../components/MainLayout";
import { Outfit } from "@next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div className={outfit.className}>
      <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
    </div>
  );
}
