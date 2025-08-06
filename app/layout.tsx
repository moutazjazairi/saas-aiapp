import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClerkProviderWrapper from "@/components/ClerkProviderWrapper";

export const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable}`}>
      <body className="antialiased" suppressHydrationWarning={true}>
        <div>
        <ClerkProviderWrapper>
          <Navbar />
          {children}
        </ClerkProviderWrapper>
        </div>
      </body>
    </html>
  );
}