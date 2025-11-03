import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import ThemeToggle from "./components/helper/theme-toggle";
import WelcomeAlert from "./components/helper/welcome-alert";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./context/ThemeContext";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://gauravgavhane.vercel.app'),
  title: "Portfolio of Gaurav Gavhane - Software Developer",
  description:
    "This is the portfolio of Gaurav Gavhane. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
  icons: {
    icon: "/myphoto.png",
    shortcut: "/myphoto.png",
    apple: "/myphoto.png",
  },
  openGraph: {
    title: "Portfolio of Gaurav Gavhane - Software Developer",
    description: "Full Stack Developer specializing in MERN stack, AI, and Embedded Systems",
    images: ["/myphoto.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ToastContainer />
          <WelcomeAlert />
          <ThemeToggle />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </ThemeProvider>
        {/* ✅ Google Tag Manager */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}
