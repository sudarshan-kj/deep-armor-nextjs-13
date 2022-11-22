import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import "/styles/global.scss";
import Solutions from "./Solutions";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Deep Armor</title>
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <Hero />
        <main>
          <Solutions />
          <div>This will take some effort and time</div>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
