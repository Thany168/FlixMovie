import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Movie App",
  description: "Discover and explore movies easily",

  openGraph: {
    title: "Movie App",
    description: "Discover and explore movies easily",
    url: "https://flix-movie-pi.vercel.app/",
    siteName: "Movie App",
    images: [
      {
        url: "https://flix-movie-pi.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Movie App Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Movie App",
    description: "Discover and explore movies easily",
    images: ["https://flix-movie-pi.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
