import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyStore",
  description: "A Next.js e-commerce starter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* <CartProvider>
          <Header /> */}
        <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
          {children}
        </main>
        {/* <Footer />
        </CartProvider> */}
      </body>
    </html>
  );
}
